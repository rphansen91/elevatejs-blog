import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import Typography from "@material-ui/core/Typography"
import HomeIcon from "@material-ui/icons/Home"
import SettingsIcon from "@material-ui/icons/Settings"
import MoneyIcon from "@material-ui/icons/AttachMoney"
import AddIcon from "@material-ui/icons/Add"
import NoteIcon from "@material-ui/icons/Note"
import StoreIcon from "@material-ui/icons/Store"
import GQLIcon from "@material-ui/icons/NetworkCheck"
import HelpIcon from "@material-ui/icons/Help"
import { Link } from "gatsby"

const linkStyle = (color) => ({
  flex: "1 1 auto",
  padding: "0 16px",
  color,
})

export const MainListItems = (props) => (
  <List className={props.className || ""}>
    <ListItem button component={Link} to="/">
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText>
        <Typography color="textPrimary">Home</Typography>
      </ListItemText>
    </ListItem>
    <ListItem button component={Link} to="/blog/">
      <ListItemIcon>
        <NoteIcon />
      </ListItemIcon>
      <ListItemText>
        <Typography color="textPrimary">Blog</Typography>
      </ListItemText>
    </ListItem>
    {/* <Link to="/shop/" aria-label="shop">
      <ListItem button>
        <ListItemIcon>
          <StoreIcon />
        </ListItemIcon>
        <ListItemText>
          <Typography color="textPrimary">Shop</Typography>
        </ListItemText>
      </ListItem>
    </Link> */}
  </List>
)

export const OtherListItems = (props) => (
  <List className={props.className || ""}>
    <ListItem button component={Link} to="/about/">
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>

      <ListItemText>
        <Typography color="textPrimary">About</Typography>
      </ListItemText>
    </ListItem>
    <ListItem button component={Link} to="/settings/">
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText>
        <Typography color="textPrimary">Settings</Typography>
      </ListItemText>
    </ListItem>
  </List>
)
