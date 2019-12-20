import React, { Component } from 'react'
import EventList from '../components/EventList'
import axios from 'axios'
import SearchBar from '../components/SearchBar'




export default class EventContainer extends Component {

   
   
    state = {
        events: [],
        showFilteredEvents: "All"
        
    }


    componentDidMount(){
        axios.get("http://localhost:3001/events")
          .then(response => { 
          
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
                return this.state.events.filter(event => event.location === this.state.showFilteredEvents)
            }

        }

        
        

    render() {
        
        return (
            <div >
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

