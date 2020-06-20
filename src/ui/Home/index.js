import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import { TopBannerDisplayAd, BottomBannerDisplayAd } from "../../ads/slots"
import Layout from "../Layout"
import ArticleSidebar from "../Article/Sidebar"
import "./style.css"

export default ({ coins, pair }) => (
  <Layout
    content={
      <>
        <TopBannerDisplayAd />
        <section />
        <Typography
          variant="h4"
          color="textPrimary"
          align="center"
          style={{ marginBottom: "0.3rem" }}
        >
          Articles
        </Typography>
        
        <BottomBannerDisplayAd />
      </>
    }
    sidebar={<ArticleSidebar />}
  />
)
