import React, { useState } from 'react';
import Header from '../components/Header';
import { ChevronRight, Edit, FileText, Clock, MapPin, QrCode } from 'lucide-react';

const Profile = () => {
    const [znsEnabled, setZnsEnabled] = useState(true);

    const menuItems = [
        { icon: Edit, label: 'Chỉnh sửa thông tin' },
        { icon: FileText, label: 'Đơn hàng', subLabel: 'Xem tất cả' },
        { icon: Clock, label: 'Lịch sử tích điểm' },
        { icon: MapPin, label: 'Sổ địa chỉ' },
    ];

    return (
        <div className="animate-fade-in" style={{ paddingBottom: '100px', background: '#F5F5F5', minHeight: '100vh' }}>
            <Header />

            {/* Member Card Overlay */}
            <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '16px',
                marginTop: '-60px',
                marginLeft: '16px',
                marginRight: '16px',
                position: 'relative',
                zIndex: 20,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '16px', fontWeight: 'bold', color: '#00C853' }}>Member</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#E0F7FA', padding: '4px 12px', borderRadius: '16px', color: '#006064', fontWeight: 'bold', fontSize: '14px' }}>
                    <div style={{ background: '#4DD0E1', borderRadius: '50%', padding: '2px' }}>
                        <QrCode size={12} color="white" />
                    </div>
                    0
                    <ChevronRight size={14} />
                </div>
            </div>

            {/* Menu List */}
            <div style={{ marginTop: '16px', background: 'white' }}>
                {menuItems.map((item, index) => (
                    <div key={index} style={{
                        display: 'flex',
                        alignItems: 'center',
                        padding: '16px',
                        borderBottom: '1px solid #eee',
                        cursor: 'pointer'
                    }}>
                        <item.icon size={20} color="#E31F26" style={{ marginRight: '16px' }} />
                        <span style={{ flex: 1, fontSize: '15px' }}>{item.label}</span>
                        {item.subLabel && <span style={{ fontSize: '13px', color: '#999', marginRight: '8px' }}>{item.subLabel}</span>}
                        <ChevronRight size={16} color="#ccc" />
                    </div>
                ))}
            </div>

            {/* QR Code Section */}
            <div style={{ marginTop: '32px', padding: '0 16px', textAlign: 'center' }}>
                <p style={{ fontSize: '13px', color: '#666', marginBottom: '16px' }}>Chia sẻ mã QR này để kết bạn nhanh chóng, bảo mật</p>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ marginBottom: '8px' }}>
                        {/* Placeholder for GearVN Logo */}
                        <div style={{ width: '40px', height: '40px', background: '#E31F26', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>G</div>
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '16px' }}>GEARVN Official</h3>
                    <div style={{ background: 'white', padding: '16px', borderRadius: '16px' }}>
                        <QrCode size={120} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
