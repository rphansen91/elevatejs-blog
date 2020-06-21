/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import Header from "./header"
import Footer from "../ui/Footer";
import Menu from "../ui/Menu";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import "./layout.css"

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false)
  const toggleMenu = () => setOpen(!open)
  return (
    <>
      <Menu open={open} />
      <div className={`App ${open ? 'open' : ''}`}>
        <Header menu={open} toggleMenu={toggleMenu} />
        <Toolbar />
        <Hidden mdUp>
          <Toolbar />
        </Hidden>
        <main style={{ flexGrow: 1 }}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
