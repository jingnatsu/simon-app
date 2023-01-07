import React from 'react';
import './HeaderComponent.scss'
import NavigationMenuComponent from '../NavigationMenuComponent'
import SiteLogoComponent from '../SiteLogoComponent/SiteLogoComponent'


function HeaderComponent() {

    return (
        <header id="HeaderComponent" className="site-header" role="banner">
            <NavigationMenuComponent />
            <SiteLogoComponent/>
        </header>
    )
}

export default HeaderComponent;