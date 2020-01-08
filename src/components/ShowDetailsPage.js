import React, { Component } from 'react';
import './Showdetail.scss'
import { FormControl, InputGroup, Button} from 'react-bootstrap'
import ReactModal from 'react-modal';
import './Event.css'
import CommentEvent from './CommentEvent'
// import { Link } from '@material-ui/core';
import { Route, NavLink} from 'react-router-dom'
// import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
// import {VictoryChart, VictoryArea, VictoryTheme, VictoryLabel, VictoryLine} from 'victory';




export class ShowDetailsPage extends Component {


   







    render() {
            
        console.log("hellp from single",this.props.singleEvent)
        const deleteSymbolfromAddress = this.props.singleEventDetail.description.replace("&", "")
        console.log(this.props)
        const { image, name, latitude, category, location, city, date, start_time, longitude, description } = this.props.singleEventDetail
        return (
            <div className="single_card">
            <button></button>
                <div >
                    <img  className="image-card mb-4" src={image} />
                   {/* <br/> */}
                <div className="overFlow" > 
                <CommentEvent 
                // style={{overflow: "visible"}}
                userID={this.props.loggedInUserId}
                singleEvent={this.props.singleEventDetail} 
                userId={this.props.user} 
                username={this.props.username}
                />
                </div>
               
                   
                </div>
                
                
            <div className="right_div_container">
                <strong>
                <div style={{marginLeft: "10%"}}>
                    <h2 >Name:{name}</h2>
                    <h2 style={{ textShadow: "3px 1px white" }}>Address: {deleteSymbolfromAddress}, {location}, {city}</h2>
                    <h2 style={{ textShadow: "3px 1px white" }}>Start Time:{start_time}</h2>
                    <h2 style={{ textShadow: "3px 1px white" }}>Date: {date}</h2>
                    <h2 style={{ textShadow: "3px 1px white" }}>Category: {category}</h2>

                </div>
                </strong>

                <br></br>
                <br></br>
                <br></br>
              

                <div  >
                    <h4>Get direction:</h4>
                    <iframe className="map-div"
                        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&q=${location},${city},${deleteSymbolfromAddress}`} />
                </div>
           <NavLink to='/events'> <Button variant="danger" >GO back to events</Button> </NavLink>
                </div>

            </div>
        );
    }
}
export default ShowDetailsPage;