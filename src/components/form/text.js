import React from "react"
import PropTypes from "prop-types"
import { $FormField } from "../../styles"

const TextInput = ({ label, name, value, onChange, placeholder }) => {
  return (
    <$FormField>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </$FormField>
  )
}

TextInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

TextInput.defaultProps = {
  label: "",
  value: "",
  onChange: () => {},
  defaultValue: "",
  placeholder: "",
}

export default TextInput
