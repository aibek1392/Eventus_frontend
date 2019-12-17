import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
// import { Button } from 'react-bootstrap'
// import { Image } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'

import './Event.css'
export default class Event extends Component {

    render() {
        
       
        return (
            <div>
                <Card style={{ width: '18rem' }} >
                <Card.Img variant="top" src={this.props.event.image} />
                <Card.Body>
                    <Card.Title style={{display: "flex" }}>{this.props.event.name}</Card.Title>
                    <Card.Text>
                    {this.props.event.date}
                    </Card.Text>
                    <Card.Text>
                        State:
                    {this.props.event.location}
                    </Card.Text>
                    <Card.Text>
                     Address: {this.props.event.description}
                    </Card.Text>
                    <Card.Text> 
                     Start time: {this.props.event.start_time}
                    </Card.Text>
                    <button onClick={()=> this.props.addToFavorites(this.props.event)} className="btn btn-primary btn-sm"> Add to favorites </button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}
