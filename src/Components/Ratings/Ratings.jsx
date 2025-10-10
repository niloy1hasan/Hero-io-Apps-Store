import React from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const Ratings = ({ratings}) => {
console.log(ratings);
//     const data = [
//   {
//     name: '5 star',
//     ratings: 2342
//   },
//   {
//     name: '4 star',
//     ratings: 502
//   },
//   {
//     name: '3 star',
//     ratings: 423
//   },
//   {
//     name: '2 star',
//     ratings: 823
//   },
//   {
//     name: '1 star',
//     ratings: 543
//   }
// ];



    return (
      <>
      <div className='w-[90%] mx-auto h-[1px] bg-gray-400'></div>
      <div className='w-full h-[300px] my-10'>
        <ResponsiveContainer>
            <ComposedChart margin={{ top: 5, right: 20, bottom: 5, left: 0 }} layout="vertical" data={ratings}
          >
            <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" />
          <YAxis dataKey="name"  tick={{ fontSize: 12 } } width={50}
                padding={{ top: 30, bottom: 30 }} type="category" scale="point" />
          <Tooltip />
          <Bar dataKey="count" barSize={40} fill="#FF8811" activeBar={<Rectangle fill="#632EE3"/>} />

            </ComposedChart>
        </ResponsiveContainer>
      </div>
        <div className='w-[90%] mx-auto h-[1px] bg-gray-400'></div>
      </>
    );
};

export default Ratings;