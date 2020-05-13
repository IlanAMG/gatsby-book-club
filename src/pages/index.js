import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {

  return (
    <Layout>
      <SEO title="Home" />
        {data.allBook.edges.map(edge => {
          return (
            <div key={edge.node.id}>
              <h2>
                {edge.node.title} - <small>{edge.node.author.name}</small>
              </h2>
              <div>
                {edge.node.summary}
              </div>
              <Link to={`/book/${edge.node.id}`}>
                Rejoignez la conversation
              </Link>
            </div>
          )
        })}
    </Layout>
  )
}
 

export const query = graphql`
{
  allBook {
    edges {
      node {
        author {
          name
        }
        title
        summary
        id
      }
    }
  }
}
`

export default IndexPage
