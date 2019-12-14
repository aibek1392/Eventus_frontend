import React from 'react'
import  './SignupForm.css'
import { Button } from 'react-bootstrap'


export default class SignupForm extends React.Component {

	state = {
		logIn: true,
		username: "",
		password: "",
		errors: []
	}

	goBack = (e) => {
        e.preventDefault()
        this.props.history.push('/')
        
    }

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		})
	}


	onSubmitFunction = (event) => {
		event.preventDefault()
		// console.log(event)
		this.onClickFunctionsSubmitSignUp(event)
		// this.props.history.push('/events')
		// this.props.updateCart()
		// this.props.displayItems()
	  }

	onClickFunctionsSubmitSignUp = (event) => {
		event.preventDefault()
		    fetch("http://localhost:3001/users", {
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
				console.log(res_obj.errors)
			if (res_obj.errors) {
				this.props.history.push('/404')
			} else {
				this.props.setToken(res_obj)
				this.props.history.push('/events')
		}
		})
		}

	render(){

		return(
			<div className="signup_wrapper">
				<h2>Sign Up</h2>
					<form onSubmit={ this.onSubmitFunction }>
						<label htmlFor='sign_up_username'>Username</label>
						<input id="sign_up_username"
							   type="text"
							   placeholder="...Enter your username"
						       onChange={ this.onChange }
						       name="username"
						       value={ this.state.username } />
						<label htmlFor='sign_up_password'>Password</label>
						<input id="sign_up_password"
							   placeholder="...Enter your password"
						       type="password"
						       onChange={ this.onChange }
						       name="password"
						       value={ this.state.password } />
						<input className="signup_button" type="submit" />
					</form>
					<Button variant="outline-primary" onClick={this.goBack}>goBack</Button>
			</div>
		)

	}

}