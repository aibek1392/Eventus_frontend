import React from 'react'
import { Button } from 'react-bootstrap'
import '../Styling/LoginForm.css'



export default class LogIn extends React.Component {

  state = {
    logIn: true,
    username: "",
    password: "",
    errors: []
  }

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onSubmitFunctions = (event) => {
    event.preventDefault()
    // console.log(event)
    this.logInSubmitted(event)
    // 
    // this.props.updateCart()
    // this.props.displayItems()
  }

	onClickFunctionsSignUp = (event) => {
        event.preventDefault()
        this.props.history.push('/signup')
	}

  logInSubmitted = (event) => {
    event.preventDefault()
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(res_obj => {
      
      console.log(res_obj)
      if (res_obj.errors) {
        // debugger
        this.props.history.push('/404')
      } else {
        this.props.setToken(res_obj)
        // this.props.getUser(res_obj)
        this.props.history.push('/events')
      }
    })
  }

  render(){
    return <>
      <ul>
        { this.state.errors.map(error => <li>{ error }</li>) }
      </ul>
      {
        this.state.logIn
        ?
        <div className="login_wrapper">
          <h2>Log In</h2>
          <form onSubmit={ this.onSubmitFunctions }>
            <label  htmlFor="log_in_username">Username</label>
            <input  id="log_in_username"
                    style={{ border: 'solid grey'}}
                    type="text"
                    placeholder="...Enter your username"
                    onChange={ this.onChange }
                    name="username"
                    value={ this.state.username } />
            <label  htmlFor="log_in_password">Password</label>
            <input  id="log_in_password"
                    style={{ border: 'solid grey'}}
                    type="password"
                    placeholder="...Enter your password"
                    onChange={ this.onChange }
                    name="password"
                    value={ this.state.password } />
            <input className="login_button" type="submit" />
          </form>
          <Button
          style={{ backgroundColor: 'black'}}
           variant="outline-danger" onClick={ this.onClickFunctionsSignUp }>Sign Up</Button>
        </div>
        :
			""
      }
    </>
  }
}