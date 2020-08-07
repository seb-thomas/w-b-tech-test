import React from "react"
import PropTypes from "prop-types"
import { $Card } from "../styles"

const StaticAnimal = ({
  name,
  type,
  diet,
  isExtinct,
  removeAnimal,
  setIsEditing,
}) => {
  return (
    <$Card as="dl">
      <dt>{name}</dt>
      <dd>{type}</dd>
      <dd>{diet}</dd>
      <dd>Is extinct: {isExtinct ? "Yes" : "No"}</dd>
      <button onClick={removeAnimal} data-cy="delete-button">
        Delete
      </button>
      <button onClick={() => setIsEditing(true)} data-cy="edit-button">
        Edit
      </button>
    </$Card>
  )
}

StaticAnimal.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

StaticAnimal.defaultProps = {
  label: "",
  value: "",
  onChange: () => {},
  defaultValue: "",
  placeholder: "",
}

export default StaticAnimal
