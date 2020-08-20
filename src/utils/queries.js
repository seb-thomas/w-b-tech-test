import { gql } from "@apollo/client"

// These are the GraphQL queries used throughout the app
export const ADD_ANIMAL = gql`
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

export const UPDATE_ANIMAL = gql`
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

export const ALL_ANIMALS = gql`
  query GetAnimals {
    allAnimals {
      id
      name
      type
      diet
      isExtinct
    }
  }
`

export const DELETE_ANIMAL = gql`
  mutation removeAnimal($id: ID!) {
    removeAnimal(id: $id)
  }
`
