import React, { useEffect, useState } from 'react';
import InstalledAppContainer from '../InstalledAppContainer/InstalledAppContainer';
import { useLoaderData, useNavigate } from 'react-router';

const Installation = () => {
    // const installedList = JSON.parse(localStorage.getItem('installedApps'));
    const installedList = useLoaderData();
    const navigate = useNavigate();
    const [isloading, setLoading] = useState(false);
    const [installed, updateInstalled] = useState([]);

    useEffect(()=>{
      setLoading(true);
     const timer = setTimeout(()=>{
        updateInstalled(installedList);
        setLoading(false);
      }, 100);
      return () => clearTimeout(timer); 
    }, []);
    
    const handleUninstall = (id) => {
      const newData = installed.filter(item => item.id!=id);
      updateInstalled(newData);
      localStorage.setItem('installedApps', JSON.stringify(newData));
    }

    const sortSelection = (e) => {
      if(e.target.value==='High to Low'){
        const descSort =  [...installed].sort((a, b) => b.downloads - a.downloads);
        updateInstalled(descSort);
      } else {
        const descSort =  [...installed].sort((a, b) => a.downloads - b.downloads);
        updateInstalled(descSort);
      }
    }

    const handleClick = () => {
      navigate('/all-apps');
    }

    return (
        <section className="pt-10 lg:pt-16 pb-16">
      <div className="text-center w-10/12 mx-auto">
        <h1 className="text-[#001931] font-bold text-4xl">Your Installed Apps</h1>
        <p className="text-[#627382] font-light text-[16px] my-4">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex items-center gap-3 py-4 justify-between w-[85%] lg:w-[90%] mx-auto">
        <h3 className="font-semibold text-[16px] lg:text-[20px]"><span>({installed.length })</span> Apps Found</h3>

        <select onChange={sortSelection} defaultValue="Sort By Downloads" className="select w-44 lg:w-48 bg-[#f5f5f5]">
          <option disabled={true}>Sort By Downloads</option>
          <option>High to Low</option>
          <option>Low to High</option>
        </select>
      </div>

      {isloading && 
      <div className='h-[60vh] flex justify-center font-semibold text-gray-900 text-3xl'>
        <div className='flex items-center'>
          <span>L</span>
         <img src="/src/assets/logo.png" className='mx-1 h-8 w-8 animate-spin' alt="" />
         <span>ading...</span>
        </div>
      </div>
        }
      <InstalledAppContainer installed={installed} handleUninstall={handleUninstall}></InstalledAppContainer>

      <div className={`${installed.length ? 'hidden' : 'flex'} h-[50vh] w-10/12 mx-auto text-center justify-center items-center`}>
            <div>
                <img src="/src/assets/app-error.png" className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mx-auto' alt="" />
                <div className='my-8'>
                    <h1 className='text-[#001931] font-bold text-3xl'>No Apps Installed Yet</h1>
                <p className='text-[#627382] py-2'>No Apps you are installed yet from our system.  please visit our all apps</p>
                    <button onClick={handleClick} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-10 py-5 text-[16px] my-1'>See All Apps</button>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Installation;