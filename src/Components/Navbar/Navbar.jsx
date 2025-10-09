import { NavLink } from 'react-router-dom';


const Navbar = () => {

    const activeMenuStyle = "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent pb-1 border-b-2 border-[#632EE3]";
    return (
        <>
        <nav className="navbar bg-base-100 shadow-sm">
            <div className='w-[94%] mx-auto flex justify-between items-center'>
                <div className="navbar-start">

                    <div className="dropdown ml-[-10px]">
                        <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul tabIndex="0" className="menu menu-sm font-light dropdown-content bg-base-100 z-1 mt-3 w-[100vw] justify-center items-center p-2 shadow">
                            <li><NavLink to='/' end className='text-[18px]'>Home</NavLink></li>
                            <li><NavLink to='/all-apps' end className='text-[18px]'>Apps</NavLink></li>
                            <li><NavLink to='/installation' end className='text-[18px]'>Installation</NavLink></li>
                        </ul>
                    </div>
                
                    <NavLink to='/'>
                        <div className='flex gap-2 items-center cursor-pointer'>
                            <img src='/src/assets/logo.png' alt="" className='h-8 w-8'/>
                            <h2 className='font-extrabold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>HERO.IO</h2>
                        </div>
                    </NavLink>

                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="flex items-center gap-8 font-semibold px-1 text-black/90">
                        <li><NavLink to='/' end className={({ isActive }) => `cursor-pointer ${isActive ? activeMenuStyle : ""}`}>Home</NavLink></li>
                        <li><NavLink to='/all-apps' end className={({ isActive }) => `cursor-pointer ${isActive ? activeMenuStyle : ""}`}>Apps</NavLink></li>
                        <li><NavLink to='/installation' end className={({ isActive }) => `cursor-pointer ${isActive ? activeMenuStyle : ""}`}>Installation</NavLink></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <a href='https://github.com/niloy1hasan' className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><i className="fa-brands fa-github"></i> Contribute</a>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;