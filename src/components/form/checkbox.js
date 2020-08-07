import React from "react"
import PropTypes from "prop-types"

const Checkbox = ({ label, name, checked, onChange }) => {
  return (
    <label>
      {label}
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
      />
    </label>
  )
}

Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

Checkbox.defaultProps = {
  label: "",
  checked: false,
  onChange: () => {},
  defaultValue: "",
}

export default Checkbox
