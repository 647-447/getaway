import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import defaultOptions from './mapOptions.js'
import locations from './locations.js'
import ReactMap from './ReactMap.js'

class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">OhShit is here to help</h1>
        </header>

        <ReactMap
          isMarkerShown={false}
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          defaultOptions={defaultOptions}
          locations={locations}
        />
      </div>
    )
  }
}

export default App