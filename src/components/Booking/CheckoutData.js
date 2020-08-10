import React, { Component, useState, setState, useContext } from 'react';
import { CheckoutForm } from './CheckoutForm';
import { SuccessModal } from './SuccessModal';
import GlobalState from '../BookingState/BookingState'

export const initialFormData = Object.freeze({
    checkInMonth: "January",
    checkInDate: "1",
    checkInGuests: "1",
    checkInNights: "1",
    guestPrice: 0,
  });

function CheckoutData() {
    const [state, setState] = useContext(GlobalState);
    const checkInData = state.guestCheckInData ? state.guestCheckInData : initialFormData;

          return (
            <div className="reservationDetails">
                <h2>Reservation Details</h2>
                <p>Check In Date: {checkInData.checkInMonth
                 + ', '+ checkInData.checkInDate}</p>
                 <p>Guests: {checkInData.checkInGuests}</p>
                 <p>Nights: {checkInData.checkInNights}</p>
                <CheckoutForm/>
        </div>
        );
  }

export default CheckoutData;