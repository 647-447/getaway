import React from 'react'
import { MarkerClusterer } from 'react-google-maps/lib/components/addons/MarkerClusterer'

import ReactMarker from './ReactMarker.js'

const ReactMarkerCluster = (props) => {

	const markers = props.victims
		.map( (victim, index) => (
			<div key={index}>
		    <ReactMarker
		      victim={victim}
		    />
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