import React from 'react';
import NavigationBar from './NavigationBar';
import ThreeColumns from './ThreeColumns';
import FourColumns from './FourColumns';
import AboutUs from './AboutUs';
import OrganizationSection from './OrganizationsSection';
import FormSection from './FormSection';
import Login from './Login';

const Layout = () => {
    return (
    <>
        <NavigationBar/>
        <ThreeColumns/>
        <FourColumns/>
        <AboutUs/>
        <OrganizationSection/>
        <FormSection/>
        <Login/>
    </>
    )
}

export default Layout;