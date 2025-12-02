import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Wrench, Gift, User } from 'lucide-react';

const BottomNav = () => {
    const navItems = [
        { path: '/', icon: Home, label: 'Home' },
        { path: '/utilities', icon: Wrench, label: 'Dịch vụ' },
        { path: '/rewards', icon: Gift, label: 'Loot đồ' },
        { path: '/profile', icon: User, label: 'Tài khoản' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '70px',
            backgroundColor: 'var(--color-surface)',
            borderTop: '1px solid var(--color-border)',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            zIndex: 1000,
            paddingBottom: 'env(safe-area-inset-bottom)', // Handle iPhone X notch
        }}>
            {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    style={({ isActive }) => ({
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textDecoration: 'none',
                        color: isActive ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                        fontSize: '10px',
                        fontWeight: isActive ? '600' : '400',
                        transition: 'color 0.2s ease',
                        width: '100%',
                        height: '100%',
                    })}
                >
                    {({ isActive }) => (
                        <>
                            <item.icon
                                size={24}
                                strokeWidth={isActive ? 2.5 : 2}
                                style={{ marginBottom: '4px' }}
                            />
                            <span>{item.label}</span>
                        </>
                    )}
                </NavLink>
            ))}
        </nav>
    );
};

export default BottomNav;
