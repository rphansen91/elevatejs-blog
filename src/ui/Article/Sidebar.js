import React from "react"
import Typography from "@material-ui/core/Typography"
import { NewsDisplayAd } from "../../ads/slots"
import Article from "../Article"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import { Link, graphql, useStaticQuery } from "gatsby"
import CircularProgress from "@material-ui/core/CircularProgress"
import orderBy from "lodash/orderBy"

export default ({ q, activePost, loading, error, filter = v => v }) => {
  const data = useStaticQuery(query)
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter)
  return (
    <div className="article-sidebar">
      <section />
      <Typography variant="h4" color="textPrimary" className="my-2 text-center">
        Articles {error ? `- ${error}` : ""}
      </Typography>

      {loading && <CircularProgress style={{ margin: "auto" }} />}
      {orderBy(
        posts,
        "publishedAt",
        "desc"
      )
        .filter(filter)
        .slice(0, 6)
        .reduce((acc, a, i) => {
          console.log(a)
          if (i && i % 2 === 0) {
            acc.push(
              <NewsDisplayAd
                style={{
                  display: "block",
                  maxWidth: "100%",
                  margin: "auto",
                  width: 350,
                }}
                key={i + "ad"}
              />
            )
          }
          const isActive =
            activePost &&
            activePost.publishedAt === a.publishedAt &&
            activePost.title === a.title
          acc.push(
            <Link
              aria-label="Read More"
              style={{ padding: "12px 24px", display: "block" }}
              to={a.path}
              key={i}
            >
              <Article
                isActive={isActive}
                title={a.title}
                image={i < 4 && a.urlToImage?.childImageSharp?.fluid?.src}
                actions={
                  <CardActions>
                    <Button
                      color="primary"
                      aria-label="Read More"
                      variant="contained"
                      color="secondary"
                    >
                      {isActive ? "Currently Reading" : "Read More"}
                    </Button>
                  </CardActions>
                }
              />
            </Link>
          )
          return acc
        }, [])}
    </div>
  )
}

export const query = graphql`
  query Sidebar {
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
            urlToImage  {
              childImageSharp {
                fluid(maxWidth: 540, quality: 100) {
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
