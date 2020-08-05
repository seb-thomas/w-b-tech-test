import React from "react"
import { graphql } from "gatsby"
import { useQuery, gql } from "@apollo/client"
import Layout from "../components/layout"
import Card from "../components/card"
import AddAnimalCard from "../components/addAnimalCard"

const ANIMAL_QUERY = gql`
  query GetAnimals {
    allAnimals {
      id
      name
      type
      diet
      isExtinct
    }
  }
`

function Animals() {
  const { loading, error, data } = useQuery(ANIMAL_QUERY, { pollInterval: 500 })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  console.log(data)

  return data.allAnimals.map(animal => <Card key={animal.id} {...animal} />)
}

export default function Home({ data }) {
  return (
    <Layout>
      <h1>{data.site.siteMetadata.title}</h1>
      <Animals />
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
