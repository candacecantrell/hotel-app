import React from 'react';
import DrawerToggle from '../components/NavigationItems/DrawerToggle/DrawerToggle';
import { NavLink } from "react-router-dom";

const toolbar = (props) => (
    <header className="toolbar" >
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div>
            <h2 className="headerTitle" >
            <NavLink to="/" exact>Quinault Motels</NavLink>
            </h2>
        </div>
        <nav className="DesktopOnly">
            <ToolbarNavItems/>
        </nav>

    </header>
);

const ToolbarNavItem = (props) => (
<li className="toolbarNavItem">
    <NavLink
    to={props.link}
    exact={props.exact}
    activeClassName="active" >{props.children}</NavLink>
</li>

);

const ToolbarNavItems = () => (
    <ul className="toolbarNavItems">
        <ToolbarNavItem link="/sandiego" >SanDiego</ToolbarNavItem>
        <ToolbarNavItem link="/seattle" >Seattle</ToolbarNavItem>
        <ToolbarNavItem link="/miami" >Miami</ToolbarNavItem>
        <ToolbarNavItem link="/lasvegas" >Las Vegas</ToolbarNavItem>
        <ToolbarNavItem link="/portland" >Portland</ToolbarNavItem>
    </ul>
);

export default toolbar;