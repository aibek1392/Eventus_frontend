import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

// import { Button } from 'react-bootstrap'
// import { Image } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'

// import './Event.css'
export default class FavoriteEvent extends Component {
    

    

    render() {
       
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.event.event.image} />
                <Card.Body>
                    <Card.Title style={{display: "flex" }}>{this.props.event.event.name}</Card.Title>
                    <Card.Text>
                    {this.props.event.event.date}
                    </Card.Text>
                    <Card.Text>
                        State:
                    {this.props.event.event.location}
                    </Card.Text>
                    <Card.Text>
                     Address: {this.props.event.event.description}
                    </Card.Text>
                    <Card.Text> 
                     Start time: {this.props.event.event.start_time}
                    </Card.Text>
                    <Button onClick={() => this.props.removeIt(this.props.event)} 
                    variant="contained"
                    color="secondary"
                    startIcon={<DeleteIcon />}> Remove </Button>
                </Card.Body>
                </Card>
            </div>
        )
    }
}
