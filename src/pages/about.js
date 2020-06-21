import React from "react"
import Layout from "../components/layout"
import SEO from "../ui/SEO"
import About from "../ui/About"

const AboutPage = () => (
  <Layout>
    <SEO title="ElevateJS | About" path={"/about/"} />
    <About />
  </Layout>
)

export default AboutPage
