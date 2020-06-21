import React from "react"
import Typography from "@material-ui/core/Typography"
import { TopBannerDisplayAd, BottomBannerDisplayAd } from "../../ads/slots"
import FbFeed from "../Social/FbFeed"
import InstaPosts from "../Social/InstaPosts"
import TwitterFeed from "../Social/TwitterFeed"
import "./style.css"

export default () => (
  <div>
    <TopBannerDisplayAd />
    <section />
    <div className="container">
      <section className="text-center">
        <Typography variant="h1" color="textPrimary">
          About
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Elevate JavaScript delivers in depth breakdowns of popular open source
          libraries.
        </Typography>
      </section>
      <section className="about">
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
      </section>
    </div>
    <BottomBannerDisplayAd />
  </div>
)
