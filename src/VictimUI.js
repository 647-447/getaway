import React from 'react'

// materialUI elements
import TopMenu from './TopMenu.js'
import NewsMenu from './NewsMenu.js'
import ReportMenu from './ReportMenu.js'

const VictimUI = (props) => {

	return (
		<div className="UI">
		  <div>
		    <TopMenu/>
		  </div>
		  <div>
		    <ReportMenu/>
		    <NewsMenu/>
		  </div>
		</div>
	)
}

export default VictimUI