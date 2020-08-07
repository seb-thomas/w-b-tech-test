import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { $KeyValue, $ButtonGroup } from "../styles"

const StaticAnimal = ({
  name,
  type,
  diet,
  isExtinct,
  removeAnimal,
  setIsEditing,
}) => {
  const keyValuePairs = [
    {
      key: "Type:",
      value: type,
    },
    {
      key: "Diet:",
      value: diet,
    },
    {
      key: "Is extinct:",
      value: isExtinct ? "Yes" : "No",
    },
  ]

  const keyValue = (key, value) => {
    return (
      <$KeyValue key={key}>
        <span className="key">{key}</span>
        <span className="value">{value}</span>
      </$KeyValue>
    )
  }

  return (
    <Fragment>
      <h4 className="title">{name}</h4>
      {keyValuePairs.map(({ key, value }) => keyValue(key, value))}

      <$ButtonGroup>
        <button onClick={removeAnimal} data-cy="delete-button">
          Delete
        </button>
        <button onClick={() => setIsEditing(true)} data-cy="edit-button">
          Edit
        </button>
      </$ButtonGroup>
    </Fragment>
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
