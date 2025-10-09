import React from 'react';
import Description from '../Description/Description';
import Ratings from '../Ratings/Ratings';
import AppInfo from '../AppInfo/AppInfo';
import { useLoaderData } from 'react-router';

const AppDetails = () => {

    const appData = useLoaderData();
    const {ratings, id, image, title, companyName, ratingAvg, downloads, reviews, size, description} = appData;
    const appInfo = {id, image, title, companyName, ratingAvg, downloads, reviews, size};

    return (
        <section className='w-[90%] lg:w-[90%] mx-auto'>
        <AppInfo appInfo={appInfo}></AppInfo>
        <Ratings ratings={ratings}></Ratings>
        <Description description={description}></Description>
        </section>
    );
};

export default AppDetails;