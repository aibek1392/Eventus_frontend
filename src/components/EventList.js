import React, { Component } from 'react'
import Event from './Event'
import "./Event.css"
import { DropdownButton, Dropdown, Form, Col } from 'react-bootstrap'
// import { Dropdown } from 'react-bootstrap'


export default class EventList extends Component {
    render() {
        const events = this.props.events.map(event => {  
            return <Event addToFavorites={this.props.addToFavorites}  key={event.id} event={event} />
        })
        

        return (
            <React.Fragment>
               
            <div className="item_list">
                {events}
            </div>
            </React.Fragment>
        )
    }
}
