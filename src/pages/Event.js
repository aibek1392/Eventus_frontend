import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import '../Styling/Styling.scss'

export default class Event extends Component {
    render() {
        const event = this.props.event
        return (
            <div className="container" style={{ width: '45%', marginRight: "35px" }}   >
                <div className="event_card" >
                    <div onClick={() => this.props.showDetailsaboutEvent(this.props.event)} className="image-divcard">
                        <Link to='/showdetails'>
                            <img src={this.props.event.image} style={{ width: "86%", height: "80%", marginLeft: "10%" }} />
                        </Link>
                    </div>
                    <div><Fab onClick={() => this.props.addToFavorites(this.props.event)} aria-label="add" color="secondary" style={{ marginTop: "55%" }}> <AddIcon /></Fab></div>
                    <div className="title">
                        <h3>{event.name}</h3>
                        <h3>Date: {" "} {event.date}</h3>
                        <h3>Start time:{" "}  {event.start_time}</h3>
                    </div>
                </div>
            </div>
        )
    }
}
