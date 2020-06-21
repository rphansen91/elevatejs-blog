const path = require(`path`)
const projects = ["ts-mongo-codegen", "react-hawk", "data-hoc", "redux-delta"]

exports.createPages = async (gatsbyApi) => {
  // await createProjectMarkdownPages(gatsbyApi)
  await createMarkdownPages(gatsbyApi)
}

async function createProjectMarkdownPages({ actions, graphql }) {
  const { createPage } = actions
  const projectTemplate = path.resolve(`src/templates/project.js`)
  for (const project of projects) {
    const result = await graphql(
      `
        query githubProjectByTitle($name: String!) {
          githubReadme(title: { eq: $name }) {
            title
            description
            readme
          }
        }
      `,
      { name: project }
    )
    if (result.errors) {
      console.log(project, result.errors)
      throw new Error("Things broke, see console output above")
    }
    if (result.data.githubReadme) {
      const { title, description, readme } = result.data.githubReadme
      if (title) {
        createPage({
          path: `/project/${title}`,
          component: projectTemplate,
          context: {
            title,
          }, // additional data can be passed via context
        })
      }
    }
  }
}

async function createMarkdownPages({ actions, graphql }) {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/post.js`)
  const result = await graphql(`
    {
      allMarkdownRemark(
        limit: 1000
        sort: { order: DESC, fields: [frontmatter___publishedAt] }
        filter: { frontmatter: { type: { eq: "post" } } }
      ) {
        edges {
          node {
            frontmatter {
              path
            }
            excerpt(pruneLength: 140)
            id
          }
        }
      }
    }
  `)
  if (result.errors) {
    console.log(result.errors)
    throw new Error("Things broke, see console output above")
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log(node)
    if (node.frontmatter.path) {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      })
    }
  })
}
