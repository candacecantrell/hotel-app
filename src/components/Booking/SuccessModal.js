import React from "react";
import { Form, Col, Row, Toast, Button, Alert, onExited, Modal } from "react-bootstrap";

export const SuccessModal = (props, e) => {

return (
    <Modal show={props.showModal} onHide={props.handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Thank You For Your Reservation</Modal.Title>
    </Modal.Header>
    <Modal.Body>We look forward to your visit at Quinault Motels. </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={props.handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
    );
}