import React from 'react';
import { NavLink } from "react-router-dom";

function HotelCard(props) {
    return (
        <div className='hotelDiv'>
            <div className="imgHover">
            <img className="hotelPhoto" src={props.imgsrc} alt='hotel'/>
            </div>
            <div className="hotelHover">
            <ul className='hotelList'>
            <li className="hotelName" >{props.name}</li>
            <li>{props.address}</li>
            <button type="button" className="btn btn-light btn-sm btnBook">
    <NavLink to={props.link}>Visit {props.city}</NavLink>
                </button>
    <div>{props.image}</div>
            </ul>
            </div>
        </div>
    )
}

export default HotelCard;