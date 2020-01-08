import React, { useState, useEffect } from "react";
import { Card } from 'react-bootstrap'
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
        // debugger;
      });

  }, []);

  const mapOnClick = (event) => {
    console.log(event)
    setSelectedEvent(event)
  }

  return (

    // <div style={{ "height": "120", "width": "120" }}>
    //   <div>
    //     hgig 
    //     </div>

    <GoogleMap
      // style={{ height: '100vh', width: '100%' }}
      // width="120" 
      // height="120"
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
            <h1>22</h1>
            <h2>{selectedEvent.name}</h2>
            {/* <img src={selectedEvent.image}/> */}
            <Card.Img variant="top" src={selectedEvent.image} />
            <p>{selectedEvent.category}</p>
            {/* <button onClick={() => props.handleClick(selectedEvent)}></button> */}

          </div>

        </InfoWindow>
      )}

    </GoogleMap>
    // </div>
  );
}

export const WrappedMap = withScriptjs(withGoogleMap(Map))