import React from 'react'
import { Link } from 'react-router'
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import SearchIcon from 'material-ui/svg-icons/action/search'
import Divider from 'material-ui/Divider'
import '../scss/navbar.scss'

export default props => {
  const { username, loggedIn } = props.user
  const nav = <IconMenu iconButtonElement={
                    <IconButton><MoreVertIcon /></IconButton>
                  }>
                <MenuItem containerElement={loggedIn ? <Link to="/me"/> : <Link to="/login"/>}>{loggedIn ? "Profile" : "Login"}</MenuItem>
                {loggedIn ? null : <MenuItem containerElement={<Link to="/signup"/>}>Signup</MenuItem>}
                {loggedIn ? <Divider /> : null}
                {loggedIn ? <MenuItem onClick={props.logout}>Logout</MenuItem> : null}
              </IconMenu>
  const search = <IconButton containerElement={<Link to="/search" />} label={'Search'} ><SearchIcon/></IconButton>

  return (
    <AppBar title={<Link to="/">The Quietlife Coordinator</Link>} iconElementLeft={nav} iconElementRight={search}/>
  )
}