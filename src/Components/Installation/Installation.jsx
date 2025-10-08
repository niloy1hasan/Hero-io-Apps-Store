import React from 'react';
import InstalledAppContainer from '../InstalledAppContainer/InstalledAppContainer';

const Installation = () => {
    return (
        <section className="pt-10 lg:pt-16">
      <div className="text-center w-10/12 mx-auto">
        <h1 className="text-[#001931] font-bold text-4xl">Your Installed Apps</h1>
        <p className="text-[#627382] font-light text-[16px] my-4">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex items-center gap-3 py-4 justify-between w-[85%] lg:w-[90%] mx-auto">
        <h3 className="font-semibold text-[16px] lg:text-[20px]"><span>(1)</span> Apps Found</h3>
        {/* <label className="input w-fit lg:w-[400px] md:w-fit bg-transparent">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
          <input type="search" className="placeholder:text-[#627382]" placeholder="Search Apps" />
        </label> */}
        <div className="dropdown dropdown-bottom bg-transparent dropdown-end">
            <div tabIndex={0} role="button" className="btn bg-transparent m-1">Sort By <i class="fa-solid fa-caret-down"></i></div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <li><a>Sort By Size</a></li>
                <li><a>Sort By Name</a></li>
            </ul>
        </div>
      </div>

      <InstalledAppContainer></InstalledAppContainer>

    </section>
    );
};

export default Installation;