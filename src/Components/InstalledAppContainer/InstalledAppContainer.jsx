import React from 'react';
import InstalledAppCard from '../InstalledAppCard/InstalledAppCard';

const InstalledAppContainer = ({installed, handleUninstall}) => {
    return (
        <div className='flex flex-col gap-5 w-[85%] lg:w-[90%] mx-auto'>
            {installed.map(installedApp => <InstalledAppCard key={installed.id} installedApp={installedApp} handleUninstall={handleUninstall}></InstalledAppCard>)}
        </div>
    );
};

export default InstalledAppContainer;