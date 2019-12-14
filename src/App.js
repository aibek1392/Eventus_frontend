import React from 'react';
import {Route, Redirect, Switch} from 'react-router-dom'
import LoginForm from './components/LoginForm'
import FourOhFour from './FourOhFour'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import SignupForm from './components/SignupForm'
import EventContainer from './containers/EventContainer'
import Profile from './containers/Profile'
import axios from 'axios'



export default class App extends React.Component {

 
  state = {
    token: localStorage.token,
    loggedInUserId: localStorage.userId,
	  username: null,
    display: 'Login',
  }

  componentDidMount(){
    axios.get("https://app.ticketmaster.com/discovery/v2/events.json?apikey=r7qtrGxNYlU9gXJwaNwTHLuk6NJQa1RR&size=20")
      .then(response => {
          console.log(response.data)
      })
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
      cart: []
    })
  }

 


  
  render(){
 
    return (
    <div>
      <Header logOut={ this.logOut } token={this.state.token} />
      <Switch>
      {this.state.token ? null : <Redirect from='/events' to='/' />} 
      {this.state.token ? null : <Redirect from='/profile' to='/' />} 

        <Route exact path={'/'} render={(props) => <LoginForm {...props} setToken={this.setToken} />} />
        <Route exact path={'/signup'} component={(props) => <SignupForm {...props} setToken={this.setToken} />} />
        <Route exact path={'/events'} render={(props) => <EventContainer {...props}  />} />
        <Route exact path={'/profile'} render={(props) => <Profile {...props} events={this.state.todos} />} />
        <Route exact path={'*'} component={FourOhFour} /> 
      </Switch>
      
    </div>
  );
}
}


