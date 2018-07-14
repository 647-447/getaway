import React from 'react'

import ReactMap from './ReactMap.js'

import TopMenu from './TopMenu.js'
import NewsFeed from './NewsFeed.js'
import ReportMenu from './ReportMenu.js'

import defaultOptions from './mapOptions.js'

import { victims } from './victims.js'
import UserMarker from './UserMarker.js'

const MapUI = (props) => {
	return (
		<div>
			<div className="UI">
			  <div>
			    <TopMenu details={props.details}/>
			  </div>
			  <div>
			    <ReportMenu/>
			    <NewsFeed/>
			  </div>
			</div>

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

export default MapUI