import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import '../Styling/Event.css'

const FavoriteEvent =(props) => {

    return (
            <div className="item_card" onClick={() => props.showDetailsaboutEvent(props.event.event)} >
                <Card.Body>
                    <Card style={{ width: '18rem', heigt: '19px' }}>
                        <Card.Img style={{ height: "40%"}} variant="top" src={props.event.event.image} />
                        <div style={{textAlign: "center"}}>
                            <Card.Text>
                                {props.event.event.date}
                            </Card.Text>
                            <Card.Text>
                                State:{props.event.event.location}
                            </Card.Text>
                            <Card.Title > Name:{props.event.event.name}</Card.Title>
                            <Card.Text>
                                Address: {props.event.event.description}
                            </Card.Text>
                            <Card.Text>
                                Start time: {props.event.event.start_time}
                            </Card.Text>
                        </div>
                                <Button onClick={() => props.removeFromFavorite(props.event)}
                                    variant="contained"
                                    color="secondary"
                                    style={{ width: "10rem", marginLeft: "20%" }}
                                    startIcon={<DeleteIcon />}> Delete 
                                </Button>
                    </Card>
                </Card.Body>
            </div>
        )
}

export default FavoriteEvent
