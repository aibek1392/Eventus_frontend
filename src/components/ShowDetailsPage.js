import React, { Component } from 'react';
import './Showdetail.scss'
import { FormControl, InputGroup } from 'react-bootstrap'
import ReactModal from 'react-modal';
import './Event.css'
import Comment from './Comment'

// import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
// import {VictoryChart, VictoryArea, VictoryTheme, VictoryLabel, VictoryLine} from 'victory';




export class ShowDetailsPage extends Component {








    render() {


        const deleteSymbolfromAddress = this.props.singleEventDetail.description.replace("&", "")
        console.log(this.props)
        const { image, name, latitude, category, location, city, date, start_time, longitude, description } = this.props.singleEventDetail
        return (
            <div className="single_card">
                <div >
                    <img  className="image-card mb-4" src={image} />
                   {/* <br/> */}
                <div className="overFlow " > 
                <Comment 
                // style={{overflow: "visible"}}
                singleEvent={this.props.singleEventDetail} 
                userId={this.props.user} 
                username={this.props.username}
                />
                </div>
               
                   
                </div>
                
                
            <div className="right_div_container">
                <div style={{}}>
                    <h2 style={{ textShadow: "3px 1px white" }}>Name:{name}</h2>
                    <h2 style={{ textShadow: "3px 1px white" }}>Address: {deleteSymbolfromAddress}, {location}, {city}</h2>
                    <h2 style={{ textShadow: "3px 1px white" }}>Start Time:{start_time}</h2>
                    <h2 style={{ textShadow: "3px 1px white" }}>Date: {date}</h2>
                    <h2 style={{ textShadow: "3px 1px white" }}>Category: {category}</h2>

                </div>


                <div style={{}} >
                    <iframe className="map-div"
                        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&q=${location},${city},${deleteSymbolfromAddress}`} />
                </div>
                </div>


            </div>
        );
    }
}
export default ShowDetailsPage;