import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Layout = () => {
  return (
    <>
        <Navbar />
            <main className='bg-slate-50 min-h-[100vh]'>
                <Outlet/>
            </main>
        <Footer />
    </>
  )
}

export default Layout
