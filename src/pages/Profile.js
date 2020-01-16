import React, { Component } from 'react'
import '../Styling/Profile.css'
import { NavLink } from 'react-router-dom'

export default class Profile extends Component {
    state = {
        currentUser: {}
    }

    componentDidMount() {
        fetch(`http://localhost:3001/users/${this.props.userID}`)
            .then(r => r.json())
            .then(resObj => {
                console.log(resObj)
                if (this.props.userID) {
                    this.setState({
                        currentUser: resObj
                    })
                }
            })
    }




    render() {
        const user = this.state.currentUser
        return (
            <div className="profile">
                <center>
                    <h1 style={{ marginTop: "90px", color: "#f1e3f1", fontFamily: "Emilys Candy" }}>Profile</h1>
                    <img style={{ width: "18%", height: "20%", boxShadow: "white" }} src={user.image} ></img>



                    <h2 style={{ color: "#f1e3f1", marginTop: "30px" }}><b>username: {user.username}</b></h2>
                    <h2 style={{ color: "#f1e3f1" }}><b>Location: {user.location}</b></h2>
                    
                    <br/>
                    <div>
                    <NavLink exact to="/myprofile/edit">Edit Profile</NavLink>
                </div>
                </center>
            </div>
        )
    }
}
