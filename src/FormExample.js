import React from 'react'
import ControlledText from './ControlledText.js'

const ReactForm = (props) => {

	return (
		<form className={classes.container + " form"} noValidate autoComplete="off">
  		<ControlledText label="name" header="Your Name"/>
  		<ControlledText label="age" header="Your Age"/>
		</form>
	)
}

export default ReactForm