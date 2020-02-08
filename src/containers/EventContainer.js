import React, { Component } from 'react'
import EventList from './EventList'
import axios from 'axios'
import SearchBar from '../pages/SearchBar'

export default class EventContainer extends Component {

    state = {
        events: [],
        showFilteredEvents: "All"
    }

    componentDidMount() {
        axios.get("http://localhost:3001/events")
            .then(response => {
                const slicedData = response.data.sort((a, b) => b.id - a.id);
                this.setState({
                    events: slicedData
                })
            })
    }

    stateChangeFilter = (term) => {
        this.setState({
            showFilteredEvents: term
        })
    }

    whichEventsToRender = () => {
        if (this.state.showFilteredEvents === "All") {
            return this.state.events
        } else {
            return this.state.events.filter(event => event.category === this.state.showFilteredEvents)
        }
    }

    render() {
        return (
            <div >
                <SearchBar stateChangeFilter={this.stateChangeFilter}
                    term={this.state.showFilteredEvents}
                    events={this.state.events} />
                <EventList
                    showDetailsaboutEvent={this.props.showDetailsaboutEvent}
                    addToFavorites={this.props.addToFavorites}
                    events={this.whichEventsToRender()} />
            </div>
        )
    }
}

