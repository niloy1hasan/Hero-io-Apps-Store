import React from 'react';
import AppsContainer from '../AppsContainer/AppsContainer';
import { NavLink } from 'react-router';
import AllApps from '../AllApps/AllApps';

const TopApps = () => {
    return (
        <section className='pt-20 pb-10'>
            <div className='flex flex-col w-11/12 mx-auto items-center text-center'>
                <h1 className='text-5xl font-bold text-[#001931]'>Trending Apps</h1>
                <p className='text-[#627382] py-4'>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <AppsContainer></AppsContainer>
            
            <div className='text-center'>
                <NavLink to="all-apps" className='btn bg-gradient-to-r px-6 from-[#632EE3] to-[#9F62F2] text-white my-5 lg:my-10'>Show All</NavLink>
            </div>
        </section>
    );
};

export default TopApps;