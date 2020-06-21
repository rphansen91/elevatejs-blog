import React from "react"
import Brand from "../Brand"
import Typography from "@material-ui/core/Typography"
import Grid from "@material-ui/core/Grid"
import { Link } from "gatsby"
import "./style.css"

export default () => (
  <div className="page-footer primary-gradient">
    <Grid container spacing={0}>
      <Grid item md={9} xs={12}>
        <section>
          <Brand
            style={{
              color: "#fff",
              cursor: "pointer",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 20,
            }}
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FooterLink to="/blog/">Blog</FooterLink>
            <FooterLink to="/shop/">Shop</FooterLink>
          </div>
        </section>
      </Grid>
      <Grid item md={3} xs={12} />
    </Grid>
  </div>
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
