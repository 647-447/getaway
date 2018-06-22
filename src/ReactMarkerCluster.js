import React from 'react'
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer'

import ReactMarker from './ReactMarker.js'

const ReactMarkerCluster = (props) => {

	const markers = props.locations
		.map( (marker, index) => (
	    <ReactMarker
	      key={index}
	      position={{ lat: marker.lat, lng: marker.lng }}
	    />
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