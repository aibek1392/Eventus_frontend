import React from 'react'
import '../Header.css'
import '../App.css'
import Geocode from "react-geocode";
import { Button, Form, InputGroup, FormControl, Col } from 'react-bootstrap'

class EventCreateForm extends React.Component {


    state = {
        image: '',
        name: '',
        date: '',
        location: '',
        description: '',
        start_time: ''
    }



    onSubmit = (e) => {
        e.preventDefault()
        this.props.addEvent(this.state)
            .then((res) => res.json())
            .then((newEvent) => {

                this.props.history.push('/events')
            })
    }


    // convertAddress = (address) => {
    //     Geocode.fromAddress(address).then(
    //         response => {
    //           const { lat, lng } = response.results[0].geometry.location;
    //           console.log(lat, lng);
    //         },
    //         error => {
    //           console.error(error);
    //         }
    //       );
    // }
    


    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    goBack = (e) => {
        e.preventDefault()
        this.props.history.goBack()
    }

    render() {

        return (
            <div style={{ minHeight: '100%' }} className="createform">
                <Button
                    onClick={(e) => this.goBack(e)}
                    style={{
                        width: '29%', color: 'black', marginLeft: '34%',
                        justifyContent: "center"
                    }}
                    size='lg'
                    className="h-100 row align-items-center"
                    variant="warning">
                    Press here to go back
        </Button>
                <Form onSubmit={this.onSubmit} className="active" >
                    <h2 style={{ color: "black", fontWeight: "bold" }}>Let's create an Event </h2>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">img url</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="......https://images"
                            value={this.state.image}
                            onChange={this.onChange}
                            name="image"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3" md="auto">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default"

                            >Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="...Enter the name of the event"
                            name="name"
                            onChange={this.onChange}
                            value={this.state.name}
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Date</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            value={this.state.date}
                            onChange={this.onChange}
                            name="date"
                            placeholder="yyyy-mm-dd"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>

                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">State</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl

                            value={this.state.location}
                            onChange={this.onChange}
                            name="location"
                            placeholder="...Enter the name of the State"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>


                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Address</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            value={this.state.description}
                            onChange={this.onChange}
                            // onChange={this.convertAddress}
                            name="description"
                            placeholder="...Enter the exact address of the event"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Start Time</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            value={this.state.start_time}
                            onChange={this.onChange}
                            name="start_time"
                            placeholder="...Enter start time of the event"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                        />
                    </InputGroup>


                    <Button
                        style={{ width: '29%', color: 'white', textAlign: 'center' }}
                        variant="dark"
                        value="Submit"
                        type="submit">
                        Submit
        </Button>
                </Form>
            </div>
        )
    }
}

export default EventCreateForm