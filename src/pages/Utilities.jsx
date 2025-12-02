import React from 'react';
import BookingForm from '../components/BookingForm';
import WarrantyVault from '../components/WarrantyVault';
import RMATracking from '../components/RMATracking';
import { BOOKING_HISTORY } from '../data/mockData';
import { Calendar, Clock, CheckCircle, AlertCircle } from 'lucide-react';

const Utilities = () => {
    return (
        <div className="animate-fade-in" style={{ paddingBottom: '100px', background: '#F5F5F5', minHeight: '100vh' }}>
            <div style={{ padding: '16px' }}>
                <BookingForm />

                {/* Booking History Section */}
                <div style={{ marginTop: '24px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', color: '#333' }}>Lịch hẹn sắp tới</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        {BOOKING_HISTORY.map(booking => (
                            <div key={booking.id} style={{
                                background: 'white',
                                padding: '16px',
                                borderRadius: '12px',
                                borderLeft: `4px solid ${booking.status === 'Completed' ? '#4CAF50' : '#FF9800'}`,
                                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{booking.service}</span>
                                    <span style={{
                                        fontSize: '12px',
                                        padding: '4px 8px',
                                        borderRadius: '12px',
                                        background: booking.status === 'Completed' ? '#E8F5E9' : '#FFF3E0',
                                        color: booking.status === 'Completed' ? '#2E7D32' : '#EF6C00',
                                        fontWeight: 'bold'
                                    }}>
                                        {booking.status}
                                    </span>
                                </div>
                                <div style={{ display: 'flex', gap: '16px', fontSize: '13px', color: '#666' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Calendar size={14} /> {booking.date}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                        <Clock size={14} /> {booking.time}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '24px' }}>
                    <WarrantyVault />
                </div>

                <div style={{ marginTop: '24px' }}>
                    <RMATracking />
                </div>
            </div>
        </div>
    );
};

export default Utilities;
