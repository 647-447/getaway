import React from 'react'

import ProgressBar from './ProgressBar.js'

const VictimLanding = () => {
	return (
		<div className='landing'>
			<h3>Get-A-Way</h3>
			<p>Our server is fetching data to get to safety</p>
			<ProgressBar/>
		</div>
	)
}

export default VictimLanding