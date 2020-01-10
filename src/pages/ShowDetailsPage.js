import React, { Component } from 'react';
import '../Styling/Showdetail.scss'
import { FormControl, InputGroup, Button } from 'react-bootstrap'
import ReactModal from 'react-modal';
import '../Styling/Event.css'
import CommentEvent from '../containers/CommentEvent'
// import { Link } from '@material-ui/core';
import { Route, NavLink } from 'react-router-dom'
import AlertTemplate from "react-alert-template-basic";
import { positions, Provider } from "react-alert";
// import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
// import {VictoryChart, VictoryArea, VictoryTheme, VictoryLabel, VictoryLine} from 'victory';

const options = {
    timeout: 5000,
    position: positions.TOP_RIGHT
};


export class ShowDetailsPage extends Component {










    render() {

        console.log("hellp from single", this.props.singleEvent)
        const deleteSymbolfromAddress = this.props.singleEventDetail.description.replace("&", "")
        console.log(this.props)
        const { image, name, latitude, category, location, city, date, start_time, longitude, description } = this.props.singleEventDetail
        return (
            <div className="single_card">
                <React.Fragment>
                    <Provider template={AlertTemplate} {...options}>
                        <div >
                            <img className="image-card mb-4" src={image} />
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
                                <div>
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
                                <h4>Get directions:</h4>
                                <iframe className="map-div"
                                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&q=${location},${city},${deleteSymbolfromAddress}`} />
                            </div>
                            <Button variant="danger" onClick={this.props.goBackToEvents}>GO back to events</Button>
                        </div>
                    </Provider>
                </React.Fragment>
            </div>
        );
    }
}
export default ShowDetailsPage;