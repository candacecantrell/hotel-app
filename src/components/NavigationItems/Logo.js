import React from 'react';

import Logo from '../../assets/images/Logo.png';
import classes from './Logo.css';

const logo = (props) => (
<div className={classes.Logo}>
    <img src={Logo} alt="shopLogo"/>
</div>
);
export default logo;