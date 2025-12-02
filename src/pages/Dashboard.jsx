import React from 'react';
import Header from '../components/Header';
import HeroCard from '../components/HeroCard';
import MyRig from '../components/MyRig';
import ServiceStatus from '../components/ServiceStatus';

const Dashboard = () => {
    return (
        <div className="animate-slide-up">
            <Header userName="NTA Gamer" />

            <main style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <HeroCard />

                <MyRig />

                <ServiceStatus />
            </main>
        </div>
    );
};

export default Dashboard;
