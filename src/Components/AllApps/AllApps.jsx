import React from "react";
import AppsContainer from "../AppsContainer/AppsContainer";

const AllApps = () => {
  return (
    <section className="pt-10 lg:pt-16">
      <div className="text-center w-10/12 mx-auto">
        <h1 className="text-[#001931] font-bold text-4xl">Our All Applications</h1>
        <p className="text-[#627382] font-light text-[16px] my-4">Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>
      <div className="flex flex-col-reverse md:flex-row items-start gap-3 py-4 md:items-center justify-between w-[85%] lg:w-[90%] mx-auto">
        <h3 className="font-semibold text-[20px]"><span>(132)</span> Apps Found</h3>
        <label className="input w-full lg:w-[400px] md:w-fit bg-transparent">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></g></svg>
          <input type="search" className="placeholder:text-[#627382]" placeholder="Search Apps" />
        </label>
      </div>


        <AppsContainer></AppsContainer>

    </section>
  );
};

export default AllApps;
