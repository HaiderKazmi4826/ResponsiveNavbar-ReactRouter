import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
Outlet

const AppLayout = () => {
  return (
    <div className='min-h-screen w-full flex flex-col'>
    <Navbar />
    <Outlet />
    <Footer />
    </div>
  )
}

export default AppLayout