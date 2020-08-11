import React from 'react';
import NavigationItem from './NavigationItem';

const navigationItems = () => (
    <ul className="navigationItems">
        <NavigationItem link="/">Home</NavigationItem>
        <NavigationItem link="/sandiego">SanDiego</NavigationItem>
        <NavigationItem link="/seattle">Seattle</NavigationItem>
        <NavigationItem link="/miami">Miami</NavigationItem>
        <NavigationItem link="/lasvegas">Las Vegas</NavigationItem>
        <NavigationItem link="/portland">Portland</NavigationItem>
    </ul> 

);

export default navigationItems;