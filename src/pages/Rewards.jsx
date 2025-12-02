import React from 'react';
import Header from '../components/Header';
import VoucherCard from '../components/VoucherCard';
import { Coins, Gift } from 'lucide-react';
import { VOUCHERS } from '../data/mockData';

const Rewards = () => {
    return (
        <div className="animate-fade-in" style={{ paddingBottom: '100px', background: '#F5F5F5', minHeight: '100vh' }}>
            <Header />

            {/* G-Coin Wallet */}
            <div style={{
                background: 'linear-gradient(135deg, #E31F26 0%, #FF5252 100%)',
                margin: '16px',
                borderRadius: '16px',
                padding: '24px',
                color: 'white',
                boxShadow: '0 8px 16px rgba(227, 31, 38, 0.2)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <Coins size={20} color="white" />
                        <span style={{ fontSize: '14px', fontWeight: '500', opacity: 0.9 }}>Số dư G-Coin</span>
                    </div>
                    <div style={{ fontSize: '32px', fontWeight: 'bold' }}>1,250</div>
                    <div style={{ fontSize: '12px', marginTop: '8px', opacity: 0.8 }}>Hết hạn: 31/12/2024</div>
                </div>
                <Coins size={120} color="white" style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.1 }} />
            </div>

            {/* Vouchers List */}
            <div style={{ padding: '0 16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Gift size={20} color="#E31F26" /> Đổi quà
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {VOUCHERS.map(voucher => (
                        <VoucherCard key={voucher.id} voucher={voucher} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Rewards;
