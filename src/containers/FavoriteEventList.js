import React, { Component } from 'react'
import FavoriteEvent from '../components/FavoriteEvent'
// import "./Event.css"
// import { DropdownButton, Dropdown, Form, Col } from 'react-bootstrap'
// import { Dropdown } from 'react-bootstrap'


export default class FavoriteEventList extends Component {

    
    render() {
        // console.log(this.props.favoriteEvents)
        const favoriteEvents = this.props.favoriteEvents.map((event, index) => {  
            return <FavoriteEvent user={this.props.user} 
            setFavoriteEvents={this.props.setFavoriteEvents} 
            addToFavorites={this.props.addToFavorites} 
             key={index} event={event} 
             removeIt={this.props.removeIt}/>
        })
        

        return (
            <React.Fragment>
            <div className="item_list">
                {favoriteEvents}
            </div>
            </React.Fragment>
        )
    }
}
