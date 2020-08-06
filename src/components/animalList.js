import React from "react"
import { useQuery, gql } from "@apollo/client"
import Animal from "./animal"

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

const AnimalList = () => {
  const { loading, error, data } = useQuery(ANIMAL_QUERY, { pollInterval: 500 })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.allAnimals.map(animal => <Animal key={animal.id} {...animal} />)
}

export default AnimalList
