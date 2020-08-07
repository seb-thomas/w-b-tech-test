import React, { useState } from "react"
import PropTypes from "prop-types"
import { gql, useMutation } from "@apollo/client"
import AddAnimal from "./addAnimal"
import StaticAnimal from "./staticAnimal"
import { $Card } from "../styles"

const DELETE_ANIMAL = gql`
  mutation removeAnimal($id: ID!) {
    removeAnimal(id: $id)
  }
`

const Animal = props => {
  const { id } = props
  const [removeAnimal] = useMutation(DELETE_ANIMAL)
  const [isEditing, setIsEditing] = useState(false)

  const handleOnDeleteClick = () => {
    removeAnimal({ variables: { id } })
  }

  const handleOnEditClick = bool => {
    setIsEditing(bool)
  }

  const editingCard = (
    <AddAnimal {...props} isEditing setIsEditing={handleOnEditClick} />
  )

  const staticCard = (
    <StaticAnimal
      {...props}
      removeAnimal={handleOnDeleteClick}
      setIsEditing={handleOnEditClick}
    />
  )

  return (
    <$Card data-cy="animal-card">{isEditing ? editingCard : staticCard}</$Card>
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
