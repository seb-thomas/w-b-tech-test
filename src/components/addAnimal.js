import React, { useReducer } from "react"
import { gql, useMutation } from "@apollo/client"
import { v4 as uuidv4 } from "uuid"
import PropTypes from "prop-types"
import Select from "./form/select"
import TextInput from "./form/text"
import Checkbox from "./form/checkbox"

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

const UPDATE_ANIMAL = gql`
  mutation updateAnimal(
    $id: ID!
    $name: String!
    $type: String!
    $diet: String!
    $isExtinct: Boolean!
  ) {
    updateAnimal(
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

const AddAnimal = ({
  id = uuidv4(),
  type,
  name,
  diet,
  isExtinct,
  isEditing,
  setIsEditing,
}) => {
  // Connect the useMutation hooks with queries
  const [addAnimal] = useMutation(ADD_ANIMAL)
  const [updateAnimal] = useMutation(UPDATE_ANIMAL)
  // Set up initial state so we can use it to clear state later
  const initialState = {
    id,
    type,
    name,
    diet,
    isExtinct,
  }

  // useReducer to keep state for all form fields in one place
  const [formData, setFormData] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    { ...initialState }
  )

  const handleSubmit = event => {
    event.preventDefault()

    // Call the mutation
    isEditing
      ? updateAnimal({ variables: { ...formData } })
      : addAnimal({ variables: { ...formData } })
    setIsEditing(false)
    // Clear the form data
    return setFormData({ ...initialState })
  }

  const handleChange = event => {
    const { name, value, type, checked } = event.target

    // Set the form fields state
    setFormData({ [name]: type === "checkbox" ? checked : value })
  }

  const typeOptions = [
    { value: "mammal", label: "Mammal" },
    { value: "reptile", label: "Reptile" },
    { value: "fish", label: "Fish" },
    { value: "amphibious", label: "Amphibious" },
  ]

  const dietOptions = [
    { value: "herbivore", label: "Herbivore" },
    { value: "carnivore", label: "Carnivore" },
  ]

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        name="name"
        placeholder="Type here..."
        value={formData.name}
        onChange={event => handleChange(event)}
      />
      <Select
        label="Type"
        name="type"
        value={formData.type}
        onChange={event => handleChange(event)}
        defaultValue=""
        options={typeOptions}
      />
      <Select
        label="Diet"
        name="diet"
        value={formData.diet}
        onChange={event => handleChange(event)}
        defaultValue=""
        options={dietOptions}
      />
      <Checkbox
        label="Extinct"
        name="isExtinct"
        checked={formData.isExtinct}
        onChange={event => handleChange(event)}
      />
      <button type="submit">{isEditing ? "Save" : "Add animal"}</button>
    </form>
  )
}

AddAnimal.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  diet: PropTypes.string,
  isExtinct: PropTypes.bool,
  setIsEditing: PropTypes.func,
}

AddAnimal.defaultProps = {
  name: "",
  type: "",
  diet: "",
  isExtinct: false,
  setIsEditing: () => {},
}

export default AddAnimal
