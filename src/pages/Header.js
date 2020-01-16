import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import '../Styling/Header.css'
import Clock from './Clock'
export default class Header extends React.Component {
// onClickFunctionsCart = () => {
// 	this.props.displayCart()
// }

// onClickFunctionsItems = () => {
// 	this.props.displayItems()
// }



goHome = (e) => {
	e.preventDefault()
	this.props.history.push('/events')
}


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
						className="glow-on-hover"  
						>Map</Button></Link>
						:
						null
					} 
				
				{ this.props.token ?
						<Link   to='/favoritevents'>
						<Button 
						className="glow-on-hover" 
						>Favorite events </Button></Link>
						:
						null
					} 
						{ this.props.token ?
						<Link   to='/eventcreate'>
						<Button 
						
						className="glow-on-hover" 
						// style={{borderRadius: "50%", cursor: 'pointer', padding: '10px 10px', float: 'right'}}

						>Create Event </Button></Link>
						:
						null
						} 
							
							
						{ this.props.token ?
						<h1 style={{color: 'white', textAlign: 'center', width: '150%'}}>EVENT
						<Link   to='/events'>
						<span className="glow-on-hover" >US</span></Link></h1>
						:
						null
						} 
							{/* </NavLink> */}
					{ this.props.token ?
		   				<h4 style={{marginRight: "5%", border: "1px", color: "white"}}><strong>Wellcome {this.props.username}!</strong></h4>

						:
						null
						} 
						{ this.props.token ?
						<Link   to='/profile'>
						<Button 
						

						className="glow-on-hover" 
						><span>👤</span></Button></Link>
						:
						null
						} 
						{ this.props.token ?
						// <Link   to='/events'>
						<Button  onClick={this.props.goEvents}
						className="glow-on-hover" 
						><span>Events</span> </Button>
						:
						null
						} 
						{ this.props.token ?
						<Link   to='/'>
						<Button 
						style={{backgroundColor: "#FF1493"}}
						className="glow-on-hover"  
						onClick={ this.onClickFunctionsLogOut }
						>LogOut </Button></Link>
						:
						null
						}

						
						
						
				</div>
			</>
		)
	}
}