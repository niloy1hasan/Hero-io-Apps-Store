import React from 'react';

const Footer = () => {
    return (
        <footer className='flex flex-col gap-10 bg-cover max-w-[1600px] mx-auto bg-[#031436] text-white rounded-t-2xl'>
            <div className='flex flex-col gap-8 lg:flex-row  justify-around pt-10 px-10 lg:px-10 lg:pt-20'>
                <div className='flex flex-col gap-4 lg:gap-6'>
                   <div className='flex items-center gap-2'>
                     <img src="/src/assets/logo.png" className='h-10 w-10' alt="" />
                     <h2 className='font-extrabold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-2xl bg-clip-text text-transparent'>HERO.IO</h2>
                   </div>
                   <p className='lg:max-w-92'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.</p>
                   <ul className='flex gap-1 lg:gap-3 text-[20px] lg:text-[24px]'>
                    <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href=""></a></li>
                    <li><a href=""><i className="fa-brands fa-whatsapp"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-google-play"></i></a></li>
                    <li><a href=""><i className="fa-brands fa-app-store-ios"></i></a></li>
                   </ul>
            </div>
            <div>
                <h3 className='text-[#c5c8ca] font-light pb-2 text-sm'>Company</h3>
                <ul>
                    <li className='hover:underline'><a href="">About</a></li>
                    <li className='hover:underline'><a href="">What's New</a></li>
                    <li className='hover:underline'><a href="">Customers</a></li>
                    <li className='hover:underline'><a href="">Careers</a></li>
                    <li className='hover:underline'><a href="">FAQ</a></li>
                    <li className='hover:underline'><a href="">Contact Us</a></li>
                </ul>
            </div>
            <div>
                <h3 className='text-[#c5c8ca] font-light pb-2 text-sm'>Developer Center</h3>
                <ul>
                    <li className='hover:underline'><a href="">Developer Portal</a></li>
                    <li className='hover:underline'><a href="">Documentation</a></li>
                    <li className='hover:underline'><a href="">Monetization</a></li>
                    <li className='hover:underline'><a href="">Distribution Guidelines</a></li>
                    <li className='hover:underline'><a href="">Partner Support</a></li>
                    <li className='hover:underline'><a href="">Analytics & Reporting</a></li>
                </ul>
            </div>
            <div>
                <h3 className='text-[#c5c8ca] font-light pb-2 text-sm'>Help & Support</h3>
                <ul>
                    <li className='hover:underline'><a href="">Help Center</a></li>
                    <li className='hover:underline'><a href="">System Status</a></li>
                    <li className='hover:underline'><a href="">Refund Policy</a></li>
                    <li className='hover:underline'><a href="">Report a Problem</a></li>
                    <li className='hover:underline'><a href="">User Safety</a></li>
                    <li className='hover:underline'><a href="">Feedback</a></li>
                </ul>
            </div>
            </div>
            
            <div className='flex relative bottom-0 flex-col-reverse gap-10 items-center text-center lg:flex-row justify-between w-full lg:w-10/12 bg-gray-600/40 p-8 rounded-t-4xl mx-auto'>
                <div>
                    <p><span className='lg:hidden'>|</span> Copyright 2025 Hero.io |<br className='lg:hidden'/> All Rights Reserved</p>
                </div>
                <div>
                    <ul className='flex flex-col lg:flex-row lg:gap-5'>
                        <li className='underline'><a href="">Privacy Policy</a></li>
                        <li className='underline'><a href="">Terms of Service</a></li>
                        <li className='underline'><a href="">Report a Problem</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;