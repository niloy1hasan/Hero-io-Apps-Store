import React from 'react';
import AppCard from '../AppCard/AppCard';

const TopAppsContainer = ({appData}) => {
    return (
        <div className='grid grid-cols-1 gap-4 w-[85%] pb-20 lg:w-[90%] mx-auto md:grid-cols-2 lg:grid-cols-4'>
            {appData.map(data => <AppCard key={data.id} data={data}></AppCard>)}
        </div>
    );
};

export default TopAppsContainer;