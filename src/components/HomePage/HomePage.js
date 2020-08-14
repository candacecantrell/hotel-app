import React, { Component } from 'react';
import HotelCard from './HotelCard';

import portlandSkyline from '../../assets/Photos/portlandskyline.jpg';
import seattleSkyline from '../../assets/Photos/seattleskyline.jpg';
import lasvegasSkyline from '../../assets/Photos/lasvegasSkyline.jpg';
import sandiegoSkyline from '../../assets/Photos/sandiegoskyline.jpg';
import miamiSkyline from '../../assets/Photos/miamiSkyline.jpg';
import palmTreesHeroImg from '../../assets/Photos/palmTreesHeroImg.jpg';

import { Spinner } from "react-bootstrap";


class AllHotelList extends Component {
    constructor(props) {
        super(props);

        this.hotelimage = null;

        this.state = {
            error: null,
            isLoaded: false,
            hotelData: [],
            hotelimage: '',
        };
    }
    componentDidMount() {
        fetch("https://aqueous-plateau-11528.herokuapp.com/motels/all-motels")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    hotelData: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {
        const { error, isLoaded, hotelData } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div className="loadingClass">
            <Spinner animation="border" />
          </div>;
        } else {
          return (
            <div className="boxHotel">
                <div className="heroClass">
              <img className="homeHeroImg" src={palmTreesHeroImg} alt="hero"/>
              <h3 className="heroSlogan">Book Your Vacation With Quinault Today</h3>
              </div>
            {hotelData.map((hotel, key) =>
            <div key={key}>
        <HotelCard
        imgsrc={hotel.photo}
        name={hotel.name}
        address={hotel.address}
        link={hotel.link}
        city={hotel.city}
        />
        </div>
        )}
        </div>
        );
      }
    }
  }

export default AllHotelList;