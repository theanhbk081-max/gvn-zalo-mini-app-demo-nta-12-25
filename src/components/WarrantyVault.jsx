import React from 'react';
import { ShieldCheck, AlertCircle, Clock } from 'lucide-react';

const WarrantyVault = () => {
    const items = [
        { id: 1, name: 'VGA ASUS ROG Strix RTX 4090', purchaseDate: '2023-11-15', warrantyMonths: 36, remainingMonths: 24 },
        { id: 2, name: 'CPU Intel Core i9-14900K', purchaseDate: '2023-11-15', warrantyMonths: 36, remainingMonths: 24 },
        { id: 3, name: 'RAM G.Skill Trident Z5 RGB 64GB', purchaseDate: '2023-11-15', warrantyMonths: 36, remainingMonths: 2 },
        { id: 4, name: 'SSD Samsung 990 Pro 2TB', purchaseDate: '2021-12-01', warrantyMonths: 24, remainingMonths: 0 },
    ];

    const getStatusColor = (remaining) => {
        if (remaining <= 0) return 'var(--color-text-secondary)';
        if (remaining < 3) return 'var(--color-warning)';
        return 'var(--color-success)';
    };

    const getStatusText = (remaining) => {
        if (remaining <= 0) return 'Hết hạn';
        if (remaining < 3) return 'Sắp hết hạn';
        return 'Còn bảo hành';
    };

    return (
        <div className="animate-slide-up">
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck color="var(--color-primary)" /> Két sắt bảo hành
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {items.map((item) => {
                    const progress = Math.max(0, Math.min(100, (item.remainingMonths / item.warrantyMonths) * 100));
                    const color = getStatusColor(item.remainingMonths);

                    return (
                        <div key={item.id} style={{
                            background: 'var(--color-surface)',
                            borderRadius: '12px',
                            padding: '16px',
                            border: '1px solid var(--color-border)',
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                <h3 style={{ fontSize: '14px', fontWeight: '600', color: 'var(--color-text)' }}>{item.name}</h3>
                                <span style={{ fontSize: '12px', color: color, fontWeight: 'bold' }}>
                                    {getStatusText(item.remainingMonths)}
                                </span>
                            </div>

                            <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)', marginBottom: '12px' }}>
                                Mua ngày: {item.purchaseDate} • Thời hạn: {item.warrantyMonths} tháng
                            </div>

                            <div style={{
                                width: '100%',
                                height: '6px',
                                background: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                marginBottom: '8px'
                            }}>
                                <div style={{
                                    width: `${progress}%`,
                                    height: '100%',
                                    background: color,
                                    borderRadius: '4px',
                                    transition: 'width 1s ease-out'
                                }} />
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'var(--color-text-secondary)' }}>
                                <span>Còn lại: {item.remainingMonths > 0 ? `${item.remainingMonths} tháng` : '0 tháng'}</span>
                                {item.remainingMonths < 3 && item.remainingMonths > 0 && (
                                    <button style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Gia hạn ngay</button>
                                )}
                                {item.remainingMonths <= 0 && (
                                    <button style={{ color: 'var(--color-text-secondary)' }}>Đã hết hạn</button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WarrantyVault;
