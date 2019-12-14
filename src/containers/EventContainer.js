import React, { Component } from 'react'
import EventList from '../components/EventList'
import axios from 'axios'

export default class EventContainer extends Component {
   
   
    state = {
        events: []
    }


            componentDidMount(){
                axios.get("http://localhost:3001/events")
                  .then(response => {
                      this.setState({
                          events: response.data
                      })
                  })
              }

    render() {

        
        return (
            <div >
            <EventList events={this.state.events} />
               
            </div>
        )
    }
}

