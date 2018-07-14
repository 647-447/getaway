import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import CloseIcon from '@material-ui/icons/Close'
import Slide from '@material-ui/core/Slide'

import ReactList from './ReactList.js'

const demoDetails = {
  contactNumber : '412 559 9354',
  fullName : 'Nathan Khosla',
  age: 28,
  bloodType: '0-',
  injury: 'Sprained Ankle',
  priority: 'low',
  rescueETA: '2d 11h 23min',
  model: 'Tesla Model S, black',
  licence : 'SUPH3R0',
  seats: 4
}

const styles = {
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
}

function Transition(props) {
  return <Slide direction="up" {...props} />
}

class Details extends Component {

	constructor(props) {

		console.log('Details props:', props)

		super(props)
		this.state = {
			volunteer: props.details.volunteer,
			details: demoDetails,
			open: false
		}
	}

	handleClickOpen = () => {
  	this.setState({ open: true })
	}

	handleClose = () => {
 	 this.setState({ open: false })
	}

	render() {
		const { classes } = this.props

		return (
		<div>
        <Button onClick={this.handleClickOpen}>My details</Button>
        <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Your details
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                save
              </Button>
            </Toolbar>
          </AppBar>

          <ReactList volunteer={this.state.volunteer} details={this.state.details}/>
        </Dialog>
      </div>
     )
	}
}

Details.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Details)