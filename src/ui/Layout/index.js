import React from "react"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Hidden from "@material-ui/core/Hidden"
import Parallax from "./Parallax"

export default ({ content, sidebar, mountains }) => (
  <>
    <Grid container spacing={0}>
      <Grid item md={9} xs={12} className="main-content">
        <Box position='relative' zIndex={2}>
          {content}{" "}
        </Box>
        {mountains ? (
          <Hidden smDown>
            <Box mt={-8} zIndex={1}>
              <Parallax />
            </Box>
          </Hidden>
        ) : null}
      </Grid>
      <Grid item md={3} xs={12} className="sidebar-content border-left-2">
        {sidebar}
      </Grid>
    </Grid>
    {mountains ? (
      <Hidden mdUp>
        <Parallax />
      </Hidden>
    ) : null}
  </>
)
