import React from "react"
import Box from "@material-ui/core/Box"
import Typography from "@material-ui/core/Typography"
import { TopBannerDisplayAd, BottomBannerDisplayAd } from "../../ads/slots"
import FbFeed from "../Social/FbFeed"
import InstaPosts from "../Social/InstaPosts"
import TwitterFeed from "../Social/TwitterFeed"
import ArticleSidebar from "../Article/Sidebar"
import Layout from "../Layout"
import "./style.css"

export const About = () => (
  <div className="container">
    <section className="text-center">
      <Typography variant="subtitle1" color="textSecondary">
        Elevate JavaScript delivers in depth breakdowns of popular open source
        libraries.
      </Typography>
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
  </div>
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
