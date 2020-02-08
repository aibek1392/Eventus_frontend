import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import '../Styling/Header.css'

export default class Header extends React.Component {

	goHome = (e) => {
		e.preventDefault()
		this.props.history.push('/events')
	}

	onClickFunctionsLogOut = () => {
		this.props.logOut(this.props.token)
	}

	render() {
		return (
			<>
				<div className="Header">
					{this.props.token ?
						<Link to='/map'>
							<Button
								className="glow-on-hover"
							>Map</Button></Link>
						:
						null
					}
					{this.props.token ?
						<Link to='/favoritevents'>
							<Button
								className="glow-on-hover"
							>Favorite events </Button></Link>
						:
						null
					}
					{this.props.token ?
						<Link to='/eventcreate'>
							<Button
								className="glow-on-hover"
							>Create Event </Button></Link>
						:
						null
					}
					{this.props.token ?
						<h1 style={{ color: 'white', textAlign: 'center', width: '150%' }}>EVENT
						<Link to='/events'>
								<span className="glow-on-hover" >US</span></Link></h1>
						:
						null
					}
					{this.props.token ?
						<h4 style={{ marginRight: "5%", border: "1px", color: "white" }}><strong>Wellcome {this.props.username}!</strong></h4>

						:
						null
					}
					{this.props.token ?
						<Link to='/profile'>
							<Button
								className="glow-on-hover"
							><span>Profile</span></Button></Link>
						:
						null
					}
					{this.props.token ?
						<Button onClick={this.props.goEvents}
							className="glow-on-hover"
						><span>Events</span> </Button>
						:
						null
					}
					{this.props.token ?
						<Link to='/'>
							<Button
								style={{ backgroundColor: "#FF1493" }}
								className="glow-on-hover"
								onClick={this.onClickFunctionsLogOut}
							>LogOut </Button></Link>
						:
						null
					}
				</div>
			</>
		)
	}
}