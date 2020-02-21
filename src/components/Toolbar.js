import React from 'react';
//import Logo from './NavigationItems/Logo';
//import NavigationItems from './NavigationItems/NavigationItems';

import './Toolbar.css';
import DrawerToggle from './NavigationItems/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    <React.Fragment>
    <header className="toolbar">
    <DrawerToggle clicked={props.drawerToggleClicked} />        <div className="toolbarTitle">CC's Shop</div>
        <div className="searchbarDiv">
        <p>Search: </p>
        <input className="toolbarSearch"></input>
        </div>
        <a><i className="fas fa-shopping-bag" alt="shoppingCartIcon"></i></a>
    </header>
    <ToolbarNavItems />
    </React.Fragment>
);

const ToolbarNavItem = (props) => (
    <li className="toolbarNavItem">
        <a href={props.link}>{props.children}</a></li>

);

const ToolbarNavItems = () => (
    <ul className="toolbarNavItems">
        <ToolbarNavItem link="/">link 1</ToolbarNavItem>
        <ToolbarNavItem link="/">link 1</ToolbarNavItem>
        <ToolbarNavItem link="/">link 1</ToolbarNavItem>
        <ToolbarNavItem link="/">link 1</ToolbarNavItem>
        <ToolbarNavItem link="/">link 1</ToolbarNavItem>
    </ul>
);

export default toolbar;