import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

// import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
// import '../Header.css'
import './Styling.scss'
// import { Button } from 'react-bootstrap'
// import { Image } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'

// import './Event.css'
export default class Event extends Component {


    // showDetail = () => {
    //     this.props.history.push('/showdetails')
    // }

    render() {
        // console.log(this.props.event.latitude)

        return (

            <div className="container" style={{ width: '45%', marginRight: "35px" }}   >


                <div className="event_card" >
                    {/* <Card.Img variant="top" src={this.props.event.image} /> */}
                        <div onClick={() => this.props.showDetailsaboutEvent(this.props.event)}     className="image-divcard"> 
                    <Link to='/showdetails'> 
                            <img src={this.props.event.image} style={{ width: "76%", height: "70%", marginLeft: "-0px" }} />
                    </Link>
                        </div>

                    {/* <Card.Title style={{marginTop: "10px"}}><center>{this.props.event.name}</center></Card.Title> */}
                    <div className="title">
                        <h3>{this.props.event.name}</h3>
                        <h3>{this.props.event.date}</h3>
                        <h3>{this.props.event.start_time}</h3>


                    </div>
                    <Fab onClick={() => this.props.addToFavorites(this.props.event)} aria-label="add" color="secondary" style={{ marginTop: "55%" }}> <AddIcon /></Fab>
                    {/* <div className="bar"> */}
                    {/* <div className="emptybar"></div>
                <div className="filledbar"></div> */}
                    {/* </div> */}
                    {/* <div className="circle"> */}
                    {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg"> */}
                    {/* <circle className="stroke" cx="60" cy="60" r="50"/> */}
                    {/* </svg> */}
                    {/* </div> */}
                    {/* <Link to='/showdetails'>
                        <Button onClick={() => this.props.showDetailsaboutEvent(this.props.event)} variant="primary">see details</Button></Link> */}
                </div>
                {/* <div><Link   to='/showdetails'>
                    <button>Show details</button>
              </Link></div> */}


            </div>



            // // <div classNameNameName="m-2">
            // //     <Card  className="container mx-auto" style={{ width: '20rem' }} >
            // //         <Card.Img variant="top" src={this.props.event.image} />
            // //         <Card.Body>
            // //             <Card.Title style={{ display: "flex" }}>{this.props.event.name}</Card.Title>
            // //             <Card.Text>
            // //                 {this.props.event.date}
            // //             </Card.Text>
            // //             <Card.Text>
            // //                 State:
            // //         {this.props.event.location}
            // //             </Card.Text>
            // //             <Card.Text>
            // //                 Address: {this.props.event.description}
            // //             </Card.Text>
            // //             <Card.Text>
            // //                 Start time: {this.props.event.start_time}
            // //             </Card.Text>
            // //             {/* <iframe width="300" height="170" frameborder="0" marginheight="0" marginwidth="0" 
            // //         src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&q=${this.props.event.latitude},${this.props.event.longitude}`} /> */}

            // {/* //             <Fab onClick={() => this.props.addToFavorites(this.props.event)} aria-label="add" color="secondary"> <AddIcon /></Fab>

            // //         </Card.Body>
            // //     </Card> */}
            // // {/* // </div> */} */}

        )
    }
}
