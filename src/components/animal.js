import React, { useState } from "react"
import PropTypes from "prop-types"
import { gql, useMutation } from "@apollo/client"
import AddAnimal from "./addAnimal"
import { makeVar } from "@apollo/client"

const DELETE_ANIMAL = gql`
  mutation removeAnimal($id: ID!) {
    removeAnimal(id: $id)
  }
`

const Animal = ({ id, name, type, diet, isExtinct }) => {
  const [removeAnimal, { data }] = useMutation(DELETE_ANIMAL)
  const [isEditing, setIsEditing] = useState(false)
  const amEditing = makeVar(false)

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
      <button onClick={handleOnDeleteClick}>Delete</button>
      <button onClick={() => handleOnEditClick(true)}>Edit</button>
    </dl>
  )

  console.log(amEditing())

  const editingCard = (
    <AddAnimal
      id={id}
      name={name}
      type={type}
      diet={diet}
      isExtinct={isExtinct}
      isEditing
      amEditing={amEditing}
      setIsEditing={handleOnEditClick}
    />
  )

  return (
    <div style={{ border: "3px solid", margin: "1rem", padding: "1rem" }}>
      {isEditing ? editingCard : staticCard}
      {amEditing() ? "am editing" : "am static"}
    </div>
  )
}

Animal.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  diet: PropTypes.string.isRequired,
  isExtinct: PropTypes.bool.isRequired,
}

export default Animal
