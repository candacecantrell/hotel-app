import React, { Component, useState, setState, useContext } from 'react';
import { CheckoutForm } from './CheckoutForm';
import {BookingModal} from './BookingModal';
import { SuccessModal } from './SuccessModal';
import GlobalState from '../BookingState/BookingState';

export const initialFormData = Object.freeze({
    checkInMonth: "January",
    checkInDate: "1",
    checkInGuests: "1",
    checkInNights: "1",
    guestPrice: 0,
    checkInRooms: "1 King Bed",
  });

function CheckoutData(props) {
    const [state, setState] = useContext(GlobalState);
    const [checkoutModal, setCheckoutModalShow] = useState(false);
    const [ formData, updateFormData] = React.useState(initialFormData);
    const [isValid, setIsValid] = useState(false);
    const [validated, setValidated] = useState(false);

    // const guestChange = (e) => {
    //   setState(state => ({...state, guestsNum: formData.checkInGuests}))
    // };

    const handleChange = (e) => {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
      });
      // if(formData.checkInGuests !== state.guestCheckInData.checkInGuests) {
      //   setIsValid(false);
      // }
      // setIsValid(true);
      setState(state => ({...state, guestCheckInData: formData}));
      //const changeGuestsVal = state.guestCheckInData.checkInGuests;
      // console.log(formData);
      // if (formData.checkInRooms !== '') {
      //   setIsValid(false);
      // }
    };

    const handleSubmit = (e) => {
      const form = e.currentTarget;
      e.preventDefault();
        e.stopPropagation();
        // updateFormData({
        //   ...formData,
        //   [e.target.name]: e.target.value.trim()
        // });
        //console.log(formData.)
        if(formData.checkInGuests !== state.guestCheckInData.checkInGuests) {
          setIsValid(true);
        }
        else {
      setState(state => ({...state, guestCheckInData: formData}))
      setIsValid(false);
      setValidated(true);
      setCheckoutModalShow(false);
      }
      //checkInData = state.guestCheckInData ? state.guestCheckInData : initialFormData;
      //   e.preventDefault();
      //   e.stopPropagation();
      //   if(formData.checkInRooms === "") {
      //     setIsValid(true);
      //   }
      // else if(formData.checkInRooms !== "") {
      //   setState(state => ({...state, guestCheckInData: formData}))
      //   setValidated(true);
      //   history.push("/checkout");
      // }
    };
    const checkInData = state.guestCheckInData ? state.guestCheckInData : initialFormData;

          return (
            <div className="reservationDetails">
                <h2>Reservation Details</h2>
                <p>Check In Date: {checkInData.checkInMonth
                 + ', '+ checkInData.checkInDate}</p>
                 <p>Guests: {checkInData.checkInGuests}</p>
                 <p>Nights: {checkInData.checkInNights}</p>
                 <p>Beds: {checkInData.checkInRooms}</p>
                 <button onClick={() => setCheckoutModalShow(true)} >Edit</button>
                <CheckoutForm/>
                <BookingModal
        isInvalid={isValid}
        checkoutModalShow={checkoutModal}
        //defaultRoomValue={checkInData.checkInRooms}
        defaultGuestsValue={checkInData.checkInGuests}
        defaultMonthValue={checkInData.checkInMonth}
        defaultDateValue={checkInData.checkInDate}
        defaultNightsValue={checkInData.checkInNights}
        //guestChange={guestChange}
        // cancelModal={() => setCheckoutModalShow(false)}
        // backdropClicked={() => setCheckoutModalShow(false)}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        // estimatedTotal={'$' + guestCostEstimate || 0}
        guests={formData.checkInGuests}
        roomPrice_1={props.roomPrice_1}
        roomPrice_2={props.roomPrice_2}
        roomPrice_3={props.roomPrice_3}
        roomPrice_4={props.roomPrice_4}
        >{props.bookingModalTitle}</BookingModal>
        </div>
        );
  }

export default CheckoutData;