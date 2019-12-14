import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import './Header.css'

export default class Header extends React.Component {

// onClickFunctionsCart = () => {
// 	this.props.displayCart()
// }

// onClickFunctionsItems = () => {
// 	this.props.displayItems()
// }

onClickFunctionsLogOut = () => {
	this.props.logOut(this.props.token)
	// this.props.displayLogin()
}

// onClickFunctionsHome = () => {
// 	this.props.displayLogin()
// }

	render(){
		
		return(
			<>
				<div className="Header">
					<h1 style={{color: 'white', textAlign: 'center', width: '150%'}}>EVENTUS</h1>
						{ this.props.token ?
						<Link   to='/'>
						<Button 
						variant="warning" onClick={ this.onClickFunctionsLogOut }
						>LogOut </Button></Link>
						:
						null
						} 
						{ this.props.token ?
						<Link   to='/profile'>
						<Button 
						variant="info" 
						>Profile </Button></Link>
						:
						null
						} 
						{ this.props.token ?
						<Link   to='/events'>
						<Button 
						variant="danger" 
						>🏠 </Button></Link>
						:
						null
						} 
				</div>
			</>
		)
	}
}