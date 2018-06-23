import React from 'react'
import { Marker } from "react-google-maps"

import { InfoWindow } from 'react-google-maps'


const ReactMarker = (props) => {

	return (
		<Marker
			key={props.index}
		  position={props.position}
		>

			<InfoWindow position={props.position}>
				<div>
					<h3>Victim Name</h3>
					<p>Help! Please get me out of here I don't know where to go, help me!</p>
					<h5>{'20:03:43 | June 23, 2018'}</h5>
				</div>
			</InfoWindow>
		</Marker>
	)
}

export default ReactMarker