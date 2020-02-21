import React from 'react';

import './NavigationItem.css';
import NavigationItem from './NavigationItem';

const navigationItems = () => (
    <ul className="navigationItems">
        <NavigationItem link="/">link a</NavigationItem>
        <NavigationItem link="/">link b</NavigationItem>
        <NavigationItem link="/">link c</NavigationItem>
    </ul>
);

export default navigationItems;