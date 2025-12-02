import React from 'react';
import { Cpu, Monitor, HardDrive, ChevronRight } from 'lucide-react';

const MyRig = () => {
    const rigItems = [
        { id: 1, name: 'VGA ASUS ROG Strix RTX 4090', icon: Monitor, date: '2023-11-15' },
        { id: 2, name: 'CPU Intel Core i9-14900K', icon: Cpu, date: '2023-11-15' },
        { id: 3, name: 'RAM G.Skill Trident Z5 RGB 64GB', icon: HardDrive, date: '2023-11-15' },
    ];

    return (
        <div style={{
            background: 'var(--color-surface)',
            borderRadius: '16px',
            padding: '20px',
            border: '1px solid var(--color-border)',
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--color-text)' }}>My Rig</h3>
                <button style={{ color: 'var(--color-primary)', fontSize: '12px', display: 'flex', alignItems: 'center' }}>
                    Xem tất cả <ChevronRight size={14} />
                </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {rigItems.map((item) => (
                    <div key={item.id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderRadius: '12px',
                        border: '1px solid transparent',
                        transition: 'border-color 0.2s',
                        cursor: 'pointer',
                    }}
                        onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--color-primary)'}
                        onMouseLeave={(e) => e.currentTarget.style.borderColor = 'transparent'}
                    >
                        <div style={{
                            width: '40px',
                            height: '40px',
                            background: 'rgba(227, 31, 38, 0.1)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-primary)'
                        }}>
                            <item.icon size={20} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--color-text)' }}>{item.name}</div>
                            <div style={{ fontSize: '11px', color: 'var(--color-text-secondary)' }}>Mua ngày: {item.date}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyRig;
