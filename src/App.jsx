import { Outlet } from 'react-router'
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {
  

  return (
    <>
    <header className='max-w-[1600px] mx-auto'>
      <Navbar></Navbar>
    </header>
    <main className='max-w-[1600px] mx-auto bg-[#f5f5f5]'>
      <Outlet></Outlet>
    </main>
    </>
  )
}

export default App
