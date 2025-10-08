import React from 'react';
import InstalledAppCard from '../InstalledAppCard/InstalledAppCard';

const InstalledAppContainer = () => {
    return (
        <div className='flex flex-col gap-5 w-[85%] lg:w-[90%] mx-auto'>
            <InstalledAppCard></InstalledAppCard>
            <InstalledAppCard></InstalledAppCard>
            <InstalledAppCard></InstalledAppCard>
        </div>
    );
};

export default InstalledAppContainer;