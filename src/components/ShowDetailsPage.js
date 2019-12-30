import React, { Component } from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import axios from 'axios'
// import Fab from '@material-ui/core/Fab';
export default class ShowDetailsPage extends Component {

    // state = {
    //     events: [],
    //     showFilteredEvents: "All"
        
    // }


    componentDidMount(){
        axios.get("http://localhost:3001/events")
          .then(response => { 
              console.log(response)
              this.setState({
                  events: response.data,
               
                })
          })
      }


    render() {
        return (
            <div>
                <h1>SHOWDETAILS</h1>
                  {/* <div className="container mx-auto" style={{ width: '40%', marginRight: "350px" }} >
            <div className="event_card"  >
                {/* <Card.Img variant="top" src={this.props.event.image} /> */}
              {/* <img src={this.props.event.image} style={{width: "90%", height: "350px"}} /> */}
              {/* <h3 className="title">Card 1</h3> */}
              {/* <div className="bar"> */}
                {/* <div className="emptybar"></div>
                <div className="filledbar"></div> */}
              {/* </div> */}
              {/* <div className="circle"> */}
                {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg"> */}
                {/* <circle className="stroke" cx="60" cy="60" r="50"/> */}
              {/* </svg> */}
              {/* </div> */}
              {/* <Fab onClick={()=> this.props.addToFavorites(this.props.event)} aria-label="add" color="secondary"> <AddIcon /></Fab> */}

            </div>
        // </div> */}


            // </div>
        )
    }
}
