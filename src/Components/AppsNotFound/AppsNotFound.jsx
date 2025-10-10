import React from 'react';
import { useNavigate } from 'react-router';
import appError from "../../assets/app-error.png";

const AppsNotFound = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }
    return (
        <section className='h-[100vh] w-10/12 mx-auto text-center flex justify-center items-center'>
            <div>
                <img src={appError} className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mx-auto' alt="" />
                <div className='my-8'>
                    <h1 className='text-[#001931] font-bold text-3xl'>OPPS!! APP NOT FOUND</h1>
                <p className='text-[#627382] py-2'>The App you are requesting is not found on our system.  please try another apps</p>
                    <button onClick={handleClick} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-10 py-5 text-[16px] my-1'>Go Back!</button>
                </div>
            </div>
        </section>
    );
};

export default AppsNotFound;