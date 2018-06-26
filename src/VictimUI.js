import React from 'react'

import ReactMap from './ReactMap.js'
import VictimOverlay from './VictimOverlay.js'

import defaultOptions from './mapOptions.js'

const VictimUI = () => {
	return (
		<div>
			<VictimOverlay/>
      <ReactMap
        isMarkerShown={false}
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        defaultOptions={defaultOptions}
      />
	</div>
	)
}

export default VictimUI