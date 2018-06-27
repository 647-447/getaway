import React, { Component } from 'react'
import { Marker } from "react-google-maps"

import { InfoWindow } from 'react-google-maps'

class UserMarker extends Component {

	constructor(props) {
		super(props)
		this.state = {
			phone_number: 4124499354,
			name: 'Nathan Khosla',
			lat: 33.8004639,
			lng: -117.921,
			injury: '',
			seats: 3,
			vehicle: 'Tesla Model S, black',
			plate: 'SUPH3R0',
			isOpen : true
		}
	}

	toggleInfo = () => {
		this.setState( { isOpen : !this.state.isOpen } )
	}

	render() {


    console.log('marker volunteer rendered')
		const n = "" + this.state.phone_number
		const pn =  `${n.substring(0,3)}-${n.substring(3,6)}-${n.substring(6,10)}`
		const href = `tel:${pn}`
		const condition = this.state.injury.length === 0 ? 'healthy' : this.state.injury

		return (
			<Marker
			  position={{ lat: this.state.lat, lng: this.state.lng }}
			  onClick={this.toggleInfo}
			>
				{this.state.isOpen && <InfoWindow position={this.props.position} onCloseClick={this.toggleInfo}>
					<div className='infoWindow'>
						<div className='topHeader'>
							<div>{this.state.name}</div>
							<a className='phone_number' href={href}>{pn}</a>
						</div>
						<div className='victimStatus'>
						<b>vehicle:</b> {this.state.vehicle}
						</div>
						<div className='victimTimeStamp'>
							<span>last seen:</span>
							<span>09:30:43 on June 27, 2018</span>
						</div>
					</div>
				</InfoWindow>}

				
			</Marker>
		)
	}
}

export default UserMarker