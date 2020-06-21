import React from "react"
import Typography from "@material-ui/core/Typography"
import { NewsDisplayAd } from "../../ads/slots"
import Article from "../Article"
import CardActions from "@material-ui/core/CardActions"
import Button from "@material-ui/core/Button"
import { Link } from "gatsby"
import orderBy from "lodash/orderBy"


export const ArticleList = ({ title, activePost, posts, filter = v => v }) => {
  return (
    <div className="article-sidebar">
      <section />
      <div className="toc">
      <Typography variant="h4" color="textPrimary" className="my-2 text-center">
        {title}
      </Typography>

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
    </div>
  )
}