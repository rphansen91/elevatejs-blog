import React from "react"
import Brand from "../Brand"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import Hidden from "@material-ui/core/Hidden"
import { Link } from "gatsby"
import elevateJsBkgd from "../../images/elevatejs_bkgd_1.91.png"
import "./style.css"

export default () => (
  <Box className="page-footer" position="relative">
    <img
      src={elevateJsBkgd}
      alt="Elevate JS Background"
      className="page-footer-img"
    />
    <Grid container spacing={0} style={{ position: "relative" }}>
      <Grid item sm={4} md={3} xs={12}>
        <div
          style={{
            margin: 'auto',
            display: "flex",
            maxWidth: 160,
            // justifyContent: "center",
            // alignItems: "center",
            flexDirection: "column",
            color: "#fff",
          }}
        >
          <Button color="inherit" to="/" component={Link} activeClassName="MuiButton-outlined">
            Home
          </Button>
          <Button color="inherit" to="/blog/" component={Link} activeClassName="MuiButton-outlined">
            Blog
          </Button>
          <Button color="inherit" to="/shop/" component={Link} activeClassName="MuiButton-outlined">
            Shop
          </Button>
          <Button color="inherit" to="/about/" component={Link} activeClassName="MuiButton-outlined">
            About
          </Button>
          <Button color="inherit" to="/settings/" component={Link} activeClassName="MuiButton-outlined">
            Settings
          </Button>
        </div>
        <Hidden smUp>
          <Box style={{ height: 160 }} />
        </Hidden>
      </Grid>
    </Grid>
  </Box>
)

const FooterLink = ({ children, to }) => {
  return (
    <Link
      to={to}
      style={{ color: "white", margin: "0 4px", textDecoration: "none" }}
    >
      <Typography paragraph>{children}</Typography>
    </Link>
  )
}
