import React, { Component } from 'react'
import './App.css'

import VolunteerLanding from './VolunteerLanding.js'
import VictimLanding from './VictimLanding.js'

import VictimUI from './VictimUI.js'
import VolunteerUI from './VolunteerUI.js'

import Start from './Start.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'start',
      user: null
    }
  }

  nextPage = (userType) => {
    if (userType === 'victimLanding') {
      this.setState( { page: 'victimLanding', user: 'victim' } )

    } else if ( userType === 'volunteerLanding' ) {
      this.setState( { page: 'volunteerLanding', user:'volunteer' } )
    }
    
  }

  renderPage = (page) => {
    switch(page) {
      case 'start':
        return <Start nextPage={this.nextPage}/>

      case 'volunteerLanding':
        return <VolunteerLanding user={this.state.user}/>

      case 'victimLanding':
        return <VictimLanding user={this.state.user}/>

      case 'victimUI':
        return <VictimUI user={this.state.user}/>

      case 'volunteerUI':
        return <VolunteerUI user={this.state.user}/>

      default:
        return <Start nextPage={this.nextPage}/>
    }
  }

  componentDidUpdate() {
    if (this.state.page === 'victimLanding') {
      setTimeout(() => this.setState( { page: 'victimUI' } ), 3000)
    }

    if (this.state.page === 'volunteerLanding') {
      setTimeout(() => this.setState( { page: 'volunteerUI' } ), 3000)
    }
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