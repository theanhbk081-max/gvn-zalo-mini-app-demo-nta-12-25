import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    // Default to 'B2C' for normal users
    const [userSegment, setUserSegment] = useState('B2C');
    const [userInfo, setUserInfo] = useState({
        name: 'Nguyễn Thế Anh - Gearvn',
        phone: '0909517975',
        rank: 'Member',
        points: 0
    });

    const toggleSegment = () => {
        setUserSegment(prev => {
            if (prev === 'B2C') return 'Elite';
            if (prev === 'Elite') return 'B2B';
            return 'B2C';
        });
    };

    return (
        <UserContext.Provider value={{ userSegment, setUserSegment, userInfo, toggleSegment }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
