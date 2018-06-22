import React from 'react'
import { withGoogleMap, GoogleMap } from "react-google-maps"

import ReactMarkerCluster from './ReactMarkerCluster.js'

const ReactMap = withGoogleMap((props) =>
  <GoogleMap
    defaultOptions={props.defaultOptions}
  >
  <ReactMarkerCluster
  	locations={props.locations}
  />
  </GoogleMap>
)

export default ReactMap