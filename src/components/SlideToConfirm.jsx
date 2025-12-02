import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, Check } from 'lucide-react';

const SlideToConfirm = ({ onConfirm }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [position, setPosition] = useState(0);
    const [confirmed, setConfirmed] = useState(false);
    const containerRef = useRef(null);
    const sliderWidth = 50;

    const handleStart = (clientX) => {
        if (confirmed) return;
        setIsDragging(true);
    };

    const handleMove = (clientX) => {
        if (!isDragging || confirmed || !containerRef.current) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const maxPos = containerRect.width - sliderWidth;
        const newPos = Math.max(0, Math.min(clientX - containerRect.left - sliderWidth / 2, maxPos));
        setPosition(newPos);
    };

    const handleEnd = () => {
        if (!isDragging || confirmed || !containerRef.current) return;
        setIsDragging(false);
        const containerRect = containerRef.current.getBoundingClientRect();
        const maxPos = containerRect.width - sliderWidth;

        if (position > maxPos * 0.9) {
            setPosition(maxPos);
            setConfirmed(true);
            setTimeout(() => {
                onConfirm();
                setConfirmed(false);
                setPosition(0);
            }, 500);
        } else {
            setPosition(0);
        }
    };

    // Mouse events
    const onMouseDown = (e) => handleStart(e.clientX);
    const onMouseMove = (e) => handleMove(e.clientX);
    const onMouseUp = () => handleEnd();

    // Touch events
    const onTouchStart = (e) => handleStart(e.touches[0].clientX);
    const onTouchMove = (e) => handleMove(e.touches[0].clientX);
    const onTouchEnd = () => handleEnd();

    useEffect(() => {
        if (isDragging) {
            window.addEventListener('mousemove', onMouseMove);
            window.addEventListener('mouseup', onMouseUp);
            window.addEventListener('touchmove', onTouchMove);
            window.addEventListener('touchend', onTouchEnd);
        } else {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
        }
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseup', onMouseUp);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, [isDragging]);

    return (
        <div
            ref={containerRef}
            style={{
                width: '100%',
                height: '50px',
                background: '#eee',
                borderRadius: '25px',
                position: 'relative',
                overflow: 'hidden',
                userSelect: 'none'
            }}
        >
            <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 'bold',
                color: '#999',
                zIndex: 1
            }}>
                {confirmed ? 'Đã xác nhận!' : 'Trượt để đổi quà'}
            </div>

            <div
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: `${position + sliderWidth}px`,
                    background: confirmed ? '#4CAF50' : '#E31F26',
                    borderRadius: '25px',
                    transition: isDragging ? 'none' : 'width 0.3s ease, background 0.3s'
                }}
            />

            <div
                onMouseDown={onMouseDown}
                onTouchStart={onTouchStart}
                style={{
                    width: `${sliderWidth}px`,
                    height: `${sliderWidth}px`,
                    background: 'white',
                    borderRadius: '50%',
                    position: 'absolute',
                    left: `${position}px`,
                    top: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'grab',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    zIndex: 2,
                    transition: isDragging ? 'none' : 'left 0.3s ease'
                }}
            >
                {confirmed ? <Check size={24} color="#4CAF50" /> : <ChevronRight size={24} color="#E31F26" />}
            </div>
        </div>
    );
};

export default SlideToConfirm;
