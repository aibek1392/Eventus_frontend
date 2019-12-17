import React from 'react';
import { DropdownButton, Dropdown, Form, Col } from 'react-bootstrap'


const SearchBar = (props) => {
  return (
    <div>

      
      <br/>
      <label>
        Search: <input  type="search"/>
    </label>

      <label>
        
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
        <select  onChange={(event)=> props.stateChangeFilter(event.target.value)}
        value={props.term}>
        <option value="All">All</option>
          {props.events.map(eventik => { 
              return <option key={eventik.id}>{eventik.location}</option>
            })}
        </select>
        </Form.Group>
      </label>


    </div>
  );
}

export default SearchBar;
