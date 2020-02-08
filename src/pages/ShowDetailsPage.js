import React, { Component } from 'react';
import '../Styling/Showdetail.scss'
import { Button } from 'react-bootstrap'
import '../Styling/Event.css'
import CommentEvent from '../containers/CommentEvent'
import { Redirect } from 'react-router-dom'
import AlertTemplate from "react-alert-template-basic";
import { positions, Provider } from "react-alert";

const options = {
    timeout: 5000,
    position: positions.TOP_RIGHT
};

export class ShowDetailsPage extends Component {

    render() {
        const deleteSymbolfromAddress = this.props.singleEventDetail.description.replace("&", "")
        const { image, name, latitude, category, location, city, date, start_time, longitude, url } = this.props.singleEventDetail
        return (
            <div className="single_card">
                {this.props.singleEventDetail ?
                    <React.Fragment>
                        <Provider template={AlertTemplate} {...options}>
                            <div className="img_div" >
                                <img className="image-card " src={image} />
                                {/* <br/> */}
                                <div className="overFlow" >
                                    <CommentEvent
                                        userID={this.props.loggedInUserId}
                                        singleEvent={this.props.singleEventDetail}
                                        userId={this.props.user}
                                        username={this.props.username}
                                    />
                                </div>
                            </div>
                            <div className="right_div_container">
                                <Button
                                    size="lg" block
                                    variant="primary"
                                    onClick={this.props.goBackToEvents}>Go back to events</Button>
                                <br />
                                <Button size="lg" block
                                    variant="success"
                                    onClick={() => this.props.addToFavorites(this.props.singleEventDetail)}>Add to favorites</Button>
                                <strong>
                                    <div className="text-styling">
                                        <h2>Name:{name}</h2>
                                        <h2>Address: {deleteSymbolfromAddress}, {location}, {city}</h2>
                                        <h2>Start Time:{start_time}</h2>
                                        <h2>Date: {date}</h2>
                                        <h2>Category: {category}</h2>
                                    </div>
                                </strong>
                                <br></br>
                                <br></br>
                                <br></br>
                                <div>
                                    <h4 style={{ color: "white" }}>Get directions:</h4>
                                    <iframe className="map-div"
                                        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&q=${location},${city},${deleteSymbolfromAddress}`} 
                                    />
                                </div>
                            </div>
                        </Provider>
                    </React.Fragment>
                    :
                    <Redirect to='/events' />}
            </div>
        );
    }
}
export default ShowDetailsPage;