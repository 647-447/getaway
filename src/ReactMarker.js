import React, { Component } from 'react'
import { Marker } from "react-google-maps"

import { InfoWindow } from 'react-google-maps'

class ReactMarker extends Component {

	constructor(props) {
		super(props)
		this.state = {
			isOpen : false
		}
	}

	toggleInfo = () => {
		this.setState( { isOpen : !this.state.isOpen } )
	}

	render() {

		return (
			<Marker
				key={this.props.index}
			  position={this.props.position}
			  onClick={this.toggleInfo}
			>
				{this.state.isOpen && <InfoWindow position={this.props.position} onCloseClick={this.toggleInfo}>
					<div className='infoWindow'>
						<div className='topHeader'>
							<div>Nuno Neves</div>
							<a href="tel:555-555-5555">555-555-5555</a>
						</div>
						<div className='victimStatus'>
						"Help! Please get me out of here I don't know where to go, help me!"
						</div>
						<div className='victimTimeStamp'>{'20:03:43 | June 23, 2018'}</div>
					</div>
				</InfoWindow>}

				
			</Marker>
		)
	}
}

export default ReactMarker