import React from 'react'

// materialUI elements
import TopMenu from './TopMenu.js'
import NewsFeed from './NewsFeed.js'
import ReportMenu from './ReportMenu.js'

const VictimUI = (props) => {

	return (
		<div className="UI">
		  <div>
		    <TopMenu/>
		  </div>
		  <div>
		    <ReportMenu/>
		    <NewsFeed/>
		  </div>
		</div>
	)
}

export default VictimUI