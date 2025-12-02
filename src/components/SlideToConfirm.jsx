import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, Check } from 'lucide-react';

const SlideToConfirm = ({ onConfirm }) => {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);
    const sliderRef = useRef(null);
    const containerRef = useRef(null);

    const handleMouseMove = (e) => {
        if (isConfirmed) return;
        if (e.buttons !== 1) return; // Only if mouse button is down

        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const x = Math.max(0, Math.min(e.clientX - rect.left - 25, rect.width - 50));
        const percentage = (x / (rect.width - 50)) * 100;

        setSliderValue(percentage);

        if (percentage >= 95) {
            setIsConfirmed(true);
            setSliderValue(100);
            if (onConfirm) onConfirm();
        }
    };

    const handleTouchMove = (e) => {
        if (isConfirmed) return;

        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const touch = e.touches[0];
        const x = Math.max(0, Math.min(touch.clientX - rect.left - 25, rect.width - 50));
        const percentage = (x / (rect.width - 50)) * 100;

        setSliderValue(percentage);

        if (percentage >= 95) {
            setIsConfirmed(true);
            setSliderValue(100);
            if (onConfirm) onConfirm();
        }
    };

    const handleEnd = () => {
        if (!isConfirmed) {
            setSliderValue(0);
        }
    };

    return (
        <div
            ref={containerRef}
            style={{
                position: 'relative',
                width: '100%',
                height: '50px',
                background: isConfirmed ? 'var(--color-success)' : 'var(--color-surface)',
                borderRadius: '25px',
                border: '1px solid var(--color-border)',
                overflow: 'hidden',
                userSelect: 'none',
                touchAction: 'none',
                transition: 'background 0.3s',
            }}
            onMouseMove={handleMouseMove}
            onMouseUp={handleEnd}
            onMouseLeave={handleEnd}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleEnd}
        >
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: isConfirmed ? 'white' : 'var(--color-text-secondary)',
                fontSize: '14px',
                fontWeight: 'bold',
                pointerEvents: 'none',
            }}>
                {isConfirmed ? 'Đã xác nhận' : 'Trượt để dùng ngay'}
            </div>

            <div
                ref={sliderRef}
                style={{
                    position: 'absolute',
                    top: '2px',
                    left: `calc(${sliderValue}% + 2px)`,
                    width: '46px',
                    height: '46px',
                    background: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isConfirmed ? 'var(--color-success)' : 'var(--color-primary)',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    cursor: 'grab',
                    transform: isConfirmed ? 'translateX(-100%)' : 'none', // Adjust position when confirmed if needed, but percentage handles it
                    marginLeft: isConfirmed ? '-4px' : '0', // Minor adjustment
                }}
            >
                {isConfirmed ? <Check size={24} /> : <ChevronRight size={24} />}
            </div>
        </div>
    );
};

export default SlideToConfirm;
