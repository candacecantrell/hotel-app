import React, {useState, useContext} from 'react';
import Icon from '@mdi/react'
import { mdiSwim, mdiSpa, mdiWifi, mdiAirFilter, mdiHotTub, mdiWheelchairAccessibility,  mdiCar, mdiBus,
    mdiDogSide, mdiSilverwareForkKnife, mdiGlassCocktail, mdiRoomService, mdiCoffee, mdiCheck } from '@mdi/js';
import outsidedoor from '../../assets/Photos/outsidedoor.jpg';
import {BookingModal, BookingModalButton} from '../Booking/BookingModal';
import GlobalState from '../BookingState/BookingState'
import { useHistory } from "react-router-dom";


export const initialFormData = Object.freeze({
    checkInMonth: "January",
    checkInDate: "1",
    checkInGuests: "1",
    checkInNights: "1",
    guestPrice: 0,
    checkInRooms: "",
  });
  function GetGuestCost(data, roomPrice_1, roomPrice_2, roomPrice_3, roomPrice_4) {
      const {checkInGuests, checkInNights} = data;
      console.log(roomPrice_1);
      let guestCostEstimate;
      if(checkInGuests === '4' || checkInGuests === '5') {
        guestCostEstimate = checkInNights * roomPrice_4;
        return guestCostEstimate;
      }
      else if(checkInGuests === '3') {
        guestCostEstimate = checkInNights * roomPrice_3;
        return guestCostEstimate;
      }
      else if(checkInGuests === '2') {
        guestCostEstimate = checkInNights * roomPrice_2;
        return guestCostEstimate;
      }
        guestCostEstimate = checkInNights * roomPrice_1;
        return guestCostEstimate;

  }

function HotelDataCard(props) {
        const [isValid, setIsValid] = useState(false);
        const [ formData, updateFormData] = React.useState(initialFormData);
        const [checkoutModal, setCheckoutModalShow] = useState(false);
        const [state, setState] = useContext(GlobalState);
        const history = useHistory();
        const [validated, setValidated] = useState(false);

        const handleChange = (e) => {
          updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
          });
          setState(state => ({...state, guestCheckInData: formData}))
          console.log(formData);
          if (formData.checkInRooms !== '') {
            setIsValid(false); 
          }
        };
      
        const handleSubmit = (e) => {
          const form = e.currentTarget;
            e.preventDefault();
            e.stopPropagation();
            if(formData.checkInRooms === "") {
              setIsValid(true);
            }
          else if(formData.checkInRooms !== "") {
            setState(state => ({...state, guestCheckInData: formData}))
            setValidated(true);
            history.push("/checkout");
          }
        };

        const guestCostEstimate = GetGuestCost(formData, props.roomPrice_1, props.roomPrice_2, props.roomPrice_3, props.roomPrice_4);

    return (
        <div>
        <div className='hotelDataDiv'>

            <div className="heroClass">
              <img className="homeHeroImg" src={props.dataHeroImg} alt="hero"/>
              <h3 className="heroSlogan">{props.name}</h3>
              </div>
              <div className="hotelInfoClass">
              <p>{props.address}</p>
              <p>{props.phone}</p>
              <div className="photoOverviewDiv">
                  <img className="hotelDataImg" src={outsidedoor} alt="hallway" />
                  <div className="overviewDiv">
                <h4>Overview</h4> 
                <p>
                At Quinault Motels, you’re our #1 priority. We promise you’ll be satisfied, or we’ll make it right. That’s our commitment to you. Ask us about The Quinault 100% Guarantee. Every room has LG flat screen TVs and top of the line Serta Premium beds! We are ideal for weddings and family reunions, business groups & athletic teams. FREE WiFi Fiber Optic Internet throughout the hotel.We offer daily a complimentary deluxe hot breakfast that includes: freshly brewed coffee, scrambled eggs and sausage, hot waffles, cereals, fresh fruit, and a lot more.

                </p>
                <ul className="hotelDetailsList">
              <li>
                <Icon path={mdiCheck}
                className="checkClass"
                title="room service"
                size={1}
                /> Prices starting at ${props.roomPrice_1}/night</li>
                <li>
                <Icon path={mdiCheck}
                className="checkClass"
                title="room service"
                size={1}
                /> Reserve Online and Pay Later</li>
              </ul>
                <BookingModalButton
              show={() => setCheckoutModalShow(true)}
              />
              
              </div>
              </div>
              </div>
              <h2>Amenaties</h2>
            <ul className="hotelAmenatiesList">
                <li className="listItem" > 
                <Icon path={mdiSwim}
                className={props.iconClass}
                title="pool"
                size={1}
                /> Pool </li>
                <li>
                    <Icon path={mdiSpa}
                    className={props.spaClass}
                    title="spa"
                    size={1}/> Spa</li>
                <li>
                <Icon path={mdiWifi}
                className={props.wifiClass}
                title="free wifi"
                size={1}
                /> Free Wifi</li>
                <li>
                <Icon path={mdiAirFilter}
                className={props.airClass}
                title="air conditioning"
                size={1}
                /> Air Conditioning</li>
                <li>
                <Icon path={mdiHotTub}
                className={props.hotTubClass}
                title="hot tub"
                size={1}
                /> Hot Tub</li>
                <li>
                <Icon path={mdiDogSide}
                className={props.petsClass}
                title="pets"
                size={1}
                /> Pets</li>
                <li>
                <Icon path={mdiWheelchairAccessibility}
                className={props.accessClass}
                title="accessibility"
                size={1}
                /> Accessibility</li>
               <li>
                <Icon path={mdiCar}
                className={props.carClass}
                title="parking"
                size={1}
                /> Parking</li>
                <li>
                <Icon path={mdiBus}
                className={props.busClass}
                title="public transportation"
                size={1}
                /> Public Transportation</li>
                <li>
                <Icon path={mdiSilverwareForkKnife}
                className={props.restClass}
                title="restaurant"
                size={1}
                /> Restaurant</li>
                <li>
                <Icon path={mdiGlassCocktail}
                className={props.barClass}
                title="bar"
                size={1}
                /> Bar</li>
                <li>
                <Icon path={mdiRoomService}
                className={props.roomClass}
                title="room service"
                size={1}
                /> Room Service</li>
                <li>
                <Icon path={mdiCoffee}
                className={props.breakClass}
                title="breakfast buffet"
                size={1}
                /> Breakfast Buffet</li>
            </ul>
        </div>
        <BookingModal
        isInvalid={isValid}
        checkoutModalShow={checkoutModal}
        cancelModal={() => setCheckoutModalShow(false)}
        backdropClicked={() => setCheckoutModalShow(false)}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        // checkRoomsError="checkRoomsError"
        // type="invalid"
        estimatedTotal={'$' + guestCostEstimate || 0}
        guests={formData.checkInGuests}
        roomPrice_1={props.roomPrice_1}
        roomPrice_2={props.roomPrice_2}
        roomPrice_3={props.roomPrice_3}
        roomPrice_4={props.roomPrice_4}
        >{props.bookingModalTitle}</BookingModal>
    </div>
    );
}

export default HotelDataCard;