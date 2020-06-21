import React from "react"
import { ArticleList } from "./List"
import { graphql, useStaticQuery } from "gatsby"

export default (props) => {
  const data = useStaticQuery(query)
  const posts = data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter)
  return <ArticleList {...props} posts={posts} title="Projects" />
}


export const query = graphql`
  query SidebarProjects {
    allMarkdownRemark(
      filter: {frontmatter: {type: { eq: "project" }} },
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
