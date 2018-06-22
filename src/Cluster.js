import React from 'react'
import { Marker } from "react-google-maps"
import { MarkerClusterer } from "react-google-maps/lib/components/addons/MarkerClusterer"

const Cluster = (props) => {

	const markers = props.locations
		.map( (marker, index) => (
	    <Marker
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

export default Cluster