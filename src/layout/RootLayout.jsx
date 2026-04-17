import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';
import { ToastContainer } from 'react-toastify';

const RootLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
           <Footer/>
           <ToastContainer />
            
        </div>
    );
};

export default RootLayout;