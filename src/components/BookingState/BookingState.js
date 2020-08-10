import React from 'react'; 


const GlobalState = React.createContext([{}, () => {}]); 


export default GlobalState;






// import React, { createContext, useState } from "react";
// import PropTypes from "prop-types";

// export const Context = createContext({});

// export const Provider = props => {
//   // Initial values are obtained from the props
//   const {
//     booking: initialBooking,
//     selectedBooking: initialSelectedBooking,
//     children
//   } = props;

// //   const initialBooking = Object.freeze({
// //   checkInMonth: "January",
// //   checkInDate: "1",
// //   checkInGuests: "1",
// //   checkInNights: "1",
// // });

//   // Use State to keep the values
//   const [booking, setBooking] = useState(initialBooking);
//   const [selectedBooking, setSelectedBooking] = useState(initialSelectedBooking);

//   const addNewBooking = guestName => {
//     const newUser = { id: new Date().getTime().toString(), name: guestName };
//     setBooking(booking.concat([guestName]));
//   };

//   // Make the context object:
//   const bookingContext = {
//     booking,
//     setBooking,
//     selectedBooking,
//     setSelectedBooking,
//     addNewBooking
//   };

//   // pass the value in provider and return
//   return <Context.Provider value={bookingContext}>{children}</Context.Provider>;
// };

// export const { bookingContext } = Context;
// // export const BookingContext = React.createContext(initialBooking);

// Provider.propTypes = {
//   booking: PropTypes.array,
//   selectedBooking: PropTypes.object
// };

// Provider.defaultProps = {
//   booking: [],
//   selectedBooking: {}
// };