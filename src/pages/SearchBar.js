import React from 'react';
import {  Form, Col } from 'react-bootstrap'


const SearchBar = (props) => {
  const stateArray = []
  const newStates = props.events.map(eventik => {
    if (!stateArray.includes(eventik.category)) {
      stateArray.push(eventik.category)
      return <option key={eventik.id}>{eventik.category}</option>
    }
  })

  return (
    <div>
      <br />
      <label>
        <Form.Group as={Col} controlId="formGridState">
          <Form.Label style={{ color: "white" }}>Filter by category</Form.Label> {' '}
            <select onChange={(event) => props.stateChangeFilter(event.target.value)}
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
