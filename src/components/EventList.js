import React, { Component } from 'react'
import Event from './Event'
import "./Event.css"
import { DropdownButton } from 'react-bootstrap'
import { Dropdown } from 'react-bootstrap'


export default class EventList extends Component {
    render() {
        
            const events = this.props.events.map(event => {  console.log(event)
                return <Event  key={event.id} event={event} />
            })

        return (
            <>
            	<DropdownButton className="item_list" id="dropdown-item-button" title="Filter by location">
                    <Dropdown.Item as="button">New York</Dropdown.Item>
                    <Dropdown.Item as="button">New Jersey</Dropdown.Item>
                    <Dropdown.Item as="button">Washington</Dropdown.Item>
                    <Dropdown.Item as="button">Florida</Dropdown.Item>
                    <Dropdown.Item as="button">Pennsylvania</Dropdown.Item>
                    <Dropdown.Item as="button">Wisconsin</Dropdown.Item>
                    <Dropdown.Item as="button">Missouri</Dropdown.Item>
                    <Dropdown.Item as="button">Ohio</Dropdown.Item>
                    <Dropdown.Item as="button">California</Dropdown.Item>

                 </DropdownButton>
            <div className="item_list">
                {events}
            </div>
            </>
        )
    }
}
