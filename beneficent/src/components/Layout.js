import React from 'react';
import NavigationBar from './NavigationBar';
import ThreeColumns from './ThreeColumns';
import FourColumns from './FourColumns';
import AboutUs from './AboutUs';

const Layout = () => {
    return (
    <>
        <NavigationBar/>
        <ThreeColumns/>
        <FourColumns/>
        <AboutUs/>
    </>
    )
}

export default Layout;