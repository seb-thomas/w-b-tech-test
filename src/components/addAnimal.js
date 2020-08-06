import React, { useReducer } from "react"
import { gql, useMutation } from "@apollo/client"
import { v4 as uuidv4 } from "uuid"
import {
  Fieldset,
  Checkbox,
  TextField,
  Select,
  WindowHeader,
  Toolbar,
  Button,
} from "react95"

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
  id,
  type,
  name,
  diet,
  isExtinct,
  isEditing,
  setIsEditing,
  amEditing,
}) => {
  // Connect the useMutation hooks with queries
  const [addAnimal] = useMutation(ADD_ANIMAL)
  const [updateAnimal] = useMutation(UPDATE_ANIMAL)
  // Set up initial state so we can use it to clear state later
  const initialState = {
    id: id ? id : uuidv4(),
    type: type ? type : "",
    name: name ? name : "",
    diet: diet ? diet : "",
    isExtinct: isExtinct ? isExtinct : false,
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
      <WindowHeader>
        <span role="img" aria-label="Kiwi">
          🥝
        </span>
        Kiwi.app
      </WindowHeader>
      <Toolbar noPadding>
        <Button variant="menu">Upload</Button>
      </Toolbar>

      <Fieldset label="Name">
        <TextField
          name="name"
          placeholder="Type here..."
          value={formData.name}
          onChange={event => handleChange(event)}
          fullWidth
        />
      </Fieldset>
      <Fieldset label="Type">
        <Select
          name="type"
          value={formData.type}
          onChange={event => handleChange(event)}
          defaultValue=""
          options={typeOptions}
          width="100%"
        />
      </Fieldset>
      <Fieldset label="Diet">
        <label>
          Name
          <Select
            name="diet"
            value={formData.diet}
            onChange={event => handleChange(event)}
            defaultValue=""
            options={dietOptions}
            width="100%"
          />
        </label>
      </Fieldset>

      <Fieldset label="Is the animal extinct?">
        <Checkbox
          label="Extinct"
          name="isExtinct"
          checked={formData.isExtinct}
          onChange={event => handleChange(event)}
        />
      </Fieldset>

      <button type="submit">{isEditing ? "Save" : "Add animal"}</button>
      <button
        type="button"
        onClick={() => {
          amEditing(true)
          console.log(amEditing())
        }}
      >
        amEditing
      </button>
    </form>
  )
}

export default AddAnimal
