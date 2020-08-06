import React, { useReducer } from "react"
import { gql, useMutation } from "@apollo/client"
import { v4 as uuidv4 } from "uuid"

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
  const [addAnimal, { data }] = useMutation(ADD_ANIMAL)
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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={event => handleChange(event)}
        />
      </label>
      <label>
        Type:
        <select
          name="type"
          value={formData.type}
          onChange={event => handleChange(event)}
        >
          <option defaultValue></option>
          <option value="mammal">Mammal</option>
          <option value="reptile">Reptile</option>
          <option value="fish">Fish</option>
          <option value="amphibious">Amphibious</option>
        </select>
      </label>
      <label>
        Diet:
        <select
          name="diet"
          value={formData.diet}
          onChange={event => handleChange(event)}
        >
          <option defaultValue></option>
          <option value="herbivore">Herbivore</option>
          <option value="carnivore">Carnivore</option>
        </select>
      </label>
      <label>
        Is Extinct:
        <input
          name="isExtinct"
          type="checkbox"
          checked={formData.isExtinct}
          onChange={event => handleChange(event)}
        />
      </label>

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
