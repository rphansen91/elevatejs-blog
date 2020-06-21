import React from "react"
import Layout from "../components/layout"
import Post from "../ui/Post"
import { graphql } from "gatsby"

export default function Template({ data, error }) {
  const { githubReadme } = data || {} // data.markdownRemark holds your post data
  const { title, description, readme } = githubReadme || {}
  return (
    <Layout>
      <Post
        post={{ title, description, htmlContent: readme }}
        path={`/post/${frontmatter.publishedAt}`}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query githubProjectByTitle($title: String!) {
    githubReadme(title: { eq: $title }) {
      title
      description
      readme
    }
  }
`
