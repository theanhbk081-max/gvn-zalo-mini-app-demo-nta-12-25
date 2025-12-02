import React from 'react';
import { Home, Wrench, Gift, User } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const BottomNav = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navItems = [
        { id: 'home', icon: Home, label: 'Trang chủ', path: '/' },
        { id: 'utilities', icon: Wrench, label: 'Danh mục', path: '/utilities' },
        { id: 'rewards', icon: Gift, label: 'Giỏ hàng', path: '/rewards' }, // Renamed for demo
        { id: 'profile', icon: User, label: 'Cá nhân', path: '/profile' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'white',
            borderTop: '1px solid #eee',
            padding: '8px 16px',
            paddingBottom: '24px', // Safe area for iPhone
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            zIndex: 100,
            boxShadow: '0 -4px 10px rgba(0,0,0,0.05)'
        }}>
            {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                    <button
                        key={item.id}
                        onClick={() => navigate(item.path)}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '4px',
                            color: isActive ? 'var(--color-primary)' : '#999',
                            background: 'none',
                            border: 'none',
                            cursor: 'pointer',
                            minWidth: '60px'
                        }}
                    >
                        <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                        <span style={{
                            fontSize: '10px',
                            fontWeight: isActive ? '600' : '400'
                        }}>
                            {item.label}
                        </span>
                    </button>
                );
            })}
        </nav>
    );
};

export default BottomNav;
