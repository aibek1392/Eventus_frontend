import React from 'react';
import { DropdownButton, Dropdown, Form, Col } from 'react-bootstrap'


const SearchBar = (props) => {
    const stateArray = []
    const newStates = props.events.map(eventik => { 
        if(!stateArray.includes(eventik.location)){
            stateArray.push(eventik.location)
            return <option key={eventik.id}>{eventik.location}</option>
        }
      })//sort by alphabet
  return (
    <div>

      
      <br/>
     

      <label>
        
        <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Filter by State</Form.Label> {' '}
        <select  onChange={(event)=> props.stateChangeFilter(event.target.value)}
        value={props.term}>
        <option value="All">All</option>
          {newStates}
        </select>
        </Form.Group>
      </label>


    </div>
  );
}

export default SearchBar;
