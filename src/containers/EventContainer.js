import React, { Component } from 'react'
import EventList from '../components/EventList'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import {Route, Redirect, Switch} from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


export default class EventContainer extends Component {

   
   
    state = {
        events: [],
        showFilteredEvents: "All"
        
    }


    componentDidMount(){
        axios.get("http://localhost:3001/events")
          .then(response => { 
              console.log(response)
              
              this.setState({
                  events: response.data,
               
                })
          })
      }
    //   
    // stateChangeFilter = (event) => {
    //     // console.log(event)
    //     this.setState({
    //       showFilteredEvents: this.state.events.filter(eventik => eventik.location === event)
    //     })
    //   }

    stateChangeFilter = (term) => {
        console.log(term)
       this.setState({
           showFilteredEvents: term
       })
    
        }

        whichEventsToRender = () => {
            if(this.state.showFilteredEvents === "All"){
                return this.state.events
            }else {
                return this.state.events.filter(event => event.category === this.state.showFilteredEvents)
            }

        }

        
        

    render() {
        
        return (
            <div >
               
            {/* <Route exact path={'/map'} render={(props) => <WrappedMap {...props}  
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`}
              loadingElement={<div style={{ height: '100%'}} />}
              containerElement={<div style={{ height: '100%'}} />}
              mapElement={<div style={{height: '100%'}} />} />} /> */}

                {/* <WrappedMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`}
                loadingElement={<div style={{ height: '100%'}} />}
                containerElement={<div style={{ height: '100%'}} />}
                mapElement={<div style={{height: '100%'}} />}
                /> */}
                
                <SearchBar stateChangeFilter={this.stateChangeFilter}
                term={this.state.showFilteredEvents}
               events={this.state.events} />
             
            <EventList 
            addToFavorites={this.props.addToFavorites}
            events={this.whichEventsToRender()} />
                   

            
            </div>
        )
    }
}

