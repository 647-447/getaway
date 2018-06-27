import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode'

import MediaCard from './MediaCard.js'

class NewsFeed extends React.Component {
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
    return (
      <div>
        <Button
        	onClick={this.handleClickOpen}
        	variant="fab"
        >
        	<ChromeReaderModeIcon/>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Active Fires"}</DialogTitle>
          <MediaCard title="Anaheim Hills" text="Restricted entry to 91 Express lane and all the roads around Deer Canyon park" url="http://cdn.abclocal.go.com/content/kabc/images/cms/ana3.jpg"/>

          <DialogTitle id="alert-dialog-title">{"Broken Roads"}</DialogTitle>
          <MediaCard title="Fissures across Serrano Avenue" text="Restricted entry between Sunset Ridge and Highcres Drive" url="https://media.spokesman.com/photos/2017/04/17/Inchelium_Highway_1_t1140.jpg?abf36d44fcda22a1f7041162086f31df6a374511"/>
        </Dialog>
      </div>
    )
  }
}

export default NewsFeed