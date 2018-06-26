import React, { Component } from 'react'
import './App.css'

import VolunteerLanding from './VolunteerLanding.js'
import VictimLanding from './VictimLanding.js'

import VictimUI from './VictimUI.js'
import VolunteerUI from './VolunteerUI.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'volunteerLanding'
    }
  }

  renderPage = (page) => {
    switch(page) {

      case 'volunteerLanding':
        return <VolunteerLanding/>

      case 'victimLanding':
        return <VictimLanding/>

      case 'map':
        return <VolunteerUI/>

      default:
        return <VictimLanding/>
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState( { page: 'map' } ), 3000)
  }

  render() {
    return (
      <div className="App" scroll="no">
        {this.renderPage(this.state.page)}
      </div>
    )
  }
}

export default App