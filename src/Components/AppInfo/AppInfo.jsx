import React, { useEffect, useRef, useState } from 'react';
import { NumberFormat } from '../../utils/NumberFormat';
import { toast } from 'react-toastify';

const AppInfo = ({appInfo}) => {
    const installBtn = useRef(null);
    const [isInstallDisabled, setInstallDisabled] = useState(false);
    const {id, image, title, companyName, ratingAvg, downloads, reviews, size} = appInfo;

    const appStates = JSON.parse(localStorage.getItem('installedApps')) || [];

    useEffect(()=>{
        const installed = appStates.find(item => item.id === id);
        if(installed) setInstallDisabled(true);
    }, [id]);

    const installHandle = () => {
        setInstallDisabled(true);
        toast(`${title} app is installed`);
        const updatedApps = [...appStates, appInfo];
        localStorage.setItem('installedApps', JSON.stringify(updatedApps));
    }

    return (
        <div className='flex flex-col items-center gap-7 lg:items-start lg:flex-row py-20'>
            <div>
                <img src={image} alt=""  className='w-[250px] h-[250px] lg:w-[350px] lg:h-[350px]'/>
            </div>
            <div className='flex-1 flex flex-col justify-center text-center lg:text-left items-center lg:items-start'>
                <div>
                    <h1 className='font-bold text-3xl text-[#001931] mb-2'>{title}</h1>
                    <p className='text-[#627382]'>Developed by <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-extrabold'>{companyName}</span></p>
                </div>
                <div className='w-[90%] h-[1px] bg-gray-400 my-3'></div>

                <div className='lg:flex hidden my-8 gap-20'>
                    <div className='flex flex-col gap-2  items-center lg:items-start'>
                        <img src="/src/assets/icon-downloads.png" className='h-10 w-10' alt="" />
                        <p className='text-[#001931]'>Downloads</p>
                        <h2 className='font-bold text-4xl text-[#001931]'>{NumberFormat(downloads)}</h2>
                    </div>
                    <div className='flex flex-col gap-2  items-center lg:items-start'>
                        <img src="/src/assets/icon-ratings.png" className='h-10 w-10' alt="" />
                        <p className='text-[#001931]'>Average Ratings</p>
                        <h2 className='font-bold text-4xl text-[#001931]'>{ratingAvg}</h2>
                    </div>
                    <div className='flex flex-col gap-2 items-center lg:items-start'>
                        <img src="/src/assets/icon-review.png" className='h-10 w-10' alt="" />
                        <p className='text-[#001931]'>Total Reviews</p>
                        <h2 className='font-bold text-4xl text-[#001931]'>{NumberFormat(reviews)}</h2>
                    </div>
                </div>


                <div className='flex lg:hidden my-8 items-center justify-between gap-5 w-full'>
                    <div className='flex flex-col gap-2 items-center'>
                        <img src="/src/assets/icon-downloads.png" className='h-5 w-5' alt="" />
                        <p className='text-[#001931] text-[12px]'>Downloads</p>
                        <h2 className='font-bold text-3xl text-[#001931]'>{NumberFormat(downloads)}</h2>
                    </div>
                    <div className='flex flex-col gap-2  items-center'>
                        <img src="/src/assets/icon-ratings.png" className='h-5 w-5' alt="" />
                        <p className='text-[#001931] text-[12px]'>Average Ratings</p>
                        <h2 className='font-bold text-3xl text-[#001931]'>{ratingAvg}</h2>
                    </div>
                    <div className='flex flex-col gap-2 items-center'>
                        <img src="/src/assets/icon-review.png" className='h-5 w-5' alt="" />
                        <p className='text-[#001931] text-[12px]'>Total Reviews</p>
                        <h2 className='font-bold text-3xl text-[#001931]'>{NumberFormat(reviews)}</h2>
                    </div>
                </div>


                <button ref={installBtn} onClick={installHandle} disabled={isInstallDisabled} className='btn bg-[#00D390] text-white py-6 px-7'>{isInstallDisabled? 'Installed' : `Install Now (${size}MB)`}</button>
            </div>
        </div>
    );
};

export default AppInfo;