import React from 'react';

const CommonError = () => {
    const handleClick = () => {
        window.location.reload();
    }

    return (
        <section className='h-[100vh] w-10/12 mx-auto text-center flex justify-center items-center'>
            <div>
                <img src="/src/assets/error-404.png" className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mx-auto' alt="" />
                <div className='my-8'>
                    <h1 className='text-[#001931] font-bold text-3xl'>Oops, Something is Wrong!</h1>
                <p className='text-[#627382] py-2'>The page faced Problem for Network Error.</p>
                    <button onClick={handleClick} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-10 py-5 text-[16px] my-1'>Reload the Page</button>
                </div>
            </div>
        </section>
    );
};

export default CommonError;