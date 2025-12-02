import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from './BottomNav';

const Layout = () => {
    return (
        <div style={{ minHeight: '100vh', paddingBottom: '80px' }}>
            <Outlet />
            <BottomNav />
        </div>
    );
};

export default Layout;
