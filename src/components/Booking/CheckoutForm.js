import React, {useState} from "react";
import { Form, Col, Row, Toast, Button, Alert, onExited, Modal } from "react-bootstrap";
import {SuccessModal} from './SuccessModal';
import { useHistory } from "react-router-dom";

export function CheckoutForm (props) {
    const [validated, setValidated] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const history = useHistory();

    const handleClose = (event) => {
      setShowSuccess(false);
      history.push("/");
    }

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      console.log(form.checkValidity());
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      else { 
        setValidated(true);
        if(validated === true) {
          setShowSuccess(true)
        }
      }
      };
    
return (
  <div className="checkoutForm">
                    <SuccessModal
                showModal={showSuccess}
                handleClose={handleClose}
                />

      <Form validated={validated}>
  <Form.Row>
    <Form.Group as={Col} md="6"
    controlId="validationCustom01">
      <Form.Label>Full Name</Form.Label>
      <Form.Control
      type="text" 
      name="fullName"
      // onChange={handleChange}
      placeholder="Full Name"
      required
      // isInvalid={errors}
      />
      <Form.Control.Feedback type="invalid">
        Please provide your full name.
      </Form.Control.Feedback>
      </Form.Group>
    <Form.Group as={Col} md="6"
    controlId="validationCustom02">
      <Form.Label>Email</Form.Label>
      <Form.Control
      name="email"
      // onChange={handleChange}
      // value={formData.email}
      type="email"
      required
      placeholder="email@email.com"
      // isInvalid={errors}
      />
      <Form.Control.Feedback type="invalid">
        Please provide a valid email.
      </Form.Control.Feedback>
    </Form.Group>
  </Form.Row>
  <Form.Group
  controlId="validationCustom03"
  >
    <Form.Label>Address</Form.Label>
    <Form.Control 
    type="text"
    name="address"
    // onChange={handleChange}
    // value={formData.address}
    // isInvalid={errors}
    placeholder="1234 Main St" 
    required/>
  </Form.Group>
  <Form.Group>
    <Form.Label>Address 2</Form.Label>
    <Form.Control 
    type="text"
    placeholder="Apartment, studio, or floor"/>
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col} md="6"
    controlId="validationCustom04">
      <Form.Label>City</Form.Label>
      <Form.Control
      name="city"
      // onChange={handleChange}
      placeholder="city"
      // value={formData.city}
      // isInvalid={errors}
      type="text" 
      required/>
      <Form.Control.Feedback type="invalid">
        Please provide a valid city.
      </Form.Control.Feedback>
    </Form.Group>
    <Form.Group as={Col} md="2"
    controlId="validationCustom05">
      <Form.Label>State</Form.Label>
          <Form.Control
          name="state"
          placeholder="State"
          // onChange={handleChange}
          // value={formData.state}
          // isInvalid={errors}
          type="text" 
          placeholder="State" 
          required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
      </Form.Group>
      <Form.Group as={Col} md="4" controlId="validationCustom06">
          <Form.Label>Zip</Form.Label>
          <Form.Control 
          type="text" 
          placeholder="Zip Code" 
          name="zipCode"
          // onChange={handleChange}
          // value={formData.zipCode}
          // isInvalid={errors}
          required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Form.Row>
      <Button variant="dark" type="button" onClick={handleSubmit}>
    Submit Reservation
  </Button>
      </Form>
    </div>
    );
}
