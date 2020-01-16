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
                        <div className="img_div" >
                            <img className="image-card " src={image} />
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
                            <Button style={{marginBottom: "20px",width: "30%"}}
                             variant="warning"
                              onClick={this.props.goBackToEvents}>GO back to events</Button>
                            <strong>
                                <div style={{backgroundColor: "black"}}>
                                    <h2 style={{ color: "white" }}>Name:{name}</h2>
                                    <h2 style={{ color: "white" }}>Address: {deleteSymbolfromAddress}, {location}, {city}</h2>
                                    <h2 style={{ color: "white" }}>Start Time:{start_time}</h2>
                                    <h2 style={{ color: "white" }}>Date: {date}</h2>
                                    <h2 style={{ color: "white" }}>Category: {category}</h2>

                                </div>
                            </strong>

                            <br></br>
                            <br></br>
                            <br></br>


                            <div  >
                                <h4 style={{ color: "white" }}>Get directions:</h4>
                                <iframe className="map-div"
                                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&q=${location},${city},${deleteSymbolfromAddress}`} />
                            </div>
                        </div>
                    </Provider>
                </React.Fragment>
            </div>
        );
    }
}
export default ShowDetailsPage;