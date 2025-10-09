import { Download } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router';
import { NumberFormat } from '../../utils/NumberFormat';

const AppCard = ({data}) => {
    const navigate = useNavigate();

    const {title, id, downloads, ratingAvg} = data;

    const handleClick = () => {
        navigate(`/all-apps/${id}`);
    }

    return (
        <div onClick={handleClick} className='card select-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.01)] bg-white p-4'>
            <div>
                <img src='/src/assets/demo-app1.webp' alt="" className='rounded-lg w-full'/>
            </div>
            <p className='py-4 font-medium text-lg'>{title}</p>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-1.5 py-1.5 px-3 rounded-sm bg-[#F1F5E8]'>
                    <Download color="#00D390" />
                    <span className='text-[#00D390] font-bold'>{NumberFormat(downloads)}</span>
                </div>
                <div className='flex items-center gap-1.5 bg-[#FFF0E1] py-1.5 px-3 rounded-sm'>
                    <img src="/src/assets/icon-ratings.png" className='w-4 h-4' alt="" />
                    <span className='text-[#FF8811] font-bold'>{ratingAvg}</span>
                </div>
            </div>
        </div>

        // <div>
        //     <div>
        //         <img src={imageURL} alt="" />
        //     </div>
        //     <p>{name}</p>
        //     <div>
        //         <div>{downloaded}</div>
        //         <div>{ratings}</div>
        //     </div>
        // </div>
    );
};

export default AppCard;