import React from 'react';
import { QrCode, ChevronRight } from 'lucide-react';

const HeroCard = ({ rank = "ELITE", points = 1250, nextRankPoints = 2000 }) => {
    const progress = (points / nextRankPoints) * 100;

    return (
        <div style={{
            background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)',
            borderRadius: '16px',
            padding: '20px',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
            {/* Background decoration */}
            <div style={{
                position: 'absolute',
                top: '-50%',
                right: '-20%',
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle, rgba(227, 31, 38, 0.2) 0%, transparent 70%)',
                borderRadius: '50%',
                pointerEvents: 'none',
            }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div>
                    <span style={{
                        fontSize: '12px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        color: 'var(--color-text-secondary)'
                    }}>
                        Member Rank
                    </span>
                    <h2 style={{
                        fontSize: '32px',
                        fontWeight: '800',
                        background: 'linear-gradient(to right, #fff, #999)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        margin: '4px 0',
                        fontFamily: 'var(--font-mono)'
                    }}>
                        {rank}
                    </h2>
                </div>
                <div style={{
                    background: 'white',
                    padding: '8px',
                    borderRadius: '8px',
                    cursor: 'pointer'
                }}>
                    <QrCode size={32} color="black" />
                </div>
            </div>

            <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span style={{ color: 'var(--color-text)' }}>{points} PTS</span>
                <span style={{ color: 'var(--color-text-secondary)' }}>Next: {nextRankPoints} PTS</span>
            </div>

            <div style={{
                width: '100%',
                height: '6px',
                background: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '4px',
                overflow: 'hidden'
            }}>
                <div style={{
                    width: `${progress}%`,
                    height: '100%',
                    background: 'var(--gradient-primary)',
                    borderRadius: '4px',
                    boxShadow: '0 0 10px var(--color-primary)'
                }} />
            </div>

            <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: 'var(--color-text-secondary)' }}>
                <span>Cập nhật lần cuối: 10:30 AM</span>
            </div>
        </div>
    );
};

export default HeroCard;
