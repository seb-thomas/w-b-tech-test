import React from "react"
import { useQuery } from "@apollo/client"
import Animal from "./animal"
import { ALL_ANIMALS } from "../utils/queries"

const AnimalList = () => {
  const { loading, error, data } = useQuery(ALL_ANIMALS, { pollInterval: 500 })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return data.allAnimals.map(animal => <Animal key={animal.id} {...animal} />)
}

export default AnimalList
