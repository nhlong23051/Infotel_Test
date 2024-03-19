import React from 'react'
import Header from './component/Header'
import Sidebar from './component/Sidebar'
import { Outlet } from 'react-router-dom'
import Footer from './component/Footer'

export default function HomePage() {
    return (
        <div className='bg-gray-100'>
            <Header />
            <div className='flex pt-[30px] pl-[160px] pr-[160px]'>
                <Sidebar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
