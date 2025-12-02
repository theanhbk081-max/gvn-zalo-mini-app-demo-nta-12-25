import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react';
import { useUser } from '../context/UserContext';

const BookingForm = () => {
    const { userSegment, toggleSegment } = useUser();
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [bookingStatus, setBookingStatus] = useState(null); // null, 'success', 'error'

    // Mock Slot Data (Simulating Sync with ALD/CNV)
    const availableSlots = {
        '2023-12-25': ['09:00', '10:00', '14:00'],
        '2023-12-26': ['09:00', '11:00', '15:00', '16:00'],
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call to Booking System
        setTimeout(() => {
            setIsSubmitting(false);
            setBookingStatus('success');

            // Simulate ZNS Notification
            const znsToast = document.createElement('div');
            znsToast.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: white;
                padding: 16px;
                border-radius: 12px;
                box-shadow: 0 4px 20px rgba(0,0,0,0.2);
                z-index: 1000;
                display: flex;
                align-items: center;
                gap: 12px;
                min-width: 300px;
                animation: slideDown 0.5s ease;
            `;
            znsToast.innerHTML = `
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Zalo_Logo.jpg/1200px-Zalo_Logo.jpg" style="width: 40px; height: 40px; border-radius: 8px;" />
                <div>
                    <div style="font-weight: bold; font-size: 14px;">Zalo Notification Service</div>
                    <div style="font-size: 12px; color: #666;">Đặt lịch thành công! Mã: #BK${Math.floor(Math.random() * 1000)}</div>
                </div>
            `;
            document.body.appendChild(znsToast);

            setTimeout(() => {
                znsToast.style.opacity = '0';
                setTimeout(() => znsToast.remove(), 500);
            }, 4000);

        }, 1500);
    };

    return (
        <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-primary)' }}>
                    Đặt lịch hỗ trợ
                </h2>
                <button
                    onClick={toggleSegment}
                    style={{
                        fontSize: '12px',
                        padding: '4px 8px',
                        background: '#eee',
                        borderRadius: '4px',
                        border: 'none',
                        cursor: 'pointer'
                    }}
                >
                    Mode: {userSegment} <RefreshCw size={10} style={{ marginLeft: '4px' }} />
                </button>
            </div>

            {/* Segment Specific Message */}
            {userSegment === 'Elite' && (
                <div style={{ background: '#E8F5E9', padding: '12px', borderRadius: '8px', marginBottom: '16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle size={16} color="#2E7D32" />
                    <span style={{ fontSize: '13px', color: '#2E7D32' }}>Bạn là thành viên Elite! Miễn phí dịch vụ tận nơi.</span>
                </div>
            )}
            {userSegment === 'B2B' && (
                <div style={{ background: '#E3F2FD', padding: '12px', borderRadius: '8px', marginBottom: '16px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <CheckCircle size={16} color="#1565C0" />
                    <span style={{ fontSize: '13px', color: '#1565C0' }}>Khách hàng Doanh nghiệp: Ưu tiên slot hỗ trợ nhanh.</span>
                </div>
            )}

            {bookingStatus === 'success' ? (
                <div className="animate-fade-in" style={{ textAlign: 'center', padding: '24px 0' }}>
                    <div style={{ width: '64px', height: '64px', background: '#E8F5E9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                        <CheckCircle size={32} color="#2E7D32" />
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>Đặt lịch thành công!</h3>
                    <p style={{ fontSize: '14px', color: '#666' }}>Kỹ thuật viên sẽ liên hệ bạn trong vòng 30 phút.</p>
                    <button
                        onClick={() => setBookingStatus(null)}
                        style={{ marginTop: '16px', color: 'var(--color-primary)', fontWeight: 'bold', background: 'none', border: 'none', cursor: 'pointer' }}
                    >
                        Đặt lịch khác
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Ngày hẹn</label>
                        <div style={{ position: 'relative' }}>
                            <Calendar size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                            <input
                                type="date"
                                required
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '12px 12px 12px 40px',
                                    borderRadius: '8px',
                                    border: '1px solid #ddd',
                                    fontSize: '14px',
                                    outline: 'none'
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Giờ hẹn (Slot khả dụng)</label>
                        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                            {(selectedDate && availableSlots[selectedDate]) ? (
                                availableSlots[selectedDate].map(time => (
                                    <button
                                        key={time}
                                        type="button"
                                        onClick={() => setSelectedTime(time)}
                                        style={{
                                            padding: '8px 16px',
                                            borderRadius: '8px',
                                            border: selectedTime === time ? '1px solid var(--color-primary)' : '1px solid #ddd',
                                            background: selectedTime === time ? '#FFEBEE' : 'white',
                                            color: selectedTime === time ? 'var(--color-primary)' : '#333',
                                            cursor: 'pointer',
                                            fontSize: '14px'
                                        }}
                                    >
                                        {time}
                                    </button>
                                ))
                            ) : (
                                <span style={{ fontSize: '13px', color: '#999', fontStyle: 'italic' }}>Vui lòng chọn ngày để xem slot trống (VD: 25/12, 26/12)</span>
                            )}
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '500' }}>Ghi chú</label>
                        <textarea
                            placeholder="Mô tả vấn đề của bạn..."
                            rows={3}
                            style={{
                                width: '100%',
                                padding: '12px',
                                borderRadius: '8px',
                                border: '1px solid #ddd',
                                fontSize: '14px',
                                outline: 'none',
                                resize: 'none'
                            }}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting || !selectedTime}
                        style={{
                            background: 'var(--color-primary)',
                            color: 'white',
                            padding: '14px',
                            borderRadius: '8px',
                            border: 'none',
                            fontWeight: 'bold',
                            fontSize: '16px',
                            cursor: (isSubmitting || !selectedTime) ? 'not-allowed' : 'pointer',
                            opacity: (isSubmitting || !selectedTime) ? 0.7 : 1,
                            marginTop: '8px'
                        }}
                    >
                        {isSubmitting ? 'Đang xử lý...' : 'Xác nhận đặt lịch'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default BookingForm;
