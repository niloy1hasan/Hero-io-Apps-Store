import React from 'react';
import Description from '../Description/Description';
import Ratings from '../Ratings/Ratings';
import AppInfo from '../AppInfo/AppInfo';

const AppDetails = () => {
    return (
        <section className='w-[85%] lg:w-[90%] mx-auto'>
        <AppInfo></AppInfo>
        <Ratings></Ratings>
        <Description></Description>
        </section>
    );
};

export default AppDetails;