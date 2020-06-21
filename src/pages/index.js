import React from "react"
import Layout from "../components/layout"
import SEO from "../ui/SEO"
import Home from "../ui/Home"

const IndexPage = () => (
  <Layout>
    <SEO title="ElevateJS | Home" />
    <Home />
  </Layout>
)

export default IndexPage
