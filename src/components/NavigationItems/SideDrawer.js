import React from 'react';

import Logo from './Logo';
import NavigationItems from './NavigationItems';
//import Logo from '../../assets/images/Logo';
import './SideDrawer.css';
import Backdrop from '../NavigationItems/Backdrop/Backdrop';

// const sideDrawer = (props) => {
//     return (
//         <div className="sideDrawer">
//                 <button className="burgerMenu drawerToggleClicked"><a alt="burgerMenu"><i class="fas fa-bars"></i></a></button>
//                 <nav>
//                     <NavigationItems />
//                 </nav>
//         </div>
    
//     );
// };

const sideDrawer = ( props ) => {
    let attachedClasses = "SideDrawer Close";
    if (props.open) {
        attachedClasses = " SideDrawer Open";
    }
    return (
        <React.Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses}>
                <div>
                <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </React.Fragment>
    );
};

export default sideDrawer;