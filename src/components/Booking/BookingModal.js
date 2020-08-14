import React from "react";
import {MonthDropdown, DateDropdown, GuestsDropdown, NightsDropdown, RoomsDropdown} from '../HotelData/monthDropDown';
import { Form, Modal } from "react-bootstrap";

export const BookingModal = (props, e) => {
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
      <MonthDropdown onChange={props.handleChange} defaultMonthValue={props.defaultMonthValue}/>
    <DateDropdown onChange={props.handleChange} defaultDateValue={props.defaultDateValue} />
    <GuestsDropdown onChange={props.handleChange} defaultGuestsValue={props.defaultGuestsValue}/>
    <RoomsDropdown onChange={props.handleChange} isInvalid={props.isInvalid} validated={props.validated} guests={props.guests}
    defaultRoomValue={props.defaultRoomValue}></RoomsDropdown>
    <NightsDropdown onChange={props.handleChange} defaultNightsValue={props.defaultNightsValue}/>
    <p>Estimated Total: {props.estimatedTotal}</p>
    </div>

    <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={props.cancelModal}>Cancel</button>
        <button type="button" onClick={props.handleSubmit} className="btn btn-dark">
          Proceed To Checkout
    </button>
      </div>
      </Form>
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