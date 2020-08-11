import React from 'react';

const navigationItem = (props) => (
    <li className="navigationItem">
        <a href={props.link}>{props.children}</a></li>

);

export default navigationItem; 