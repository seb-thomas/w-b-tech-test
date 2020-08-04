import React from "react"
import PropTypes from "prop-types"

const Card = ({ id, name, type, diet, isExtinct }) => {
  const handleOnClick = () => {
    console.log("hey")
    // fetch({
    //   url: "http://localhost:3022/",
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ query: "query allPosts { allPosts { id } }" }),
    // })
    //   .then(res => res.json())
    //   .then(data => console.log({ data }))
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

export default Card
