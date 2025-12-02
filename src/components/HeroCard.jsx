import React from 'react';
import { Star, Gift, Phone, ChevronRight } from 'lucide-react';

const HeroCard = ({ rank = "Member", points = 0 }) => {
    return (
        <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '16px',
            marginTop: '-60px', // Negative margin to overlap header
            marginLeft: '16px',
            marginRight: '16px',
            position: 'relative',
            zIndex: 20,
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h2 style={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: 'var(--color-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    {rank}
                </h2>

                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: '#E0F7FA',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    color: '#006064',
                    fontWeight: 'bold',
                    fontSize: '14px'
                }}>
                    <div style={{ background: '#4DD0E1', borderRadius: '50%', padding: '2px' }}>
                        <Star size={12} color="white" fill="white" />
                    </div>
                    {points}
                    <ChevronRight size={14} />
                </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0 12px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: '#FFEBEE',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-primary)'
                    }}>
                        <Star size={24} />
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: '500' }}>Tích điểm</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: '#FFEBEE',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-primary)'
                    }}>
                        <Gift size={24} />
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: '500' }}>Ưu đãi</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: '#FFEBEE',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--color-primary)'
                    }}>
                        <Phone size={24} />
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: '500' }}>Liên hệ</span>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
