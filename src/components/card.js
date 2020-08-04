import React from "react"
import PropTypes from "prop-types"

const Card = ({ id, name, type, diet, isExtinct }) => (
  <dl key={id}>
    <dt>{name}</dt>
    <dd>{type}</dd>
    <dd>{diet}</dd>
    <dd>{isExtinct}</dd>
    <button>Delete</button>
  </dl>
)

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  diet: PropTypes.string.isRequired,
  isExtinct: PropTypes.bool.isRequired,
}

export default Card
