import React from 'react';

const drawerToggle = (props) => (
    <div className="DrawerToggle" onClick={props.clicked}>
            <button className="burgerMenu drawerToggleClicked"><a alt="burgerMenu"><i className="fas fa-bars"></i></a></button>

    </div>
);

export default drawerToggle;