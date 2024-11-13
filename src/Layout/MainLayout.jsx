import React, { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {

    return (
        <div className="flex flex-col min-h-screen">
            <Navbar></Navbar>
                <div className='flex-grow min-h-[calc(100vh - 132px)]'>
                <Outlet></Outlet>
                </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;