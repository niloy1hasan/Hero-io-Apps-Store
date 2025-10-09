import React, { useState } from 'react';
import InstalledAppContainer from '../InstalledAppContainer/InstalledAppContainer';

const Installation = () => {
    const installedList = JSON.parse(localStorage.getItem('installedApps'));
    
    const [installed, updateInstalled] = useState(installedList);

    const handleUninstall = (id) => {
      const newData = installed.filter(item => item.id!=id);
      updateInstalled(newData);
      localStorage.setItem('installedApps', JSON.stringify(newData));
    }

    return (
        <section className="pt-10 lg:pt-16 pb-16">
      <div className="text-center w-10/12 mx-auto">
        <h1 className="text-[#001931] font-bold text-4xl">Your Installed Apps</h1>
        <p className="text-[#627382] font-light text-[16px] my-4">Explore All Trending Apps on the Market developed by us</p>
      </div>
      <div className="flex items-center gap-3 py-4 justify-between w-[85%] lg:w-[90%] mx-auto">
        <h3 className="font-semibold text-[16px] lg:text-[20px]"><span>({installed.length})</span> Apps Found</h3>

        <select defaultValue="Sort By" className="select w-36 lg:w-48 bg-[#f5f5f5]">
          <option disabled={true}>Sort By</option>
          <option>High to Low</option>
          <option>Low to High</option>
        </select>
      </div>

      <InstalledAppContainer installed={installed} handleUninstall={handleUninstall}></InstalledAppContainer>

    </section>
    );
};

export default Installation;