import React from "react"
import PropTypes from "prop-types"

const Card = ({ id, name, type, diet, isExtinct }) => {
  const handleOnClick = () => {
    fetch("http://localhost:3022/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `
        mutation removeAnimal($id: ID!) {
          removeAnimal(id: $id)
        }
        `,
        variables: { id },
      }),
    })
      .then(res => res.json())
      .then(res => console.log(res.data))
  }
  return (
    <dl key={id}>
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
