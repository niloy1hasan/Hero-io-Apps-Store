import React from 'react';

const Banner = () => {
    return (
        <section className='banner-section pt-20'>
            <h1 className='text-center font-bold text-[#001931] text-6xl mx-5'>We Build<br/><span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-extrabold'>Productive</span> Apps</h1>
            <p className='text-center text-[#627382] w-9/12 mx-auto py-6 text-[16px]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='flex flex-col md:flex-row gap-4 font-semibold justify-center items-center'>
                <a className='btn p-3' href='https://play.google.com/'>
                    <img src="/src/assets/playstore.png" className='w-7 h-7 mr-1' alt="" />
                    <span>Google Play</span>
                </a>
                <a className='btn p-3' href='https://www.apple.com/app-store/'>
                    <img src="/src/assets/app-store.png" className='w-7 h-7 mr-1' alt="" />
                    <span>App Store</span>
                </a>
            </div>
            <div className='mt-6'>
                <img src="/src/assets/hero.png" className='mx-auto w-72 md:w-160 lg:w-200' alt="" />
            </div>
        </section>
    );
};

export default Banner;