import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Card from "../components/card"

export default function Home({ data }) {
  const [animals, setAnimals] = useState([])
  const fetchAnimals = async () => {
    const apiCall = await fetch("http://localhost:3022/graphql", {
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

    setAnimals(results.data.allAnimals)
  }
  useEffect(() => {
    fetchAnimals()
  }, [animals])

  const { jsonGraphQlServer } = data
  return (
    <Layout>
      {animals.length &&
        animals.map(animal => {
          return <Card key={animal.id} {...animal} />
        })}
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
