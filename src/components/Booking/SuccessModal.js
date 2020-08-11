import React from "react";
import { Form, Col, Row, Toast, Button, Alert, onExited, Modal, OverlayTrigger, Popover } from "react-bootstrap";

export const SuccessModal = (props, e) => {

return (
    <Modal show={props.showModal} onHide={props.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Thank You For Your Reservation</Modal.Title>
    </Modal.Header>
    <Modal.Body>We look forward to your visit at Quinault Motels. </Modal.Body>
    <Modal.Footer>
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
    <Button variant="danger">Message</Button>
  </OverlayTrigger>
      <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
    ); 
}

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Please Note</Popover.Title>
    <Popover.Content>
      While we are thrilled you found out site, Quinault Motels is not currently taking bookings.
      No reservations have been made at this time. 
    </Popover.Content>
  </Popover>
);