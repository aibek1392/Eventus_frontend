import React from 'react'
import '../Styling/SignupForm.css'
import { Button } from 'react-bootstrap'


export default class SignupForm extends React.Component {

	state = {
		logIn: true,
		username: "",
		password: "",
		errors: [],
		image: "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png",
		location: ""
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
		this.props.history.push('/events')
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
				password: this.state.password,
				image: this.state.image,
				location: this.state.location
			})
		})
			.then(response => response.json())
			.then(res_obj => {
				console.log(res_obj.errors)
				if (res_obj.errors) {
					alert(res_obj.errors)
					this.props.history.push('/signup')
				} else {
					// this.props.displayItems()
					// this.props.history.push('/events')
					this.props.setToken(res_obj)
				}
			})
	}

	render() {

		return (
			<div className="signup_wrapper">
				<h2 style={{fontWeight: "bold"}}>Sign Up</h2>
				<form onSubmit={this.onSubmitFunction}>
					<label htmlFor='sign_up_username'>Username</label>
					<input id="sign_up_username"
						type="text"
						placeholder="...Enter your username"
						onChange={this.onChange}
						name="username"
						value={this.state.username} />
					<label htmlFor='sign_up_password'>Password</label>
					<input id="sign_up_password"
						placeholder="...Enter your password"
						type="password"
						onChange={this.onChange}
						name="password"
						value={this.state.password} />
					<label htmlFor='sign_up_location'>Location</label>
					<input id="sign_up_location"
						placeholder="...Enter your city"
						type="text"
						onChange={this.onChange}
						name="location"
						value={this.state.location} />
					<label htmlFor='image'>Image</label>
					<input id="image"
						placeholder="...//http/image/url"
						type="text"
						onChange={this.onChange}
						name="image"
						value={this.state.image} />
					<input className="signup_button" type="submit" />
				</form>
				<Button variant="outline-primary" onClick={this.goBack}>goBack</Button>
			</div>
		)

	}

}