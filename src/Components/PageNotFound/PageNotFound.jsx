import React from 'react';
import { useNavigate } from 'react-router';
import loadError from "../../assets/error-404.png";

const PageNotFound = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(-1);
    }
    return (
        <section className='h-[100vh] w-10/12 mx-auto text-center flex justify-center items-center'>
            <div>
                <img src={loadError} className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mx-auto' alt="" />
                <div className='my-8'>
                    <h1 className='text-[#001931] font-bold text-3xl'>Oops, page not found!</h1>
                <p className='text-[#627382] py-2'>The page you are looking for is not available.</p>
                    <button onClick={handleClick} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-10 py-5 text-[16px] my-1'>Go Back!</button>
                </div>
            </div>
        </section>
    );
};

export default PageNotFound;