import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import '../Styling/Event.css'
export default class FavoriteEvent extends Component {
    

    

    render() {
        console.log(this.props)
        // debugger
    //    console.log("fromfavorit",this.props.length)
        return (
            <div className="item_card">
                <Card.Body>
                <Card style={{ width: '18rem', heigt: '19px' }}>
                <Card.Img style={{height:"40%"}} variant="top" src={this.props.event.event.image} />
                <center>
                <Card.Text>
                {this.props.event.event.date}
                </Card.Text>
                <Card.Text>
                    State:
                {this.props.event.event.location}
                </Card.Text>
               
                
                <Card.Title > Name:{this.props.event.event.name}</Card.Title>
                <Card.Text>
                 Address: {this.props.event.event.description}
                </Card.Text>
                <Card.Text> 
                 Start time: {this.props.event.event.start_time}
                </Card.Text>
                </center>
                <Button onClick={() => this.props.removeFromFavorite(this.props.event)} 
                variant="contained"
                color="secondary"
                style={{width: "10rem", marginLeft: "20%"}}
                startIcon={<DeleteIcon />}> Delete </Button>
                </Card>
                </Card.Body> 
            </div>
        )
    }
}