import React from 'react';

import NavigationItems from './NavigationItems';
import './SideDrawer.css';
import Backdrop from '../NavigationItems/Backdrop/Backdrop';

const sideDrawer = ( props ) => {
    let attachedClasses = "SideDrawer Close";
    if (props.open) {
        attachedClasses = " SideDrawer Open";
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses}>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;