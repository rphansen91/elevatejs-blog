import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { TopBannerDisplayAd, BottomBannerDisplayAd } from "../../ads/slots"
import TwitterFeed from "../Social/TwitterFeed"
import Layout from "../Layout"
import "./style.css"
import ListItem from "@material-ui/core/ListItem"
import IconButton from "@material-ui/core/IconButton"
import ListItemAvatar from "@material-ui/core/ListItemAvatar"
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import Avatar from "@material-ui/core/Avatar"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import CardHeader from "@material-ui/core/CardHeader"
import List from "@material-ui/core/List"
import Link from "@material-ui/core/Link"
import GitHub from "@material-ui/icons/GitHub"
import Twitter from "@material-ui/icons/Twitter"
import Email from "@material-ui/icons/Email"
import ryanImg from "../../images/ryan.jpeg"

export const About = () => (
  <Container maxWidth="sm">
    <section>
      <Box mb={2}>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          Elevate JavaScript delivers in depth breakdowns of popular open source
          libraries.
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          TypeScript, React, and GraphQL when used together make for an
          extremely effective web stack. The tools used within the JavaScript
          ecosystem iterate rapidly, which makes it difficult to stay on top of
          the latest and greatest.
        </Typography>
      </Box>
      <Box mb={2}>
        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
          At ElevateJS we strongly believe having a strong understanding of
          these core tools (TypeScript, React, and GraphQL) will allow any
          development team to adapt quickly to changing business goals and
          deliver high quality resilient software to the end user.
        </Typography>
      </Box>
      <Paper>
        <Box p={2} pb={0}>
          <Typography style={{ textAlign: "left" }}>Editor</Typography>
        </Box>
        <List disablePadding>
          <ListItem>
            <ListItemAvatar>
              <Avatar src={ryanImg}>RPH</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Ryan P. Hansen"
              secondary={
                <Link href="mailto:ryan@elevatejs.com">ryan@elevatejs.com</Link>
              }
            />
            <ListItemSecondaryAction>
              <IconButton
                size="small"
                component="a"
                href="https://github.com/rphansen91"
              >
                <GitHub />
              </IconButton>
              <IconButton
                size="small"
                component="a"
                href="https://twitter.com/@elevatejs"
              >
                <Twitter />
              </IconButton>
              <IconButton
                size="small"
                component="a"
                href="mailto:ryan@elevatejs.com"
              >
                <Email />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Paper>
    </section>
    {/* <section className="about">
      <div className="about-content">
      <FbFeed page="elevatejs" name="ElevateJS" tabs="timeline, events" />
      </div>
      <div className="about-content">
      <TwitterFeed username="elevatejs" />
      </div>
      <div className="about-content">
      <InstaPosts
      username="elevatejs"
      link="edfee4f5133f008b0c0787bf13bede2b061e23953e3298f30356155e5f35197e"
      />  
      </div>
    </section> */}
  </Container>
)

export default () => (
  <Layout
    mountains
    content={
      <>
        <TopBannerDisplayAd />
        <Box pt={3}>
          <Typography variant="h1" color="textPrimary" className="text-center">
            About
          </Typography>
        </Box>
        <Box p={3}>
          <About />
        </Box>
        <BottomBannerDisplayAd />
      </>
    }
    sidebar={
      <Box className="article-sidebar" p={2}>
        <TwitterFeed username="elevatejs" />
        <Box pt={2} />
      </Box>
    }
  />
)
