import React, { useState } from "react"
import PropTypes from "prop-types"
import { gql, useMutation } from "@apollo/client"
import AddAnimalCard from "./addAnimalCard"

const DELETE_ANIMAL = gql`
  mutation removeAnimal($id: ID!) {
    removeAnimal(id: $id)
  }
`

const UPDATE_ANIMAL = gql`
  mutation updateAnimal($id: ID!, $name: String!) {
    updateAnimal(id: $id, name: $name) {
      id
      name
    }
  }
`

const Card = ({ id, name, type, diet, isExtinct }) => {
  const [removeAnimal, { data }] = useMutation(DELETE_ANIMAL)
  const [updateAnimal] = useMutation(UPDATE_ANIMAL)
  const [isEditing, setIsEditing] = useState(false)

  const handleOnDeleteClick = () => {
    removeAnimal({ variables: { id } })
  }

  const handleOnEditClick = () => {
    setIsEditing(true)
    // updateAnimal({ variables: { id, name: "donkey" } })
  }

  const staticCard = (
    <dl>
      <dt>{name}</dt>
      <dd>{type}</dd>
      <dd>{diet}</dd>
      <dd>Is extinct: {isExtinct ? "Yes" : "No"}</dd>
      <button onClick={handleOnDeleteClick}>Delete</button>
      <button onClick={handleOnEditClick}>Edit</button>
    </dl>
  )

  const editingCard = (
    <AddAnimalCard
      id={id}
      name={name}
      type={type}
      diet={diet}
      isExtinct={isExtinct}
    />
  )

  return (
    <div style={{ border: "3px solid", margin: "1rem", padding: "1rem" }}>
      {isEditing ? editingCard : staticCard}
    </div>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  diet: PropTypes.string.isRequired,
  isExtinct: PropTypes.bool.isRequired,
}

export default Card
