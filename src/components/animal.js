import React, { useState } from "react"
import PropTypes from "prop-types"
import { gql, useMutation } from "@apollo/client"
import AddAnimal from "./addAnimal"
import { Window, WindowContent } from "react95"

const DELETE_ANIMAL = gql`
  mutation removeAnimal($id: ID!) {
    removeAnimal(id: $id)
  }
`

const Animal = ({ id, name, type, diet, isExtinct }) => {
  const [removeAnimal, { data }] = useMutation(DELETE_ANIMAL)
  const [isEditing, setIsEditing] = useState(false)

  const handleOnDeleteClick = () => {
    removeAnimal({ variables: { id } })
  }

  const handleOnEditClick = bool => {
    setIsEditing(bool)
  }

  const staticCard = (
    <dl>
      <dt>{name}</dt>
      <dd>{type}</dd>
      <dd>{diet}</dd>
      <dd>Is extinct: {isExtinct ? "Yes" : "No"}</dd>
      <button onClick={handleOnDeleteClick} data-cy="delete-button">
        Delete
      </button>
      <button onClick={() => handleOnEditClick(true)}>Edit</button>
    </dl>
  )

  const editingCard = (
    <AddAnimal
      id={id}
      name={name}
      type={type}
      diet={diet}
      isExtinct={isExtinct}
      isEditing
      setIsEditing={handleOnEditClick}
    />
  )

  return <div data-cy="animal-card">{isEditing ? editingCard : staticCard}</div>
}

Animal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  diet: PropTypes.string.isRequired,
  isExtinct: PropTypes.bool.isRequired,
}

export default Animal
