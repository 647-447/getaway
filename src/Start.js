import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

const styles = theme => ({
	root: {
    width: '100%',
    maxWidth: '360px',
    backgroundColor: theme.palette.background.paper,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
})

class Start extends Component {
	constructor(props) {
		super(props)
		this.state = {
	    phone_number: null,
	    location: null,
	    injured: null,
	    stuck: null,
	    vehicle: null,
	    pros: null,
	    candidate: null,
	    volunteer: null
	  }
	}

	handleClick = event => {
		if(event.target.name !== undefined && event.target.value !== undefined) {
			this.setState( { [event.target.name] : event.target.value } )
		}
  }

  componentDidMount() {
  	// search localStorage for userInfo
  	// track user location
  }


  nextPage = this.props.nextPage

  componentDidUpdate() {
  	console.log(this.state)
  	if (this.state.volunteer === 'true') { this.nextPage('volunteerLanding') }
  	if (this.state.candidate === 'false' || this.state.volunteer === 'false') { this.nextPage('victimLanding') }

  	if (this.state.injured !== null && this.state.stuck !== null && this.state.vehicle !== null) {
  		console.log('check if candidate')

  		if( this.state.injured === 'false' && this.state.stuck === 'false' && this.state.vehicle === 'true') {
  			console.log('candidate')
  			if(this.state.candidate) { return }

  			this.setState( { candidate: 'true'} )
  			
  		} else {
  			this.setState( { candidate: 'false'} )
  		}
  		
  		// send state to server
  	}
  }

	render() {
		const { classes } = this.props

		return (
			<div className='fullScreenForm'>
				<div className={classes.root}>

					{ this.state.injured === null &&
					

					<div className='formBlock'>
						<h2>Do you require medical assistance?</h2>
						<div>
							<Button name='injured' value={true} variant="contained" color="secondary" className={classes.button} onClick={this.handleClick}>
				        Yes
				      </Button>
				      <Button name='injured' value={false} variant="contained" color="primary" className={classes.button} onClick={this.handleClick}>
				        No
				      </Button>
			      </div>
			    </div>
			  	}

			  	<Divider className='dividerWide'/>

			  	{ this.state.stuck === null &&
		      

		      <div className='formBlock'>
			      <h2>Are you stuck?</h2>
						<div>
							<Button name='stuck' value={true} variant="contained" color="secondary" className={classes.button} onClick={this.handleClick}>
				        Yes
				      </Button>
				      <Button name='stuck' value={false} variant="contained" color="primary" className={classes.button} onClick={this.handleClick}>
				        No
				      </Button>
			      </div>
			    </div>
			  	}

			  	<Divider className='dividerWide'/>


			  	{ this.state.vehicle === null &&
		      
		      <div className='formBlock'>
			      <h2>Do you have a vehicle you can drive to safety?</h2>
						<div>
							<Button name='vehicle' value={true} variant="contained" color="secondary" className={classes.button} onClick={this.handleClick}>
				        Yes
				      </Button>
				      <Button name='vehicle' value={false} variant="contained" color="primary" className={classes.button} onClick={this.handleClick}>
				        No
				      </Button>
			      </div>
			    </div>
			  	}

			  	{ this.state.candidate === 'true'  &&
					

					<div className='formBlock'>
						<h2>You could save lives Today.</h2>
						<h2>There's 43 people awaiting rescue in your area, would you like to volunteer?</h2>
						<div>
							<Button name='volunteer' value={true} variant="contained" color="secondary" className={classes.button} onClick={this.handleClick}>
				        Yes
				      </Button>
				      <Button name='volunteer' value={false} variant="contained" color="primary" className={classes.button} onClick={this.handleClick}>
				        No
				      </Button>
			      </div>
			    </div>
			  	}

		    </div>
    	</div>
		)
	}
}


Start.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Start)