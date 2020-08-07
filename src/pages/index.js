import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AddAnimal from "../components/addAnimal"
import AnimalList from "../components/animalList"
import { $CardList } from "../styles"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>{data.site.siteMetadata.title}</h1>

      <$CardList>
        <AnimalList />
        <AddAnimal />
      </$CardList>
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
  }
`
