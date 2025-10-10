import { Outlet, useNavigation } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import { ToastContainer } from 'react-toastify';
import ScrollTop from './Components/ScrollTop/ScrollTop';

function App() {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);

  return (
    <>
    <header className='max-w-[1600px] mx-auto'>
      <Navbar></Navbar>
    </header>
    <main className='max-w-[1600px] mx-auto bg-[#f5f5f5]'>
      {isNavigating && 
      <div className='h-[100vh] flex justify-center font-semibold text-gray-900 text-3xl'>
        <div className='flex items-center'>
          <span>L</span>
         <img src="/logo.png" className='mx-1 h-8 w-8 animate-spin' alt="" />
         <span>ading...</span>
        </div>
      </div>
        }
       <ScrollTop/> 
      <Outlet></Outlet>
    </main>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </>
  )
}

export default App
