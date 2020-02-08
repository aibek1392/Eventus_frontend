import React from 'react';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import LoginForm from './pages/LoginForm'
import FourOhFour from './pages/FourOhFour'
import Header from './pages/Header'
import SignupForm from './pages/SignupForm'
import EventContainer from './containers/EventContainer'
import Profile from './pages/Profile'
import EventCreateForm from './pages/EventCreateForm';
import FavoriteEventList from './containers/FavoriteEventList'
import { WrappedMap } from './pages/Map'
import ShowDetailsPage from './pages/ShowDetailsPage'
import EditProfile from './pages/EditProfile'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-bootstrap';

class App extends React.Component {

  state = {
    token: localStorage.token,
    loggedInUserId: localStorage.userId,
    username: localStorage.username,
    singleEventDetail: null,
    backClick: false,
    favoriteEvents: []
  }

  newUser = (data) => {
    this.setState({
      username: data
    })
    localStorage.username = data
  }

  setToken = ({ token, user_id, username }) => {
    localStorage.token = token
    localStorage.userId = user_id
    localStorage.username = username  
    this.setState({
      token: token,
      loggedInUserId: user_id,
      username: username
    })
  }

  logOut = () => {
    localStorage.clear()
    this.setState({
      loggedInUserId: null,
      token: null,
      favoriteEvents: [],
      username: null
    })
  }

  addToFavorites = (event) => {
    const match = this.state.favoriteEvents.find(joiner => joiner.event.id === event.id)
    if (!match) {
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
        .then(r => r.json())
        .then(r_json => {
          alert("Event has been added ✅")
          this.setState({
            favoriteEvents: [...this.state.favoriteEvents, r_json]
          })
        }
        )
    } else {
      alert("You already have this event 🛑")
    }
  }

  setFavoriteEvents = (arr) => {
    this.setState({
      favoriteEvents: arr
    })
  }

  showDetailsaboutEvent = (event) => {
    this.setState({
      singleEventDetail: event
    })
  }

  removeFromFavorite = (favorite) => {
    fetch(`http://localhost:3001/favorite_events/${favorite.id}`, {
      method: "DELETE"
    })
      .then(
        this.setState({
          favoriteEvents: this.state.favoriteEvents.filter(event => event.id !== favorite.id)
        })
      )
  }

  goEvents = () => {
    this.props.history.push('/events')
    this.setState({
      singleEventDetail: null
    })
  }

  mapSelectedEvent = (eventus) => {
    this.setState({
      singleEventDetail: eventus
    })
  }

  goBackToEvents = () => {
    if (this.state.singleEventDetail) {
      this.props.history.goBack()
      this.setState({
        singleEventDetail: null
      })
    }
  }

  slugUrl = eventName => {
    return eventName.split(' ').join('-')
  }

  addEvent = (newEvent) => {
    return fetch(`http://localhost:3001/events`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        ...newEvent,
        user_id: this.state.loggedInUserId
      })
    })
  }

  render() {
    return (
      <div>
        <Header goEvents={this.goEvents} logOut={this.logOut} token={this.state.token} username={this.state.username} goBack={this.goBack} />
        <Switch>
          <Route exact path={'/'} render={(props) => <LoginForm {...props} setToken={this.setToken} />} />
          <Route exact path={'/signup'} component={(props) => <SignupForm {...props} setToken={this.setToken} />} />
          <Route exact path={'/events'} render={(props) => <EventContainer {...props} showDetailsaboutEvent={this.showDetailsaboutEvent} addToFavorites={this.addToFavorites} />} />
          <Route exact path={'/eventcreate'} render={(props) => <EventCreateForm addEvent={this.addEvent} {...props} />} />
          <Route exact path={'/profile'} render={(props) => <Profile {...props} username={this.state.username} userID={this.state.loggedInUserId} />} />
          <Route exact path={'/favoritevents'} render={(props) => <FavoriteEventList removeFromFavorite={this.removeFromFavorite} {...props} user={this.state.loggedInUserId} setFavoriteEvents={this.setFavoriteEvents} showDetailsaboutEvent={this.showDetailsaboutEvent} favoriteEvents={this.state.favoriteEvents} />} />
          <Route exact path="/myprofile/edit" render={(props) => <EditProfile newUser={this.newUser} {...props} userID={this.state.loggedInUserId} />} />
          <Route path='/showdetails/:name'>
            {this.state.singleEventDetail && (
              <ShowDetailsPage
                addToFavorites={this.addToFavorites}
                userID={this.state.loggedInUserId}
                username={this.state.username}
                user={this.state.loggedInUserId}
                singleEventDetail={this.state.singleEventDetail}
                goBackToEvents={this.goBackToEvents}
              />
            )}
          </Route>
          <div style={{ width: '100vw', height: '70vw' }}>
            <Route exact path={'/map'} render={(props) => <WrappedMap {...props}
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}`}
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '100%' }} />}
              mapSelectedEvent={this.mapSelectedEvent}
              mapElement={<div style={{ height: '100%' }} />} />} />
            <Route exact path={'/404'} component={FourOhFour} />
          </div>
        </Switch>

        {this.state.singleEventDetail ? (
          <Redirect to={`/showdetails/${this.slugUrl(this.state.singleEventDetail.name)}`} />
        ) : (
            this.goBackToEvents()
          )}
        {this.state.token ? "" : <Redirect to='/' />}
        }
      </div>
    );
  }
}

export default withRouter(App);