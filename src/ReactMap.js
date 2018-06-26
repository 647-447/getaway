import React from 'react'
import { withGoogleMap, GoogleMap } from "react-google-maps"

import ReactMarkerCluster from './ReactMarkerCluster.js'

const ReactMap = withGoogleMap( (props) =>
  <GoogleMap
    defaultOptions={props.defaultOptions}
  >
  { props.victims ?( <ReactMarkerCluster
  	victims={props.victims}
  /> ) : null
}
  </GoogleMap>
)

export default ReactMap