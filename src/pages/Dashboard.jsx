import React from 'react';
import Header from '../components/Header';
import HeroCard from '../components/HeroCard';
import { ShoppingBag, History, Ticket, Newspaper, ChevronRight, Zap } from 'lucide-react';
import { PRODUCTS, NEWS } from '../data/mockData';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();

    const QuickAction = ({ icon: Icon, label, color, onClick }) => (
        <button
            onClick={onClick}
            className="active:scale-95 transition-transform"
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '8px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                width: '100%'
            }}
        >
            <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '16px',
                background: `${color}15`, // 15% opacity
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: color,
                boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
                <Icon size={24} strokeWidth={2} />
            </div>
            <span style={{ fontSize: '12px', fontWeight: '500', color: '#333' }}>{label}</span>
        </button>
    );

    return (
        <div className="animate-fade-in" style={{ paddingBottom: '80px', background: '#F5F5F5', minHeight: '100vh' }}>
            <Header />
            <div style={{ marginTop: '-40px', padding: '0 16px', position: 'relative', zIndex: 10 }}>
                <HeroCard />
            </div>

            {/* Quick Actions */}
            <div style={{
                marginTop: '24px',
                padding: '0 16px',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '16px'
            }}>
                <QuickAction
                    icon={ShoppingBag}
                    label="Mua hàng"
                    color="#E31F26"
                    onClick={() => window.location.href = 'https://gearvn.com'}
                />
                <QuickAction
                    icon={Ticket}
                    label="Ưu đãi"
                    color="#FF9800"
                    onClick={() => navigate('/rewards')}
                />
                <QuickAction
                    icon={History}
                    label="Lịch sử"
                    color="#2196F3"
                    onClick={() => navigate('/utilities')}
                />
            </div>

            {/* Featured Products */}
            <div style={{ marginTop: '32px', paddingLeft: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingRight: '16px', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Sản phẩm nổi bật</h3>
                    <span style={{ fontSize: '13px', color: '#E31F26', fontWeight: '500', display: 'flex', alignItems: 'center' }}>
                        Tất cả <ChevronRight size={14} />
                    </span>
                </div>

                <div style={{
                    display: 'flex',
                    gap: '16px',
                    overflowX: 'auto',
                    paddingBottom: '16px',
                    paddingRight: '16px',
                    scrollbarWidth: 'none'
                }}>
                    {PRODUCTS.map(product => (
                        <div key={product.id} className="active:scale-95 transition-transform" style={{
                            minWidth: '160px',
                            background: 'white',
                            borderRadius: '12px',
                            padding: '12px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            position: 'relative'
                        }}>
                            <div style={{
                                position: 'absolute',
                                top: '8px',
                                left: '8px',
                                background: '#E31F26',
                                color: 'white',
                                fontSize: '10px',
                                fontWeight: 'bold',
                                padding: '2px 6px',
                                borderRadius: '4px',
                                zIndex: 1
                            }}>
                                {product.tag}
                            </div>
                            <img
                                src={product.image}
                                alt={product.name}
                                style={{ width: '100%', height: '120px', objectFit: 'contain', marginBottom: '12px' }}
                            />
                            <h4 style={{
                                fontSize: '13px',
                                fontWeight: '500',
                                marginBottom: '4px',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                height: '36px'
                            }}>
                                {product.name}
                            </h4>
                            <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#E31F26' }}>{product.price}</div>
                            <div style={{ fontSize: '11px', textDecoration: 'line-through', color: '#999' }}>{product.originalPrice}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* News Section */}
            <div style={{ marginTop: '16px', padding: '0 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>Tin tức mới nhất</h3>
                    <span style={{ fontSize: '13px', color: '#E31F26', fontWeight: '500' }}>Xem thêm</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {NEWS.map(news => (
                        <div key={news.id} className="active:scale-95 transition-transform" style={{
                            display: 'flex',
                            gap: '12px',
                            background: 'white',
                            padding: '12px',
                            borderRadius: '12px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                        }}>
                            <img
                                src={news.image}
                                alt={news.title}
                                style={{ width: '80px', height: '80px', borderRadius: '8px', objectFit: 'cover' }}
                            />
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h4 style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px', lineHeight: '1.4' }}>{news.title}</h4>
                                <span style={{ fontSize: '12px', color: '#666' }}>2 giờ trước</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
