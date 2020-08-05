import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import AddAnimalCard from "../components/addAnimalCard"
import AnimalContainer from "../components/animalContainer"

export default function Home({ data }) {
  return (
    <Layout>
      <h1>{data.site.siteMetadata.title}</h1>
      <AnimalContainer />
      <AddAnimalCard />
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
