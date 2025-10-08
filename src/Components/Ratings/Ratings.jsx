import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';



const Ratings = () => {

    const data = [
  {
    name: '5 star',
    ratings: 2342
  },
  {
    name: '4 star',
    ratings: 502
  },
  {
    name: '3 star',
    ratings: 423
  },
  {
    name: '2 star',
    ratings: 823
  },
  {
    name: '1 star',
    ratings: 543
  }
];



    return (
      <>
      <div className='w-[90%] mx-auto h-[1px] bg-gray-400'></div>
      <div className='w-full h-[400px] my-10'>
        <ResponsiveContainer>
            <ComposedChart layout="vertical" data={data}
          >
            <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" scale="band" />
          <Tooltip />
          <Bar dataKey="ratings" barSize={40} fill="#FF8811" />

            </ComposedChart>
        </ResponsiveContainer>
      </div>
        <div className='w-[90%] mx-auto h-[1px] bg-gray-400'></div>
      </>
    );
};

export default Ratings;