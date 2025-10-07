import React from 'react';

const States = () => {
    return (
        <section className='flex flex-col text-white justify-center items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] py-20'>
            <h1 className='w-10/12 mx-auto text-center font-bold text-5xl'>Trusted by Millions,<br className='lg:hidden'/> Built for You</h1>

            <div className='flex flex-col lg:flex-row gap-14 md:gap-20 lg:gap-32 mt-10'>
                <div className='flex flex-col gap-3 items-center text-center'>
                    <p className='text-[16px] font-light'>Total Downloads</p>
                    <h1 className='font-extrabold text-6xl'>29.6M</h1>
                    <p className='text-[16px] font-light'>21% more than last month</p>
                </div>
                <div className='flex flex-col gap-3 items-center text-center'>
                    <p className='text-[16px] font-light'>Total Reviews</p>
                    <h1 className='font-extrabold text-6xl'>906K</h1>
                    <p className='text-[16px] font-light'>46% more than last month</p>
                </div>
                <div className='flex flex-col gap-3 items-center text-center'>
                    <p className='text-[16px] font-light'>Active Apps</p>
                    <h1 className='font-extrabold text-6xl'>132+</h1>
                    <p className='text-[16px] font-light'>31 more will Launch</p>
                </div>
            </div>
        </section>
    );
};

export default States;