import React from "react"
import PropTypes from "prop-types"
import { $FormField } from "../../styles"

const Checkbox = ({ label, name, checked, onChange }) => {
  return (
    <$FormField>
      <label htmlFor={name}>{label}</label>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
      />
    </$FormField>
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
