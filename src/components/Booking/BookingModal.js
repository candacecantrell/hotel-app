import React, { useState } from "react";
import {MonthDropdown, DateDropdown, GuestsDropdown, NightsDropdown, RoomsDropdown} from '../HotelData/monthDropDown';
import { NavLink } from "react-router-dom";
import { Form, Col, Row, Toast, Button, Alert, onExited, Modal } from "react-bootstrap";

export const BookingModal = (props, e) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    // else { 
    //   console.log(form.checkValidity());
    //   setValidated(true);
    // }
    };
return (
<Modal show={props.checkoutModalShow} animation={true} keyboard="true"
onHide={props.backdropClicked}>
    <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{props.children}</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.cancelModal}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <Form validated={props.validated}>
      <div className="bookingModalClass">
      <MonthDropdown onChange={props.handleChange}/>
    <DateDropdown onChange={props.handleChange}/>
    <GuestsDropdown onChange={props.handleChange}/>
    <RoomsDropdown onChange={props.handleChange} isInvalid={props.isInvalid} validated={props.validated} guests={props.guests}></RoomsDropdown>
    <NightsDropdown onChange={props.handleChange}/>
    <p>Estimated Total: {props.estimatedTotal}</p>
    </div>

    <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={props.cancelModal}>Cancel</button>
        <button type="button" onClick={props.handleSubmit} className="btn btn-dark">
          Proceed To Checkout
          {/* <NavLink
    to='/checkout'
    activeClassName="active" >Proceed to Checkout</NavLink> */}
    </button>
      </div>
      </Form>
    {/* </div>
    </div> */}
    </Modal>
    );
}

    export const BookingModalButton = (props) => (
        <div className="bookingModalButton">
<button onClick={props.show} type="button" className="btn btn-dark" data-toggle="modal">
  Book Now
</button>
</div>
);

// export const bookingModalContent = (props) => (
//       <div className="modal-body"> 
//     <MonthDropdown onChange={props.handleChange}/>
//     <DateDropdown onChange={props.handleChange}/>
//     <GuestsDropdown onChange={props.handleChange}/>
//     <NightsDropdown onChange={props.handleChange}/>
//     <p>Estimated Total: {props.estimatedTotal}</p>
//     </div>
// );

          