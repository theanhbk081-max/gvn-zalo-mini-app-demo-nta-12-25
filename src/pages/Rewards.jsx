import React from 'react';
import { Coins } from 'lucide-react';
import VoucherCard from '../components/VoucherCard';

const Rewards = () => {
    const vouchers = [
        { id: 1, title: 'Giảm 500K mua Laptop', description: 'Áp dụng cho đơn hàng từ 20tr', code: 'GVN500K' },
        { id: 2, title: 'Free Vệ sinh PC', description: 'Miễn phí vệ sinh PC trọn đời', code: 'FREECLEAN' },
    ];

    return (
        <div className="animate-slide-up" style={{ padding: '16px', paddingBottom: '100px' }}>
            {/* Wallet Header */}
            <div style={{
                background: 'var(--gradient-primary)',
                borderRadius: '16px',
                padding: '24px',
                marginBottom: '24px',
                boxShadow: 'var(--shadow-glow)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginBottom: '4px' }}>Số dư G-Coin</div>
                <div style={{ fontSize: '36px', fontWeight: 'bold', color: 'white', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Coins size={32} /> 5,250
                </div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', marginTop: '8px' }}>
                    Hạng ELITE: Tích lũy x2 điểm
                </div>
            </div>

            <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', color: 'var(--color-text)' }}>
                Kho Voucher của tôi
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {vouchers.map(v => (
                    <VoucherCard key={v.id} voucher={v} />
                ))}
            </div>
        </div>
    );
};

export default Rewards;
