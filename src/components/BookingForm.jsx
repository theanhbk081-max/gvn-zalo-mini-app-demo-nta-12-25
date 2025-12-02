import React, { useState } from 'react';
import { Calendar, User, Phone, PenTool } from 'lucide-react';

const BookingForm = ({ isElite = true }) => {
    const [serviceType, setServiceType] = useState('vesinh');

    const services = [
        { id: 'vesinh', name: 'Vệ sinh Laptop/PC', price: 200000 },
        { id: 'caiwin', name: 'Cài đặt Windows/Soft', price: 150000 },
        { id: 'suachua', name: 'Kiểm tra/Sửa lỗi', price: 100000 },
    ];

    const currentService = services.find(s => s.id === serviceType);

    return (
        <div className="animate-slide-up">
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Calendar color="var(--color-primary)" /> Đặt lịch dịch vụ
            </h2>

            <div style={{
                background: 'var(--color-surface)',
                borderRadius: '16px',
                padding: '20px',
                border: '1px solid var(--color-border)',
            }}>
                <div style={{ marginBottom: '16px', fontSize: '14px', color: 'var(--color-text-secondary)' }}>
                    Gửi yêu cầu hỗ trợ kỹ thuật. Chúng tôi sẽ liên hệ xác nhận trong vòng 30 phút.
                </div>

                <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {/* Name Input */}
                    <div style={{ position: 'relative' }}>
                        <User size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--color-text-secondary)' }} />
                        <input
                            type="text"
                            placeholder="Họ và tên"
                            defaultValue="NTA Gamer"
                            style={{
                                width: '100%',
                                padding: '12px 12px 12px 40px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid var(--color-border)',
                                borderRadius: '8px',
                                color: 'var(--color-text)',
                                outline: 'none',
                            }}
                        />
                    </div>

                    {/* Phone Input */}
                    <div style={{ position: 'relative' }}>
                        <Phone size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--color-text-secondary)' }} />
                        <input
                            type="tel"
                            placeholder="Số điện thoại"
                            defaultValue="0909xxxxxx"
                            style={{
                                width: '100%',
                                padding: '12px 12px 12px 40px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid var(--color-border)',
                                borderRadius: '8px',
                                color: 'var(--color-text)',
                                outline: 'none',
                            }}
                        />
                    </div>

                    {/* Service Select */}
                    <div style={{ position: 'relative' }}>
                        <PenTool size={16} style={{ position: 'absolute', left: '12px', top: '12px', color: 'var(--color-text-secondary)' }} />
                        <select
                            value={serviceType}
                            onChange={(e) => setServiceType(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px 12px 12px 40px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                border: '1px solid var(--color-border)',
                                borderRadius: '8px',
                                color: 'var(--color-text)',
                                outline: 'none',
                                appearance: 'none',
                            }}
                        >
                            {services.map(s => (
                                <option key={s.id} value={s.id}>{s.name}</option>
                            ))}
                        </select>
                    </div>

                    {/* Price Display */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px',
                        background: 'rgba(227, 31, 38, 0.1)',
                        borderRadius: '8px',
                        border: '1px solid rgba(227, 31, 38, 0.2)'
                    }}>
                        <span style={{ fontSize: '14px', color: 'var(--color-text)' }}>Phí dịch vụ:</span>
                        <div style={{ textAlign: 'right' }}>
                            {isElite ? (
                                <>
                                    <span style={{ textDecoration: 'line-through', color: 'var(--color-text-secondary)', fontSize: '12px', marginRight: '8px' }}>
                                        {currentService?.price.toLocaleString()}đ
                                    </span>
                                    <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', fontSize: '16px' }}>
                                        0đ (Elite Free)
                                    </span>
                                </>
                            ) : (
                                <span style={{ color: 'var(--color-text)', fontWeight: 'bold' }}>
                                    {currentService?.price.toLocaleString()}đ
                                </span>
                            )}
                        </div>
                    </div>

                    <button style={{
                        width: '100%',
                        padding: '14px',
                        background: 'var(--gradient-primary)',
                        color: 'white',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        marginTop: '8px',
                        boxShadow: 'var(--shadow-glow)',
                    }}>
                        Gửi yêu cầu
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
