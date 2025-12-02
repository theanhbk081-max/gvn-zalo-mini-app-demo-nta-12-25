import React from 'react';
import { Wrench, Clock } from 'lucide-react';

const ServiceStatus = ({ isActive = true }) => {
    if (!isActive) return null;

    return (
        <div style={{
            background: 'rgba(255, 165, 0, 0.1)',
            border: '1px solid rgba(255, 165, 0, 0.3)',
            borderRadius: '16px',
            padding: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            cursor: 'pointer',
        }}>
            <div style={{
                width: '48px',
                height: '48px',
                background: 'rgba(255, 165, 0, 0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFA500',
            }}>
                <Wrench size={24} className="animate-pulse-red" style={{ animationDuration: '3s' }} />
            </div>

            <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '14px', fontWeight: 'bold', color: '#FFA500', marginBottom: '4px' }}>
                    Đơn bảo hành #12345
                </h4>
                <p style={{ fontSize: '12px', color: 'var(--color-text)' }}>
                    Đang sửa chữa tại hãng
                </p>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '4px',
            }}>
                <span style={{ fontSize: '10px', color: 'var(--color-text-secondary)' }}>Cập nhật:</span>
                <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'var(--color-text)' }}>10:00 AM</span>
            </div>
        </div>
    );
};

export default ServiceStatus;
