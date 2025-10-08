import React from 'react';

const AppInfo = () => {
    return (
        <div className='flex flex-col items-center gap-8 lg:items-start lg:flex-row py-20'>
            <div>
                <img src="/src/assets/demo-app2.webp" alt=""  className='w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]'/>
            </div>
            <div className='flex-1 flex flex-col justify-center text-center lg:text-left items-center lg:items-start'>
                <div>
                    <h1 className='font-bold text-3xl text-[#001931] mb-2'>SmPlan:ToDo List with Reminder</h1>
                    <p className='text-[#627382]'>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-extrabold'>productive.io</span></p>
                </div>
                <div className='w-[90%] h-[1px] bg-gray-400 my-3'></div>

                <div className='lg:flex hidden my-8 gap-20'>
                    <div className='flex flex-col gap-2  items-center lg:items-start'>
                        <img src="/src/assets/icon-downloads.png" className='h-10 w-10' alt="" />
                        <p className='text-[#001931]'>Downloads</p>
                        <h2 className='font-bold text-4xl text-[#001931]'>8M</h2>
                    </div>
                    <div className='flex flex-col gap-2  items-center lg:items-start'>
                        <img src="/src/assets/icon-ratings.png" className='h-10 w-10' alt="" />
                        <p className='text-[#001931]'>Average Ratings</p>
                        <h2 className='font-bold text-4xl text-[#001931]'>4.9</h2>
                    </div>
                    <div className='flex flex-col gap-2 items-center lg:items-start'>
                        <img src="/src/assets/icon-review.png" className='h-10 w-10' alt="" />
                        <p className='text-[#001931]'>Total Reviews</p>
                        <h2 className='font-bold text-4xl text-[#001931]'>54K</h2>
                    </div>
                </div>


                <div className='flex lg:hidden my-8 items-center justify-between w-full'>
                    <div className='flex flex-col gap-2 items-center'>
                        <img src="/src/assets/icon-downloads.png" className='h-5 w-5' alt="" />
                        <p className='text-[#001931] text-[12px]'>Downloads</p>
                        <h2 className='font-bold text-3xl text-[#001931]'>8M</h2>
                    </div>
                    <div className='flex flex-col gap-2  items-center'>
                        <img src="/src/assets/icon-ratings.png" className='h-5 w-5' alt="" />
                        <p className='text-[#001931] text-[12px]'>Average Ratings</p>
                        <h2 className='font-bold text-3xl text-[#001931]'>4.9</h2>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <img src="/src/assets/icon-review.png" className='h-5 w-5' alt="" />
                        <p className='text-[#001931] text-[12px]'>Total Reviews</p>
                        <h2 className='font-bold text-3xl text-[#001931]'>54K</h2>
                    </div>
                </div>


                <button className='btn bg-[#00D390] text-white py-6 px-7'>Install Now (<span>291 MB</span>)</button>
            </div>
        </div>
    );
};

export default AppInfo;