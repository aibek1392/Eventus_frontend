import React, { Component } from 'react'
import FavoriteEvent from '../components/FavoriteEvent'
// import "./Event.css"
// import { DropdownButton, Dropdown, Form, Col } from 'react-bootstrap'
// import { Dropdown } from 'react-bootstrap'


export default class FavoriteEventList extends Component {

    componentDidMount(){
        // console.log("hello")
        fetch("http://localhost:3001/favorite_events")
        .then(r => r.json())
        .then(res => {
    
          const arr = res.filter(event =>  { 
           return event.user.id  === parseInt(this.props.user)
          })
       
          this.props.setFavoriteEvents(arr)
          
        })
      }

    

    
    render() {
        // console.log(this.props.user/)
        const favoriteEvents = this.props.favoriteEvents.map((event, index) => {  
            return <FavoriteEvent user={this.props.user} 
            setFavoriteEvents={this.props.setFavoriteEvents} 
            addToFavorites={this.props.addToFavorites} 
             key={index} event={event} 
             removeIt={this.props.removeIt}/>
        })
        

        return (
            <React.Fragment>
            <div className="item_list">
                {favoriteEvents}
            </div>
            </React.Fragment>
        )
    }
}
