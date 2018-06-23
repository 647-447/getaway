import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'

import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode'

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
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              There is a an active fire in Market Street, between 6th and 4th Street.
            </DialogContentText>
          </DialogContent>

          <DialogTitle id="alert-dialog-title">{"Broken Roads"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">Stay away from the Tenderloin.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    )
  }
}

export default NewsFeed