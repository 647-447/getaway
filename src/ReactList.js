import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import ListItemText from '@material-ui/core/ListItemText'
import ListItem from '@material-ui/core/ListItem'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'


const ReactList = (props) => {
  const details = props.details

  return (
    <List>
      <Divider />
      <ListItem button>
        <ListItemText primary="Contact Number" secondary={details.contactNumber} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Full Name" secondary={details.fullName} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Age" secondary={details.age} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Blood type" secondary={details.bloodType} />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary="Injuries" secondary="none" />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText primary={details.injury} secondary={details.priority} />
      </ListItem>
      <Divider />

      { props.volunteer ? (

        <div>
          <ListItem button>
          <ListItemText primary="Vehicle model" secondary={details.model} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Licence plate" secondary={details.licence} />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText primary="Seats available" secondary={details.seats} />
          </ListItem>
          <Divider />
        </div>

        ) : (

        <div>
          <ListItem button>
          <ListItemText primary="Rescue ETA" secondary={details.rescueETA} />
          </ListItem>
        </div>

        )
      }
    </List>
  )
}

export default ReactList