import { Bell, X, MoreHorizontal } from 'lucide-react';

const Header = ({ userName = "Nguyễn Thế Anh - Gearvn", phone = "0909517975" }) => {
    return (
        <header style={{
            background: 'var(--color-primary)',
            padding: '16px',
            paddingTop: '44px', // Status bar spacing simulation
            color: 'white',
            borderBottomLeftRadius: '24px',
            borderBottomRightRadius: '24px',
            position: 'relative',
            zIndex: 10,
            paddingBottom: '80px' // Space for HeroCard overlap
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        background: 'white',
                        border: '2px solid white',
                        overflow: 'hidden'
                    }}>
                        <img
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
                            alt="Avatar"
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    </div>
                    <div>
                        <div style={{ fontSize: '14px', opacity: 0.9 }}>Xin chào,</div>
                        <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{userName}</div>
                        <div style={{ fontSize: '14px', opacity: 0.8 }}>{phone}</div>
                    </div>
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                    <button style={{
                        padding: '8px',
                        background: 'rgba(0,0,0,0.1)',
                        borderRadius: '50%',
                        color: 'white'
                    }}>
                        <MoreHorizontal size={20} />
                    </button>
                    <button style={{
                        padding: '8px',
                        background: 'rgba(0,0,0,0.1)',
                        borderRadius: '50%',
                        color: 'white'
                    }}>
                        <X size={20} />
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
