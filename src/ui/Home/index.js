import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import { TopBannerDisplayAd, BottomBannerDisplayAd } from "../../ads/slots"
import Layout from "../Layout"
import Brand from "../Brand"
import ArticleSidebar from "../Article/Sidebar"
import { Link } from "gatsby"

export default () => (
  <Layout
    mountains
    content={
      <Box position="relative">
        <TopBannerDisplayAd />
        {/* <Brand /> */}
        <Box
          textAlign="center"
          width="100%"
          position="relative"
          pt={5}
        >
          <Container maxWidth="sm">
            <Typography variant="h1" gutterBottom>
              JavaScript at first glance appears massive and impossible to
              tackle.
            </Typography>
            <Button component={Link} to="/blog/" color="secondary">
              Conquer The Mountain With Us!
            </Button>
            {/* <Typography variant="h5" gutterBottom>
              As you first venture in to the forrest, many trails pop up to lead
              you up the mountain.
            </Typography> */}
          </Container>
        </Box>
        {/* <img src={elevateJsBkgd} alt="Elevate JS Background" style={{ width: '100%' }} /> */}
        <BottomBannerDisplayAd />
      </Box>
    }
    sidebar={<ArticleSidebar />}
  />
)
