import React, { Component } from 'react'
// import CommentEvent from '../components'

export default class Profile extends Component {
    state = {
        currentUser: {}
    }

    componentDidMount() {
        fetch(`http://localhost:3001/users/${this.props.userID}`)
            .then(r => r.json())
            .then(resObj => {
                console.log(resObj)
                if(this.props.userID){
                    this.setState({
                        currentUser: resObj
                    })
                }
            })
    }




    render() {
        const user = this.state.currentUser
        return (
            <div >
                <center>
                <h1 style={{"margin-top":"90px", "color":"#f1e3f1", "font-family":"Emilys Candy"}}>Profile</h1>
                <img style={{width: "18%", boxShadow: "white"}} src={user.image} width="200 px" height="250 px"></img>
                


                <h2 style={{"color":"#f1e3f1", "margin-top":"30px"}}><b>Username: {user.username}</b></h2>
                {/* <h2 style={{"color":"#f1e3f1"}}><b>Location: {user.location}</b></h2> */}

                </center>
                </div>
        )
    }
}
