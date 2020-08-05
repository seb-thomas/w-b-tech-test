import React from "react"
import PropTypes from "prop-types"
import { gql, useMutation } from "@apollo/client"

const DELETE_ANIMAL = gql`
  mutation removeAnimal($id: ID!) {
    removeAnimal(id: $id)
  }
`

const Card = ({ id, name, type, diet, isExtinct }) => {
  // const [removeAnimal] = useMutation(DELETE_ANIMAL, {
  //   update(cache, { data: { removeAnimal } }) {
  //     cache.modify({
  //       fields: {
  //         animals(existingAnimals = []) {
  //           const newAnimalRef = cache.writeFragment({
  //             data: removeAnimal,
  //             fragment: gql`
  //               fragment NewAnimal on Animal {
  //                 id
  //                 name
  //               }
  //             `,
  //           })
  //           return [...existingAnimals, newAnimalRef]
  //         },
  //       },
  //     })
  //   },
  // })
  const [removeAnimal, { data }] = useMutation(DELETE_ANIMAL)

  const handleOnClick = () => {
    // fetch("http://localhost:3022/graphql", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     query: `
    //     mutation removeAnimal($id: ID!) {
    //       removeAnimal(id: $id)
    //     }
    //     `,
    //     variables: { id },
    //   }),
    // })
    //   .then(res => res.json())
    //   .then(res => console.log(res.data))

    removeAnimal({ variables: { id } })
  }
  return (
    <dl>
      <dt>{name}</dt>
      <dd>{type}</dd>
      <dd>{diet}</dd>
      <dd>Is extinct: {isExtinct ? "Yes" : "No"}</dd>
      <button onClick={handleOnClick}>Delete</button>
    </dl>
  )
}

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  diet: PropTypes.string.isRequired,
  isExtinct: PropTypes.bool.isRequired,
}
// mutation removeAnimal($id: ID!) {
//   removePost(id: $id)
// }
// mutation addPost($id: ID!, $title: String!, $views: Int!, $user_id: ID!) {
//   createPost(id: $id, title: $title, views: $views, user_id: $user_id) {
//       id,
//       title,
//       views,
//       user_id
//   }
// }

export default Card
