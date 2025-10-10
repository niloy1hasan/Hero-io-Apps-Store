import { Download } from 'lucide-react';
import React from 'react';
import { NumberFormat } from '../../utils/NumberFormat';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const InstalledAppCard = ({installedApp, handleUninstall}) => {
    const {id, image, title, downloads, size, ratingAvg} = installedApp;
    const navigate = useNavigate();
    const handleNavigate = () => {
        navigate(`/all-apps/${id}`);
    }
    return (
        <div className='bg-white flex flex-col md:flex-row gap-4 justify-between items-start md:items-center px-2 py-3 md:p-4 rounded-sm'>
            <div className='flex gap-3 items-start lg:items-center'>
                <div>
                    <img src={image} onClick={handleNavigate} className='w-14 cursor-pointer h-14 lg:w-20 lg:h-20 rounded-lg' alt="" />
                </div>
                <div className='flex-1 flex flex-col gap-1 lg:gap-4'>
                        <h2 onClick={handleNavigate} className='font-medium cursor-pointer text-[#001931]'>{title}</h2>
                    <div className='flex gap-4'>
                        <div className='flex items-center gap-1'>
                            <Download size={16} color="#00D390" />
                            <span className='font-medium text-[#00D390]'>{NumberFormat(downloads)}</span>
                        </div>
                        <div className='flex items-center gap-1'>
                            <img src="/src/assets/icon-ratings.png" className='h-4 w-4' alt="" />
                                <span className='text-[#FF8811] font-bold'>{ratingAvg}</span>
                        </div>
                        <div>
                                <span className='text-[#627382] font-medium'>{size} MB</span>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={()=> {toast(`${title} app is uninstalled`); handleUninstall(id);}} className='btn bg-[#00D390] w-full md:w-fit text-white'>Uninstall</button>
        </div>
    );
};

export default InstalledAppCard;