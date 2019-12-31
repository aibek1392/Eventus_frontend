import React, { Component } from 'react';
import './Showdetail.scss'
import { Button } from 'react-bootstrap'



export class ShowDetailsPage extends Component {
    // addingThisToCart = (e) => {
    //     this.props.addToCart(e)
    // }
    render() {
        const deleteSymbolfromAddress = this.props.singleEventDetail.description.replace("&", "")
        console.log(this.props.singleEventDetail)
        const { image, name, latitude, location, city, date ,start_time, longitude,description } = this.props.singleEventDetail
        return (
            <div className="single_card">
                <div >
                    <img className="image-card" src={image} />
                </div>
               <div style={{marginTop: "5%"}}>
        <h2 style={{textShadow: "3px 0px white"}}>{name}</h2>
        <h2 style={{textShadow: "3px 1px white"}}>Address: {deleteSymbolfromAddress}, {location}, {city}</h2>
        <h2 style={{textShadow: "3px 0px white"}}>Start Time:{start_time}</h2>
        <h2 style={{textShadow: "3px 0px white"}}>Date: {date}</h2>
        </div>


                <div style={{marginTop: "40px"}} >
                    <iframe className="map-div" 
                        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&q=${location},${city},${deleteSymbolfromAddress}`} />
                </div>
            </div>

        );
    }
}
export default ShowDetailsPage;