import React from "react"
import PropTypes from "prop-types"
import { gql, useMutation } from "@apollo/client"

const ADD_ANIMAL = gql`
  mutation createAnimal(
    $id: ID!
    $name: String!
    $type: String!
    $diet: String!
    $isExtinct: Boolean!
  ) {
    createAnimal(
      id: $id
      name: $name
      type: $type
      diet: $diet
      isExtinct: $isExtinct
    ) {
      id
      type
      name
      diet
      isExtinct
    }
  }
`

const AddAnimalCard = ({}) => {
  const [addAnimal, { data }] = useMutation(ADD_ANIMAL)

  const handleOnClick = () =>
    addAnimal({
      variables: {
        id: "21",
        name: "Ligeress",
        type: "Mammal",
        diet: "Carnivore",
        isExtinct: true,
      },
    })

  return (
    <div>
      <button onClick={handleOnClick}>Add</button>
    </div>
  )
}

export default AddAnimalCard
