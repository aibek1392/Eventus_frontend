import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import '../Styling/Profile.css'

export default class EditProfile extends Component {

    state = {
        username: "",
        image: "",
        location: "",
        password: "",
        submitted: false,
        errors: []
    }



    componentDidMount() {
        fetch(`http://localhost:3001/users/${this.props.userID}`)
            .then(r => r.json())
            .then(resObj => {
                console.log(resObj)
                this.setState({
                    username: resObj.username,
                    password: resObj.password,
                    image: resObj.image,
                    location: resObj.location
                })
            })
    }


    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    




    submitClick = event => {
        event.preventDefault()
        fetch(`http://localhost:3001/users/${this.props.userID}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
                location: this.state.location,
                image: this.state.image
            })
        })
            .then(r => r.json())
            .then(resp => {

                if (resp.errors) {
                    this.setState({
                        errors: resp.errors
                    })
                } else {
                    this.setState({
                        username: resp.username,
                        password: resp.password,
                        image: resp.image,
                        location: resp.location,
                        submitted: true
                    })
                    this.props.newUser(resp.username)
                }
            })
    }


    componentWillUnmount() {
        this.setState({
            username: "",
            password: ""
        })
    }



    render() {
        return (
            <div className="editform" >
                <center>
                    <h2>Edit Profile</h2>
                    <form className="profile-form" onSubmit={this.submitClick}>
                        <label>Username: </label>
                        <input onChange={this.onChange} name="username" type="text" value={this.state.username} />
                        <br />
                        <label>Password: </label>
                        <input onChange={this.onChange} name="password" type="password" value={this.state.password} />
                        <br />
                        <label>Location: </label>
                        <input style={{ marginLeft: "3%" }} onChange={this.onChange} name="location" type="text" value={this.state.location} />
                        <br />
                        <label>Image: </label>

                        <input style={{ marginLeft: "8%" }} onChange={this.onChange} name="image" type="text" value={this.state.image} />
                        <br />
                        <button>Submit</button>
                    </form>
                    {this.state.submitted ? <Redirect to="/profile" /> : ""}
                    <br />
                </center>
            </div>
        )
    }
}
