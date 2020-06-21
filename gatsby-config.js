require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

console.log(process.env.PUBLIC_URL)

module.exports = {
  pathPrefix: "/elevatejs-blog",
  siteMetadata: {
    title: `ElevateJS`,
    siteUrl: process.env.PUBLIC_URL,
    description: `Elevate JavaScript delivers in depth breakdowns of popular open source libraries.`,
    author: `@rphansen91`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    "gatsby-theme-material-ui",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GA,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#005c97`,
        theme_color: `#005c97`,
        display: `minimal-ui`,
        icon: `src/images/icon_1024.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
          },
          {
            resolve: "gatsby-remark-images",
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: "gatsby-source-gh-readme",
      options: {
        gitHubToken: `${process.env.GITHUB_API_TOKEN}`
      }
    },
    {
      resolve: "gatsby-plugin-static-folders",
      options: {
        folders: ["./src/images"],
      },
    },
    // {
    //   resolve: `gatsby-plugin-s3`,
    //   options: {
    //       bucketName: 'elevatejs.com',
    //       protocol: 'https',
    //       hostname: 'www.elevatejs.com',
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
