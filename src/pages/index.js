import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Hi! {data.site.siteMetadata.title}</h1>
      {data.animals.allPosts.map(({ id, title }) => {
        return <Card key={id} title={title} />
      })}
      {data.swapi.allFilms.edges.map(({ node }) => {
        return <Card key={node.title} {...node} />
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    swapi {
      allFilms {
        edges {
          node {
            title
            director
          }
        }
      }
      allSpecies {
        edges {
          node {
            name
          }
        }
      }
    }
    animals {
      allPosts {
        id
        title
      }
    }
  }
`
