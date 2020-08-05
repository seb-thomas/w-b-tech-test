// import React from "react"
import React, { useState, useEffect } from "react"
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
  const [animalData, setAnimalData] = useState({})
  const fetchAnimals = async () => {
    const apiCall = await fetch("http://localhost:3022/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        query MyQuery {
          allAnimals {
            id,
            name,
            type,
            diet,
            isExtinct,
          }
        }
        `,
      }),
    })
    const results = await apiCall.json()

    setAnimalData(results.data)
    console.log(results.data)
    console.log(animalData)
  }
  useEffect(() => {
    fetchAnimals()
  }, [])

  const { jsonGraphQlServer } = data
  return (
    <Layout>
      <h1>Fetch</h1>
      {animalData.animals &&
        animalData.animals.length &&
        animalData.animals.map(animal => {
          return <Card key={animal.id} {...animal} />
        })}
      <hr />
      <h1>Apollo</h1>
      <Animals />
      <hr />
      <AddAnimalCard />
      <h1>{data.site.siteMetadata.title}</h1>
      {jsonGraphQlServer.allAnimals.map(animal => {
        return <Card key={animal.id} {...animal} />
      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    jsonGraphQlServer {
      allAnimals {
        id
        name
        type
        diet
        isExtinct
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
