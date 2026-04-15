import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar/NavBar';
import Footer from '../Components/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
           <Footer/>
            
        </div>
    );
};

export default RootLayout;