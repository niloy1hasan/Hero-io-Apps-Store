import React from "react";

const Description = ({description}) => {
    const desc = [description];
  return (
    <div className="py-10">
      <h1 className="font-semibold text-xl text-[#001931] pb-4">Description</h1>
      <div className="flex flex-col gap-6 text-[#627382]">
        {desc.map(data=> <p>{data}</p>)}
      </div>
    </div>
  );
};

export default Description;
