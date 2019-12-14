import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { Image } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'

import './Event.css'
export default class Event extends Component {

    render() {
        
       
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.event.image} />
                <Card.Body>
                    <Card.Title style={{display: "flex" }}>{this.props.event.name}</Card.Title>
                    <Card.Text>
                    {this.props.event.date}
                    </Card.Text>
                    <Card.Text>
                    {this.props.event.location}
                    </Card.Text>
                    <button className="btn btn-primary btn-sm"> See details</button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}
