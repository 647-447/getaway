import React, { Component } from 'react'
import './App.css'

// fake data
import defaultOptions from './mapOptions.js'
import locations from './locations.js'

// custom component
import ReactMap from './ReactMap.js'

// materialUI elements
import VictimUI from './VictimUI.js'

class App extends Component {
  render() {
    return (

      <div className="App">
        <VictimUI/>
        <ReactMap
          isMarkerShown={false}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100vh` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          defaultOptions={defaultOptions}
          locations={locations}
        />
      </div>
    )
  }
}

export default App