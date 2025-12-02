import React from 'react';
import { ClipboardList, CheckCircle, Circle, Truck, PenTool } from 'lucide-react';

const RMATracking = () => {
    const steps = [
        { id: 1, title: 'Đã nhận máy', date: '2023-12-01 09:00', status: 'completed', icon: ClipboardList },
        { id: 2, title: 'Đang kiểm tra', date: '2023-12-01 14:30', status: 'completed', icon: PenTool },
        { id: 3, title: 'Đang xử lý / Gửi hãng', date: '2023-12-02 10:00', status: 'active', icon: Truck },
        { id: 4, title: 'Hoàn tất', date: '--', status: 'pending', icon: CheckCircle },
    ];

    return (
        <div className="animate-slide-up">
            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Truck color="var(--color-primary)" /> Theo dõi sửa chữa
            </h2>

            <div style={{
                background: 'var(--color-surface)',
                borderRadius: '16px',
                padding: '20px',
                border: '1px solid var(--color-border)',
            }}>
                <div style={{ marginBottom: '16px', paddingBottom: '16px', borderBottom: '1px solid var(--color-border)' }}>
                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: 'var(--color-primary)' }}>Mã phiếu: RMA-2023-001</div>
                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>Thiết bị: VGA ASUS ROG Strix RTX 4090</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                    {/* Vertical Line */}
                    <div style={{
                        position: 'absolute',
                        left: '19px',
                        top: '10px',
                        bottom: '30px',
                        width: '2px',
                        background: 'var(--color-border)',
                        zIndex: 0,
                    }} />

                    {steps.map((step, index) => {
                        const isCompleted = step.status === 'completed';
                        const isActive = step.status === 'active';

                        return (
                            <div key={step.id} style={{
                                display: 'flex',
                                gap: '16px',
                                marginBottom: index === steps.length - 1 ? 0 : '24px',
                                position: 'relative',
                                zIndex: 1,
                            }}>
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '50%',
                                    background: isCompleted || isActive ? 'var(--color-primary)' : 'var(--color-surface)',
                                    border: `2px solid ${isCompleted || isActive ? 'var(--color-primary)' : 'var(--color-border)'}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: isCompleted || isActive ? 'white' : 'var(--color-text-secondary)',
                                    boxShadow: isActive ? '0 0 10px var(--color-primary)' : 'none',
                                }}>
                                    <step.icon size={20} />
                                </div>

                                <div style={{ flex: 1, paddingTop: '2px' }}>
                                    <h4 style={{
                                        fontSize: '14px',
                                        fontWeight: 'bold',
                                        color: isCompleted || isActive ? 'var(--color-text)' : 'var(--color-text-secondary)'
                                    }}>
                                        {step.title}
                                    </h4>
                                    <div style={{ fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                                        {step.date}
                                    </div>
                                    {isActive && (
                                        <div style={{
                                            marginTop: '8px',
                                            fontSize: '12px',
                                            color: 'var(--color-primary)',
                                            background: 'rgba(227, 31, 38, 0.1)',
                                            padding: '4px 8px',
                                            borderRadius: '4px',
                                            display: 'inline-block'
                                        }}>
                                            Đang thực hiện
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default RMATracking;
