import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../ui/SEO"
import Shop from "../ui/Shop"

export default ({  }) => (
  <Layout>
    <SEO title="ElevateJS | Shop" path={"/shop/"} />
    <Shop products={[]} />
  </Layout>
)

// export const query = graphql`
// query {
//     blockQl {
//         products {
//             name
//             amount
//             description
//             images
//             currency
//         }
//     }
// }
// `