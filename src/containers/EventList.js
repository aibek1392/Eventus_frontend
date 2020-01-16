import React, { Component } from 'react'
import Event from '../pages/Event'


export default class EventList extends Component {

    state = {
        searchTerm: ''
    }


    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }



    render() {

        
        const searchedEvent = this.props.events.filter(searchedEvent =>  searchedEvent.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

        const eventList = searchedEvent.map(event => {  
            return <Event 
                  showDetailsaboutEvent={this.props.showDetailsaboutEvent}   
                  addToFavorites={this.props.addToFavorites} 
                  key={event.id} 
                  event={event} />
        })
        

        return (
            <div>
                 <label style={{marginLeft: "8.5%", color: "white"}}>
                        <input 
                        value={this.state.searchTerm} 
                        placeholder="...search by name"
                        onChange={this.handleChange}  type="search"/>
                </label>
                
              
            <div className="container">
                <div className="row">
                {eventList}
                </div>
            </div>
            </div>
        )
    }
}
