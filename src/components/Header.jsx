import React from 'react';
import { Bell, AlertTriangle } from 'lucide-react';

const Header = ({ userName = "Gamer" }) => {
    const handleSOS = () => {
        // Simulate opening Zalo Chat OA
        alert('Opening Zalo Chat OA: "Tôi cần hỗ trợ kỹ thuật gấp. SĐT: [Phone]"');
    };

    return (
        <header style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '20px 16px',
            background: 'var(--gradient-surface)',
            borderBottom: '1px solid var(--color-border)',
        }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Welcome back,</span>
                <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-text)' }}>{userName}</h1>
            </div>

            <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <button style={{ position: 'relative' }}>
                    <Bell size={24} color="var(--color-text)" />
                    <span style={{
                        position: 'absolute',
                        top: -2,
                        right: -2,
                        width: '8px',
                        height: '8px',
                        backgroundColor: 'var(--color-primary)',
                        borderRadius: '50%',
                    }} />
                </button>

                <button
                    onClick={handleSOS}
                    className="animate-pulse-red"
                    style={{
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        borderRadius: 'var(--radius-full)',
                        width: '40px',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: 'var(--shadow-glow)',
                    }}
                >
                    <AlertTriangle size={20} />
                </button>
            </div>
        </header>
    );
};

export default Header;
