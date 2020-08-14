import React, { useState, useContext } from 'react';
import { CheckoutForm } from './CheckoutForm';
import {BookingModal} from './BookingModal';
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

    const handleChange = (e) => {
      updateFormData({
        ...formData,
        [e.target.name]: e.target.value.trim()
      });
      setState(state => ({...state, guestCheckInData: formData}));
    };

    const handleSubmit = (e) => {
      const form = e.currentTarget;
      e.preventDefault();
        e.stopPropagation();
        if(state.guestCheckInData && formData.checkInGuests !== state.guestCheckInData.checkInGuests) {
          setIsValid(true);
        }
        else {
      setState(state => ({...state, guestCheckInData: formData}))
      setIsValid(false);
      setValidated(true);
      setCheckoutModalShow(false);
      }
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
                 <button type="button" className="btn btn-outline-info btn-sm" onClick={() => setCheckoutModalShow(true)} >Edit Booking</button>
                <CheckoutForm/>
                <BookingModal
        isInvalid={isValid}
        checkoutModalShow={checkoutModal}
        defaultGuestsValue={checkInData.checkInGuests}
        defaultMonthValue={checkInData.checkInMonth}
        defaultDateValue={checkInData.checkInDate}
        defaultNightsValue={checkInData.checkInNights}
        cancelModal={() => setCheckoutModalShow(false)}
        backdropClicked={() => setCheckoutModalShow(false)}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
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