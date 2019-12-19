import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import FourOhFour from './FourOhFour'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import SignupForm from './components/SignupForm'
import EventContainer from './containers/EventContainer'
import Profile from './containers/Profile'
import EventCreateForm from './components/EventCreateForm';
import axios from 'axios'
import FavoriteEventList from './containers/FavoriteEventList'



export default class App extends React.Component {

 
  state = {
    token: localStorage.token,
    loggedInUserId: localStorage.userId,
	  username: null,
    display: 'Login',
    favoriteEvents: []
  }

 

  setToken = ({ token, user_id, username })  =>{

    localStorage.token = token
    localStorage.userId = user_id
	  localStorage.username = username

    this.setState({
      token: token,
      loggedInUserId: user_id
    })
  }

  


  logOut = () => {
    localStorage.clear()
    this.setState({
      loggedInUserId: null,
      token: null,
      favoriteEvents: []
    })
  }

  addToFavorites = (event) => {
    const match = this.state.favoriteEvents.find(joiner => joiner.event.id === event.id)
    if(!match){
    fetch("http://localhost:3001/favorite_events", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          user_id: this.state.loggedInUserId,
          event_id: event.id
        })
        })
        .then(r=> r.json())
        .then(r_json => { console.log(r_json)
            this.setState({
              favoriteEvents: [...this.state.favoriteEvents, r_json]
            })
        }
    )
  } else {
     alert( "You already have this event")
  }
  }


 


  setFavoriteEvents = (arr) => {
    this.setState({
      favoriteEvents: arr
    })
  }
 

  removeIt = (favorite) => {
    console.log(favorite.id)
    fetch(`http://localhost:3001/favorite_events/${favorite.id}`, {
      method: "DELETE"
    })
    .then(
      this.setState({
        favoriteEvents: this.state.favoriteEvents.filter(event => event.id !== favorite.id)
      })
    )
  }

  addEvent = (newEvent) => {
    fetch(`http://localhost:3001/events`, {
      method: "POST",
      headers: {
        "Content-type":"application/json"
      },
      body: JSON.stringify({
        ...newEvent,
        user_id: this.state.loggedInUserId
      })
    })
    // .then(r=>r.json())
    // .then( createdEvent=> {
    //     this.setState({
    //       events: [...this.state.events, createdEvent]
    //     })
    // } )


  }

  
  render(){
  // console.log(this.state.favoriteEvents)
    return (
    <div>
      <Header logOut={ this.logOut } token={this.state.token} />
      <Switch>
      {/* {this.state.token ? null : <Redirect from='/profile' to='/' />}  */}

        <Route exact path={'/'} render={(props) => <LoginForm {...props} setToken={this.setToken} />} />
        <Route exact path={'/signup'} component={(props) => <SignupForm {...props} setToken={this.setToken} />} />
        <Route exact path={'/events'} render={(props) => <EventContainer {...props}   addToFavorites={this.addToFavorites} />} />
        <Route exact path={'/eventcreate'} render={(props) => <EventCreateForm addEvent={this.addEvent} {...props}  />} />
        <Route exact path={'/profile'} render={(props) => <Profile {...props}  />} />
        <Route exact path={'/favoritevents'} render={(props) => <FavoriteEventList removeIt={this.removeIt} {...props} user={ this.state.loggedInUserId } setFavoriteEvents={this.setFavoriteEvents} favoriteEvents={this.state.favoriteEvents} />} />

        <Route exact path={'*'} component={FourOhFour} /> 
      </Switch>
      {this.state.token ? "" : <Redirect to='/' />} 
      
    </div>
  );
}
}


