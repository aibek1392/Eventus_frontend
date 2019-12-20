import React, { Component } from 'react'
import Event from './Event'
import "./Event.css"
import { DropdownButton, Dropdown, Form, Col } from 'react-bootstrap'
// import { Dropdown } from 'react-bootstrap'


export default class EventList extends Component {

    state = {
        searchTerm: ''
    }


    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }



    render() {

        const searchedEvent = this.props.events.filter(searchedEvent =>  searchedEvent.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

        const events = searchedEvent.map(event => {  
            return <Event 
                  addToFavorites={this.props.addToFavorites} 
                  key={event.id} 
                  event={event} />
        })
        

        return (
            <React.Fragment>
                 <label>
                        Search: <input  value={this.state.searchTerm} onChange={this.handleChange}  type="search"/>
                </label>
            <div className="item_list">
                {events}
            </div>
            </React.Fragment>
        )
    }
}
