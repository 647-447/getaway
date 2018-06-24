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

		const n = "" + this.props.victim.phone_number
		const pn =  `${n.substring(0,3)}-${n.substring(3,6)}-${n.substring(6,10)}`
		const href = `tel:${pn}`
		const condition = this.props.victim.injury.length === 0 ? 'healthy' : this.props.victim.injury

		return (
			<Marker
			  position={{ lat: this.props.victim.lat, lng: this.props.victim.lng }}
			  onClick={this.toggleInfo}
			>
				{this.state.isOpen && <InfoWindow position={this.props.position} onCloseClick={this.toggleInfo}>
					<div className='infoWindow'>
						<div className='topHeader'>
							<div>{this.props.victim.name}</div>
							<a className='phone_number' href={href}>{pn}</a>
						</div>
						<div className='victimStatus'>
						condition: {condition}
						</div>
						<div className='victimTimeStamp'>
							<span>last seen:</span>
							<span>20:03:43 on June 23, 2018</span>
						</div>
					</div>
				</InfoWindow>}

				
			</Marker>
		)
	}
}

export default ReactMarker