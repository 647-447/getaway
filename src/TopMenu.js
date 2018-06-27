import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'

import ReorderIcon from '@material-ui/icons/Reorder'

import VolunteerFullScreen from './VolunteerFullScreen.js'
import VictimFullScreen from './VictimFullScreen.js'

class TopMenu extends React.Component {
  state = {
    anchorEl: null,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          variant="fab"
        >
          <ReorderIcon/>
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem>
          { this.props.user === "volunteer" && <VolunteerFullScreen/> }
          { this.props.user === "victim" && <VictimFullScreen/> }
          </MenuItem>
        </Menu>
      </div>
    )
  }
}

export default TopMenu