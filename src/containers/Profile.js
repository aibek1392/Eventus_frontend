import React, { Component } from 'react'

export default class Profile extends Component {
    state = {
          token: "",
          username: "",
          location: "",
          image: "",
          loggedInUserId: ""
      }

      componentDidMount() {
        if (localStorage.token) {
          fetch('http://localhost:3001/profile',{
            headers: {
              'Authorization': `Bearer ${localStorage.token}`
            }
          })
          .then(res => res.json())
          .then(user => console.log(user) ||
            this.setState({
            username: user.username,
            location: user.location,
            image: user.image
        }))
        } else {
          this.props.history.push('/')
        }
      }


    render() {
        return (
            <div style={{justifyContent:"center"}}>

                <h1 style={{"margin-top":"90px", "color":"#f1e3f1", "font-family":"Emilys Candy"}}>Profile</h1>
                <img src={this.state.image} width="200 px" height="250 px"></img>
                


                <h2 style={{"color":"#f1e3f1", "margin-top":"30px"}}><b>Username: {this.state.username}</b></h2>
                <h2 style={{"color":"#f1e3f1"}}><b>Location: {this.state.location}</b></h2>

            
                </div>
        )
    }
}
