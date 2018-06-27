import React from 'react'
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

class VictimFullScreen extends React.Component {
  state = {
    open: false,
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
          <List>
            <Divider />
            <ListItem button>
              <ListItemText primary="Contact Number" secondary="412 559 9354" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Full Name" secondary="Nathan Khosla" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Age" secondary="28" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Blood type" secondary="O-" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Injuries" secondary="none" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Sprained Ankle" secondary="low" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemText primary="Rescue ETA" secondary="2d 11h 23min" />
            </ListItem>
          </List>
        </Dialog>
      </div>
    )
  }
}

VictimFullScreen.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(VictimFullScreen)