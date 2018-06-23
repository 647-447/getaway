import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'


class ControlledText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      [props.label]: ''
    }
  }
  
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  render() {
    const { classes } = this.props

    return (
      <TextField
        id={this.props.label}
        label={this.props.header}
        className='textField'
        value={this.state[this.props.label]}
        onChange={this.handleChange(this.props.label)}
        margin='normal'
      />
    )
  }
}

export default ControlledText