import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

export function MonthDropdown(props) {
  return (
    <div>
      <Form.Group controlId="exampleForm.SelectCustom">
      <Form.Label>Month</Form.Label>
    <Form.Control as="select" custom 
    defaultValue={props.defaultMonthValue || "January"}
    onChange={props.onChange} 
    name="checkInMonth">
      <option value="January">January</option>
      <option value="February">February</option>
      <option value="March">March</option>
      <option value="April">April</option>
      <option value="May">May</option>
      <option value="June">June</option>
      <option value="July">July</option>
      <option value="August">August</option>
      <option value="September">September</option>
      <option value="October">October</option>
      <option value="November">November</option>
      <option value="December">December</option>
    </Form.Control>
  </Form.Group>
    </div>
    );
}

export function DateDropdown(props) {
  // const [value,setValue]=useState('');
  // const handleSelect=(e)=>{
  //   setValue(e)
  // }
  return (
    <div>
      <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>Check-In Date</Form.Label>
    <Form.Control as="select" custom 
    defaultValue={props.defaultDateValue || "1"}
    onChange={props.onChange}
    name="checkInDate">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Control>
  </Form.Group>
    </div>
  );
}

export function GuestsDropdown(props) {
  // const [value,setValue]=useState('');
  // const handleSelect=(e)=>{
  //   setValue(e)
  // }
  return (
    <div>
      <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>Guests</Form.Label>
    <Form.Control as="select" custom
    defaultValue={props.defaultGuestsValue || "1"}
    onChange={props.onChange}
    name="checkInGuests">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Control>
  </Form.Group>
    </div>
  );
}

export function NightsDropdown(props) {
  // const [value,setValue]=useState('');
  // const handleSelect=(e)=>{
  //   setValue(e)
  // }
  return (
    <div>
      <Form.Group controlId="exampleForm.SelectCustom">
    <Form.Label>Nights</Form.Label>
    <Form.Control as="select" custom 
    defaultValue={props.defaultNightsValue || "1"}
    onChange={props.onChange}
    name="checkInNights">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
    </Form.Control>
  </Form.Group>
    </div>
  );
}

// export const CheckRooms1 = (props) => (
//     <div class="form-check">
//     <input type="checkbox" class="form-check-input" id="checkRoom1King"/>
//     <label class="form-check-label" for="checkRoom1King">1 King Bed</label>
//   </div>

// );

// export const CheckRooms2 = (props) => (
// <div>
//   <div class="form-check">
//   <input type="checkbox" class="form-check-input" id="checkRoom2Queen"/>
//   <label class="form-check-label" for="checkRoom2Queen">2 Queen Beds</label>
// </div>
//   <div class="form-check">
//   <input type="checkbox" class="form-check-input" id="checkRoom2Queen"/>
//   <label class="form-check-label" for="checkRoom2Queen">1 King Bed</label>
// </div>
// </div>
// );

// export const CheckRooms3 = (props) => (

// <div>
//   <div class="form-check">
//   <input type="checkbox" class="form-check-input" id="checkRoom3Queen"/>
//   <label class="form-check-label" for="checkRoom3Queen">2 Queen Beds, 1 Sofa Bed</label>
// </div>
//   <div class="form-check">
//   <input type="checkbox" class="form-check-input" id="checkRoom3QueenKing"/>
//   <label class="form-check-label" for="checkRoom3King">Adjoining Rooms, 2 Queen Beds, 1 King Bed</label>
// </div>
// </div>

// );

export function RoomsDropdown(props) {
  if(props.guests === "2") {
    return (
      <div>
      <Form.Group controlId="validationSelect">
    <Form.Label>Available Rooms</Form.Label>
    <Form.Control as="select" custom onChange={props.onChange}
    required
    // isValid={false}
    defaultValue={props.defaultRoomValue || "Select Your Room"}
    name="checkInRooms"
    isInvalid={props.isInvalid}>
      <option value="">Select Your Room</option>
      <option value="1 King Bed">1 King Bed</option>
       <option value="2 Queen Beds">2 Queen Beds</option>
    </Form.Control>
    <Form.Control.Feedback type="invalid">
        Required
      </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="validationSelect">
    <Form.Check type="checkbox" label="Adjoining Rooms" />
  </Form.Group>
    </div>
    );
  }
  else if(props.guests === "3") {
    return (
      <div>
      <Form.Group controlId="validationSelect">
    <Form.Label>Available Rooms</Form.Label>
    <Form.Control as="select" custom onChange={props.onChange}
    required
    isInvalid={props.isInvalid}
    defaultValue={props.defaultRoomValue || "Select Your Room"}
    name="checkInRooms">
      <option disabled>Select Your Room</option>
       <option value="2 Queen Beds, 1 Sofa Bed">2 Queen Beds, 1 Sofa Bed</option>
       <option value="2 Queen Beds, 1 King Bed">2 Rooms, 2 Queen Beds, 1 King Bed</option>
    </Form.Control>
    <Form.Control.Feedback type="invalid">
        Required
      </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="validationSelect">
    <Form.Check type="checkbox" label="Adjoining Rooms" />
  </Form.Group>
    </div>
    );
  }
  else if(props.guests === "4") {
    return (
      <div>
      <Form.Group controlId="validationSelect">
    <Form.Label>Available Rooms</Form.Label>
    <Form.Control as="select" custom onChange={props.onChange}
    required
    isInvalid={props.isInvalid}
    defaultValue={props.defaultRoomValue || "Select Your Room"}
    name="checkInRooms">
      <option disabled>Select Your Room</option>
      <option value="2 Queen Beds, 1 Sofa Bed">2 Queen Beds</option>
       <option value="4 Queen Beds">2 Rooms, 4 Queen Beds</option>
    </Form.Control>
    <Form.Control.Feedback type="invalid">
        Required
      </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Adjoining Rooms" />
  </Form.Group>
    </div>
    );
  }
  else if(props.guests === "5") {
    return (
      <div>
      <Form.Group controlId="validationSelect">
    <Form.Label>Available Rooms</Form.Label>
    <Form.Control as="select" custom onChange={props.onChange}
    required
    isInvalid={props.isInvalid}
    defaultValue={props.defaultRoomValue || "Select Your Room"}
    name="checkInRooms">
      <option disabled>Select Your Room</option>
       <option value="4 Queen Beds, 1 Sofa Bed">2 Rooms, 4 Queen Beds, 1 Sofa Bed</option>
    </Form.Control>
    <Form.Control.Feedback type="invalid">
        Required
      </Form.Control.Feedback>
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Adjoining Rooms"/>
  </Form.Group>
    </div>
    );
  }
  else {
    return (
      <div>
        <Form.Group controlId="validationSelect">
      <Form.Label>Available Rooms</Form.Label>
      <Form.Control as="select" custom onChange={props.onChange}
      required
      isInvalid={props.isInvalid}
      defaultValue={props.defaultRoomValue || "Select Your Room"}
      name="checkInRooms">
        <option disabled>Select Your Room</option>
        <option value="1 King Bed">1 King Bed</option>
      </Form.Control>
      <Form.Control.Feedback type="invalid">
          Required
        </Form.Control.Feedback>
    </Form.Group>
      </div>
    );
  }
}

export const RoomOptions = (props) => (

  <option value={props.value}>{props.children}</option>

);