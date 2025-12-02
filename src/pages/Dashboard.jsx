import React from 'react';
import Header from '../components/Header';
import HeroCard from '../components/HeroCard';
import { ShoppingBag, Crown, History, Plus } from 'lucide-react';
import { PRODUCTS } from '../data/mockData';

const Dashboard = () => {
    return (
        <div className="animate-fade-in" style={{ paddingBottom: '80px', background: '#F5F5F5', minHeight: '100vh' }}>
            <Header />
            <HeroCard />

            {/* Quick Actions Grid */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr',
                gap: '16px',
                padding: '24px 16px',
                marginTop: '8px'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <ShoppingBag size={32} color="#E31F26" />
                    <span style={{ fontSize: '13px', textAlign: 'center' }}>Mua hàng</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <Crown size={32} color="#E31F26" />
                    <span style={{ fontSize: '13px', textAlign: 'center' }}>Quyền lợi thành viên</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                    <History size={32} color="#E31F26" />
                    <span style={{ fontSize: '13px', textAlign: 'center' }}>Lịch sử mua hàng</span>
                </div>
            </div>

            {/* Product Section */}
            <div style={{ padding: '0 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Sản phẩm nổi bật</h3>
                    <span style={{ fontSize: '14px', color: '#E31F26', fontWeight: '500' }}>Tất cả</span>
                </div>

                <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '16px' }}>
                    {PRODUCTS.map(product => (
                        <div key={product.id} style={{
                            minWidth: '160px',
                            background: 'white',
                            borderRadius: '12px',
                            padding: '12px',
                            border: '1px solid #eee',
                            position: 'relative'
                        }}>
                            {product.tag && (
                                <span style={{
                                    position: 'absolute',
                                    top: '8px',
                                    left: '8px',
                                    background: '#E31F26',
                                    color: 'white',
                                    fontSize: '10px',
                                    padding: '2px 6px',
                                    borderRadius: '4px',
                                    fontWeight: 'bold'
                                }}>
                                    {product.tag}
                                </span>
                            )}
                            <img src={product.image} alt={product.name} style={{ width: '100%', height: '100px', objectFit: 'contain', marginBottom: '8px' }} />
                            <h4 style={{ fontSize: '14px', fontWeight: '500', marginBottom: '4px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden', height: '40px' }}>{product.name}</h4>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
                                <div>
                                    <div style={{ fontSize: '14px', fontWeight: 'bold', color: '#E31F26' }}>{product.price}</div>
                                    {product.originalPrice && <div style={{ fontSize: '10px', textDecoration: 'line-through', color: '#999' }}>{product.originalPrice}</div>}
                                </div>
                                <button style={{ background: '#E31F26', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', border: 'none' }}>
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* News Section */}
            <div style={{ padding: '0 16px', marginTop: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '18px', fontWeight: 'bold' }}>Tin tức</h3>
                    <span style={{ fontSize: '14px', color: '#E31F26', fontWeight: '500' }}>Xem thêm</span>
                </div>
                <div style={{ display: 'flex', gap: '16px', overflowX: 'auto' }}>
                    <img src="https://file.hstatic.net/200000722513/file/banner_slide_1_8f9c8f9c8f9c8f9c.jpg" style={{ width: '280px', borderRadius: '8px' }} />
                    <img src="https://file.hstatic.net/200000722513/file/banner_slide_2_8f9c8f9c8f9c8f9c.jpg" style={{ width: '280px', borderRadius: '8px' }} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
