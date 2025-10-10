import React, { useRef, useState } from "react";
import AppsContainer from "../AppsContainer/AppsContainer";
import { useLoaderData } from "react-router";
import ScrollTop from "../ScrollTop/ScrollTop";
import appError from "../../assets/app-error.png";

const AllApps = () => {
  const data = useLoaderData();
  const [appData, setAppData] = useState(data);
  const [searchData, setsearchData] = useState('');
  const [isEmptyList, setEmptyList] = useState(false);
  const [isSearching, setSearching] = useState(false);

  const searchRef = useRef(null);

  const showAllApps = () => {
    searchRef.current.value = '';
    setEmptyList(false);
    setAppData(data);
  }

 const handleInput = (e) => {
  setSearching(true);
  const value = e.target.value;
  setsearchData(value);
  
  setTimeout(() => {
    if(value.length>0){
    const newData = data.filter(item => item.title.toLowerCase().startsWith(value.toLowerCase()));
    setAppData(newData);
    if(newData.length<=0){
      setEmptyList(true);
    } else {
      setEmptyList(false);
    }
  } else {
    setAppData(data);
    setEmptyList(false);
  }

  setSearching(false);
  }, 100);
  
 }

  return (
    <section className="pt-10 lg:pt-16">
      <div className="text-center w-10/12 mx-auto">
        <h1 className="text-[#001931] font-bold text-4xl">Our All Applications</h1>
        <p className="text-[#627382] font-light text-[16px] my-4">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-start gap-3 py-4 md:items-center justify-between w-[85%] lg:w-[90%] mx-auto">
        <h3 className="font-semibold text-[20px]"><span>({appData.length})</span> Apps Found</h3>
        <label className="input w-full lg:w-[400px] md:w-fit bg-transparent">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
          <input ref={searchRef} onChange={handleInput} defaultValue={searchData} type="search" className="placeholder:text-[#627382]" placeholder="Search Apps" />
        </label>
      </div>

        {isSearching && 
      <div className='h-[60vh] flex justify-center font-semibold text-gray-900 text-3xl'>
        <div className='flex items-center'>
          <span>L</span>
         <img src="/logo.png" className='mx-1 h-8 w-8 animate-spin' alt="" />
         <span>ading...</span>
        </div>
      </div>
        }
        <ScrollTop/> 
        <AppsContainer appData={appData}></AppsContainer>
        
        <section className={`${isEmptyList? 'flex':'hidden'} h-fit pb-10 w-10/12 mx-auto text-center justify-center items-center`}>
            <div>
                <img src={appError} className='w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] mx-auto' alt="" />
                <div className='my-8'>
                    <h1 className='text-[#001931] font-bold text-3xl'>OPPS!! APP NOT FOUND</h1>
                <p className='text-[#627382] py-2'>The App you are searching is not found on our system.  please search another apps</p>
                    <button onClick={showAllApps} className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white px-10 py-5 text-[16px] my-1'>Show All Apps</button>
                </div>
            </div>
        </section>

    </section>
  );
};

export default AllApps;
