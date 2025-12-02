import React from 'react';
import { Trophy, Gift, Phone } from 'lucide-react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const HeroCard = () => {
    const { userInfo: user } = useUser();
    const navigate = useNavigate();

    const ActionButton = ({ icon: Icon, label, onClick }) => (
        <button
            onClick={onClick}
            className="active:scale-95 transition-transform"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                flex: 1
            }}
        >
            <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#FFF5F5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E31F26',
                marginBottom: '4px'
            }}>
                <Icon size={20} />
            </div>
            <span style={{ fontSize: '12px', fontWeight: '500', color: '#333' }}>{label}</span>
        </button>
    );

    return (
        <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: '20px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <div>
                    <div style={{ fontSize: '14px', color: '#666', marginBottom: '4px' }}>Hạng thành viên</div>
                    <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#E31F26', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        {user.rank}
                        <span style={{
                            fontSize: '12px',
                            background: '#FFF5F5',
                            color: '#E31F26',
                            padding: '4px 8px',
                            borderRadius: '12px',
                            border: '1px solid #FFEBEE'
                        }}>
                            {user.points} điểm
                        </span>
                    </div>
                </div>
                <div
                    onClick={() => navigate('/profile')}
                    className="active:scale-95 transition-transform"
                    style={{
                        background: 'linear-gradient(135deg, #E31F26 0%, #FF5252 100%)',
                        color: 'white',
                        padding: '8px 16px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 4px 12px rgba(227, 31, 38, 0.3)'
                    }}
                >
                    Chi tiết {'>'}
                </div>
            </div>

            {/* Progress Bar */}
            <div style={{ marginBottom: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '8px', color: '#666' }}>
                    <span>0</span>
                    <span>5000 điểm để lên hạng Partner</span>
                </div>
                <div style={{ height: '6px', background: '#F5F5F5', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '45%', height: '100%', background: '#E31F26', borderRadius: '3px' }} />
                </div>
            </div>

            <div style={{ height: '1px', background: '#F5F5F5', marginBottom: '16px' }} />

            {/* Actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <ActionButton icon={Trophy} label="Tích điểm" onClick={() => navigate('/rewards')} />
                <ActionButton icon={Gift} label="Ưu đãi" onClick={() => navigate('/rewards')} />
                <ActionButton icon={Phone} label="Liên hệ" onClick={() => window.location.href = 'tel:18006975'} />
            </div>
        </div>
    );
};

export default HeroCard;
