import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}))

export default function ControlledOpenSelect() {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  return (
    <div>
      <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={''}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem>
            <Link to="/">Home</Link>
          </MenuItem>
          {/* <MenuItem>
            <Link to="/auth">Login</Link>
          </MenuItem> */}
          {/* <MenuItem>
            <Link to="/signIn">Sign in</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/signUp">Sign up</Link>
          </MenuItem> */}
          <MenuItem>
            <Link to="/productsList">Product list</Link>
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}
