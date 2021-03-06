import React, { Component } from 'react'
import FavoriteEvent from '../pages/FavoriteEvent'
import "../Styling/Event.css"

export default class FavoriteEventList extends Component {

    componentDidMount(){
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
        const favoriteEvents = this.props.favoriteEvents.map((event, index) => {  
            return <FavoriteEvent user={this.props.user} 
            showDetailsaboutEvent={this.props.showDetailsaboutEvent}
            setFavoriteEvents={this.props.setFavoriteEvents} 
            addToFavorites={this.props.addToFavorites} 
            key={index} event={event} 
            removeFromFavorite={this.props.removeFromFavorite}/>
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
