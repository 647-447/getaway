import React from 'react'

import ProgressBar from './ProgressBar.js'

const Landing = (props) => {
	console.log('landing props:', props)

	const text = props.details.volunteer ? 'Thank you for volunteering. Because this is a case of life and death, we are fetching your data directly from your phone provider' : 'Because this is a case of life and death, we are fetching your data directly from your phone provider'

	// getaway API performs a get request to user's phone service provider

		// if it gets the user's name, date of birth
			// performs another get request to another API that can have helpful information
				// this information is used to:
					// establish priorities ( children, elderly, disabled, medicated )
					// prepare rescue teams with the necessary equipment

		// consider a timeout + manual data insertion (on client dashboard)

	return (
		<div id='landing'>
			<h3>Get-A-Way</h3>
			<p>{text}</p>
			<ProgressBar/>
		</div>
	)
}

export default Landing