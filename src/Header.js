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
		console.log(this.props.username)
		return(
			<>
				<div className="Header">
				{ this.props.token ?
						<Link   to='/map'>
						<Button 
						variant="primary" 
						>Map</Button></Link>
						:
						null
						} 
				
				{ this.props.token ?
						<Link   to='/favoritevents'>
						<Button 
						variant="info" 
						>Favorite events </Button></Link>
						:
						null
						} 
					{ this.props.token ?
						<Link   to='/eventcreate'>
						<Button 
						variant="danger" 
						style={{borderRadius: "50%",border: 'none', cursor: 'pointer', padding: '10px 10px', float: 'right'}}

						>Create Event </Button></Link>
						:
						null
						} 
					<h1 style={{color: 'white', textAlign: 'center', width: '150%'}}>EVENTUS</h1>
					{ this.props.token ?
		   				<h4 style={{marginRight: "5%", border: "1px", color: "red"}} >Wellcome {this.props.username}!</h4>

						:
						null
						} 
						{ this.props.token ?
						<Link   to='/profile'>
						<Button 
				style={{borderRadius: "50%",border: 'none', cursor: 'pointer', padding: '5px 10px', float: 'right'}}

						variant="light" 
						><span> 👤</span></Button></Link>
						:
						null
						} 
						{ this.props.token ?
						<Link   to='/events'>
						<Button 
						variant="primary" 
						>All events </Button></Link>
						:
						null
						} 
						{ this.props.token ?
						<Link   to='/'>
						<Button 
						variant="danger" onClick={ this.onClickFunctionsLogOut }
						style={{borderRadius: "50%",border: 'none', cursor: 'pointer', padding: '22px 9px', float: 'right'}}
						>LogOut </Button></Link>
						:
						null
						}
						
						
						
				</div>
			</>
		)
	}
}