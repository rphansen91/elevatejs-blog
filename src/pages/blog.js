import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../ui/SEO"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import CardActions from "@material-ui/core/CardActions"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import { TopBannerDisplayAd, BottomBannerDisplayAd } from "../ads/slots"
import Article from "../ui/Article"
import orderBy from "lodash/orderBy"

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter)
  return (
    <Layout>
      <SEO title={"Blog"} path={"/blog"} />
      <TopBannerDisplayAd />
      <Box pt={3}>
        <Typography variant="h1" color="textPrimary" align="center">
          Blog
        </Typography>
      </Box>
      <Box p={3}>
        <Grid container spacing={3}>
          {orderBy(posts, "publishedAt", "desc").reduce((acc, a, i) => {
            acc.push(
              <Grid
                item
                lg={3}
                md={4}
                xs={12}
                style={{ marginBottom: "0.3em" }}
                key={i}
              >
                <Link
                  aria-label="Read More"
                  className="d-block"
                  to={`${a.path}`}
                >
                  <Article
                    imageSize={160}
                    image={a.urlToImage?.childImageSharp?.fluid?.src}
                    title={a.title}
                    style={{ width: "100%" }}
                    actions={
                      <CardActions>
                        <Button
                          color="secondary"
                          aria-label="Read More"
                          variant="contained"
                        >
                          Read More
                        </Button>
                      </CardActions>
                    }
                  />
                </Link>
              </Grid>
              // <div className="col-lg-4 col-md-6 mb-4" key={i + "ad"}>
              //   <NewsDisplayAd
              //     style={{ maxWidth: "100%", margin: "auto", width: 350 }}
              //   />
              // </div>
            )
            return acc
          }, [])}
        </Grid>
      </Box>
      <BottomBannerDisplayAd />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {frontmatter: {type: { eq: "post" }} },
      sort: { order: DESC, fields: [frontmatter___publishedAt] }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            publishedAt(formatString: "MMMM DD, YYYY")
            title
            description
            author
            urlToImage {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            sourceName
            path
          }
        }
      }
    }
  }
`
