import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import IconButton from "@material-ui/core/IconButton"
import NavigationClose from "@material-ui/icons/Close"
import NavigationMenu from "@material-ui/icons/Menu"
// import { PortfolioBannerAd } from "./ads/slots";
import Brand from "../ui/Brand"
import { ToggleTheme } from "../ui/Settings"
import { Hidden } from "@material-ui/core"

const Header = ({ menu, toggleMenu }) => (
  <AppBar position="static" className="">
    <Toolbar>
      <Grid container spacing={0}>
        <Grid item md={9} xs={12}>
          <Box display="flex">
            <IconButton
              onClick={toggleMenu}
              color="default"
              aria-label="Menu"
              style={{ width: 40, color: "#fff" }}
            >
              {menu ? (
                <NavigationClose color="inherit" />
              ) : (
                <NavigationMenu color="inherit" />
              )}
            </IconButton>
            <Link
              to="/"
              aria-label="Home"
              style={{
                verticalAlign: "middle",
                display: "flex",
                flex: 1,
                marginLeft: -40,
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <Brand
                style={{
                  color: "#fff",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                }}
              />
            </Link>
            <Hidden mdUp>
              <Box position="absolute" right={16} top={6}>
                <ToggleTheme labelPlacement="start" color={"default"} />
              </Box>
            </Hidden>
          </Box>
        </Grid>
        <Grid
          item
          md={3}
          xs={12}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Button component={Link} to="/" color="inherit" activeClassName="MuiButton-outlined">
            Home
          </Button>
          <Button component={Link} to="/blog/" color="inherit" activeClassName="MuiButton-outlined">
            Blog
          </Button>
          <Button component={Link} to="/shop/" color="inherit" activeClassName="MuiButton-outlined">
            Shop
          </Button>
          <Hidden smDown>
            <ToggleTheme labelPlacement="start" color={"default"} />
          </Hidden>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  menu: PropTypes.bool,
  toggleMenu: PropTypes.func,
}

Header.defaultProps = {
  menu: false,
  toggleMenu: () => {},
}

export default Header
