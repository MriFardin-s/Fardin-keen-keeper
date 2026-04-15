import React from 'react';
import { Outlet } from 'react-router';

const RootLayout = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <Outlet/>
            <h3>foot</h3>
            
        </div>
    );
};

export default RootLayout;