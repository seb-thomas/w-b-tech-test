import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>Hi! {data.site.siteMetadata.title}</h1>
      {data.swapi.allFilms.edges.map(({ node }) => {
        const { id, title, director } = node

        return (
          <dd key={id}>
            <dt>{title}</dt>
            <dl>{director}</dl>
          </dd>
        )
      })}
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
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
  }
`
