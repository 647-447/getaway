import React, { Component } from 'react'
import './App.css'

import Landing from './Landing.js'
import MapUI from './MapUI.js'

import Start from './Start.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 'Start',
      loading: false,
      details: null
    }
  }

  nextPage = (details) => {
    console.log( 'details on app nextpage: ', details)
    let newState = { page: 'Landing' , details: details }
    this.setState( newState )
  }

  renderPage = (page) => {
    switch(page) {

      case 'Landing':
        return <Landing details={this.state.details}/>

      case 'MapUI':
        return <MapUI details={this.state.details}/>

      default:
        return <Start nextPage={this.nextPage}/>
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !this.state.loading
  }

  componentDidUpdate() {
    if (this.state.page === 'Landing') {
      this.setState( { loading: true } )

      // simulating the loading time
      setTimeout(() => this.setState( { loading: false, page: 'MapUI' } ), 3000)
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