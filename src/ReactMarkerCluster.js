import React from 'react'
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer'

import ReactMarker from './ReactMarker.js'


const ReactMarkerCluster = (props) => {

	const markers = props.locations
		.map( (marker, index) => (
			<div key={index}>
		    <ReactMarker
		      position={{ lat: marker.lat, lng: marker.lng }}
		    >
	      </ReactMarker>

      </div>
  	))

	return (
		<MarkerClusterer
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
    	{markers}
    </MarkerClusterer>
  )
}

export default ReactMarkerCluster