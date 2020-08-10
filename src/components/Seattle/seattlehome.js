import React, { Component } from 'react';
// import './index.css';
// import './sandiego.css'
import HotelDataCard from '../HotelData/HotelData';
import seattleHero from '../../assets/Photos/seattleHero.jpg';
import BookingModal from '../Booking/BookingModal';

class SeattleHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            hotelData: [],
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
        console.log(hotelData);
        console.log('sandiego' + hotelData.slice(0, 1));
        console.log( hotelData.slice(4));
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
            <div className="hotelDataAmenaties">
            {hotelData.slice(3,4).map((hotel, key) =>
            <div key={key}>
        <HotelDataCard
        roomPrice_1={hotel.price_1}
        roomPrice_2={hotel.price_2}
        roomPrice_3={hotel.price_3}
        roomPrice_4={hotel.price_4}
        handleSubmit={this.handleSubmit}
        bookingModalTitle="Quinault Las Vegas"
        dataHeroImg={seattleHero}
        name={hotel.name}
        description={hotel.desc}
        address={hotel.address}
        phone={hotel.phone}
        iconClass={hotel.pool ? "trueIcon" : "disabledIcon"}
        spaClass={hotel.spa ? "trueIcon" : "disabledIcon"}
        wifiClass={hotel.free_wifi ? "trueIcon" : "disabledIcon"}
        airClass={hotel.air_conditioning ? "trueIcon" : "disabledIcon"}
        hotTubClass={hotel.hot_tub ? "trueIcon" : "disabledIcon"}
        petsClass={hotel.pets ? "trueIcon" : "disabledIcon"}
        accessClass={hotel.accessibility ? "trueIcon" : "disabledIcon"}
        carClass={hotel.parking ? "trueIcon" : "disabledIcon"}
        busClass={hotel.public_transportation ? "trueIcon" : "disabledIcon"}
        restClass={hotel.restaurant ? "trueIcon" : "disabledIcon"}
        barClass={hotel.bar ? "trueIcon" : "disabledIcon"}
        roomClass={hotel.room_service ? "trueIcon" : "disabledIcon"}
        breakClass={hotel.brekfast_buffet ? "trueIcon" : "disabledIcon"}
        />
        </div>
        )}
        </div>
        );
      }
    }
  }

export default SeattleHome;