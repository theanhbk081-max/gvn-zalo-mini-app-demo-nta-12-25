import React, { useState } from 'react';
import SlideToConfirm from './SlideToConfirm';
import { Clock } from 'lucide-react';

const VoucherCard = ({ voucher }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleConfirm = () => {
        alert(`Đã đổi voucher: ${voucher.title}`);
        setIsExpanded(false);
    };

    return (
        <div style={{
            background: 'white',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            border: '1px solid #eee'
        }}>
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                style={{ display: 'flex', padding: '12px', gap: '12px', cursor: 'pointer' }}
            >
                <img
                    src={voucher.image}
                    alt={voucher.title}
                    style={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover' }}
                />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '4px', color: '#333' }}>{voucher.title}</h4>
                    <p style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>{voucher.points} G-Coin</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#999' }}>
                        <Clock size={12} /> HSD: 30 ngày
                    </div>
                </div>
            </div>

            {isExpanded && (
                <div className="animate-fade-in" style={{ padding: '12px', borderTop: '1px solid #eee', background: '#FAFAFA' }}>
                    <p style={{ fontSize: '13px', color: '#555', marginBottom: '16px', lineHeight: '1.5' }}>
                        {voucher.description || 'Sử dụng voucher này để được giảm giá trực tiếp vào đơn hàng. Áp dụng tại tất cả chi nhánh GearVN.'}
                    </p>
                    <SlideToConfirm onConfirm={handleConfirm} />
                </div>
            )}
        </div>
    );
};

export default VoucherCard;
