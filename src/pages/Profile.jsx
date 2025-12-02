import React, { useState } from 'react';
import { User, RefreshCw, Settings, Bell, ChevronRight, LogOut } from 'lucide-react';

const Profile = () => {
    const [znsEnabled, setZnsEnabled] = useState(true);

    const handleTradeIn = () => {
        alert('Mở Zalo Chat: "Tôi muốn định giá thu cũ đổi mới cho thiết bị..."');
    };

    return (
        <div className="animate-slide-up" style={{ padding: '16px', paddingBottom: '100px' }}>
            {/* User Info */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '32px',
                padding: '16px',
                background: 'var(--color-surface)',
                borderRadius: '16px',
                border: '1px solid var(--color-border)',
            }}>
                <div style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}>
                    <User size={32} color="var(--color-text-secondary)" />
                </div>
                <div>
                    <h2 style={{ fontSize: '20px', fontWeight: 'bold', color: 'var(--color-text)' }}>NTA Gamer</h2>
                    <div style={{ fontSize: '14px', color: 'var(--color-primary)' }}>Rank: ELITE</div>
                </div>
            </div>

            {/* Trade-in Section */}
            <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--color-text-secondary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Dịch vụ
                </h3>
                <div
                    onClick={handleTradeIn}
                    style={{
                        background: 'var(--color-surface)',
                        borderRadius: '12px',
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        border: '1px solid var(--color-border)',
                    }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                            width: '36px',
                            height: '36px',
                            background: 'rgba(0, 230, 118, 0.1)',
                            borderRadius: '8px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--color-success)',
                        }}>
                            <RefreshCw size={20} />
                        </div>
                        <div>
                            <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--color-text)' }}>Định giá thu cũ</div>
                            <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Nâng cấp máy mới giá tốt</div>
                        </div>
                    </div>
                    <ChevronRight size={16} color="var(--color-text-secondary)" />
                </div>
            </div>

            {/* Settings Section */}
            <div style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', color: 'var(--color-text-secondary)', marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Cài đặt
                </h3>
                <div style={{
                    background: 'var(--color-surface)',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid var(--color-border)',
                }}>
                    <div style={{
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderBottom: '1px solid var(--color-border)',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Bell size={20} color="var(--color-text)" />
                            <span style={{ fontSize: '14px', color: 'var(--color-text)' }}>Thông báo ZNS</span>
                        </div>
                        <div
                            onClick={() => setZnsEnabled(!znsEnabled)}
                            style={{
                                width: '44px',
                                height: '24px',
                                background: znsEnabled ? 'var(--color-primary)' : 'var(--color-border)',
                                borderRadius: '12px',
                                position: 'relative',
                                cursor: 'pointer',
                                transition: 'background 0.2s',
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '2px',
                                left: znsEnabled ? '22px' : '2px',
                                width: '20px',
                                height: '20px',
                                background: 'white',
                                borderRadius: '50%',
                                transition: 'left 0.2s',
                            }} />
                        </div>
                    </div>

                    <div style={{
                        padding: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Settings size={20} color="var(--color-text)" />
                            <span style={{ fontSize: '14px', color: 'var(--color-text)' }}>Cài đặt chung</span>
                        </div>
                        <ChevronRight size={16} color="var(--color-text-secondary)" />
                    </div>
                </div>
            </div>

            <button style={{
                width: '100%',
                padding: '16px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: 'var(--color-error)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                fontWeight: 'bold',
            }}>
                <LogOut size={20} /> Đăng xuất
            </button>
        </div>
    );
};

export default Profile;
