import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../Styling/LoginForm.css'
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from 'react-google-maps';

function Map(props) {
  const [events, setEvent] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null)

  useEffect(() => {
    fetch("http://localhost:3001/events")
      .then(res => res.json())
      .then(events => {
        console.log(events)
        setEvent(events);
      });
  }, []);

  const mapOnClick = (event) => {
    console.log(event)
    setSelectedEvent(event)
  }

  return (
    <GoogleMap
      defaultZoom={7}
      defaultCenter={{ lat: 39, lng: -106 }}
    >
            {events.map(event => (
              <Marker
                onClick={() => mapOnClick(event)}
                key={event.id}
                position={{
                  lat: parseFloat(event.latitude),
                  lng: parseFloat(event.longitude)
                }}
              />
            )
            )}
            {selectedEvent && (
              < InfoWindow
                position={{
                  lat: parseFloat(selectedEvent.latitude),
                  lng: parseFloat(selectedEvent.longitude)
                }}
                onCloseClick={() => setSelectedEvent(null)}
              >
                <div className="container mx-auto" style={{ width: '20rem' }} >
                  <h2>{selectedEvent.name}</h2>
                  <Card.Img variant="top" src={selectedEvent.image} />
                  <strong><p>category:{selectedEvent.category}</p></strong>
                  <Link to="/showdetails"><button style={{ textAlign: "center" }} className="login_button" onClick={() => props.mapSelectedEvent(selectedEvent)}>See details</button></Link>
                </div>
              </InfoWindow>
            )}
    </GoogleMap>
  );
}

export const WrappedMap = withScriptjs(withGoogleMap(Map))