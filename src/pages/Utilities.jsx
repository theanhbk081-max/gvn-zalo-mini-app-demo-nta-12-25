import React from 'react';
import BookingForm from '../components/BookingForm';
import WarrantyVault from '../components/WarrantyVault';
import RMATracking from '../components/RMATracking';

const Utilities = () => {
    return (
        <div style={{ padding: '16px', paddingBottom: '100px' }}>
            <WarrantyVault />

            <div style={{ marginTop: '32px' }}>
                <RMATracking />
            </div>

            <div style={{ marginTop: '32px' }}>
                <BookingForm />
            </div>
        </div>
    );
};

export default Utilities;
