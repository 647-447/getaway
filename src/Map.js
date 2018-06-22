import React from 'react'
import { withGoogleMap, GoogleMap } from "react-google-maps"

import defaultOptions from './mapOptions.js'
import locations from './locations.js'
import Cluster from './Cluster.js'

const Map = withGoogleMap((props) =>
  <GoogleMap
    defaultOptions={defaultOptions}
  >
  <Cluster
  	locations={locations}
  />
  </GoogleMap>
)

export default Map