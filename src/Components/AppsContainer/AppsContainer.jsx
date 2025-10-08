import React from 'react';
import AppCard from '../AppCard/AppCard';

const TopAppsContainer = () => {
    return (
        <div className='grid grid-cols-1 gap-4 w-[85%] lg:w-[90%] mx-auto md:grid-cols-2 lg:grid-cols-4'>
            <AppCard></AppCard>
            <AppCard></AppCard>
            <AppCard></AppCard>
            <AppCard></AppCard>
            <AppCard></AppCard>
            <AppCard></AppCard>
            <AppCard></AppCard>
            <AppCard></AppCard>
        </div>
    );
};

export default TopAppsContainer;