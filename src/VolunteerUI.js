import React from 'react'

import ReactMap from './ReactMap.js'
import VolunteerOverlay from './VolunteerOverlay.js'

import defaultOptions from './mapOptions.js'
import { victims } from './victims.js'

import UserMarker from './UserMarker.js'

const VolunteerUI = (props) => {
	return ( 
		<div>
			<VolunteerOverlay user={props.user}/>
			<ReactMap
				isMarkerShown={false}
	      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
	      loadingElement={<div style={{ height: `100%` }} />}
	      containerElement={<div style={{ height: `100vh` }} />}
	      mapElement={<div style={{ height: `100%` }} />}
	      
	      defaultOptions={defaultOptions}
	      victims={victims}
			/>
		</div>
	)
}

export default VolunteerUI