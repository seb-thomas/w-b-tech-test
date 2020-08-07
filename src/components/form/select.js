import React from "react"
import PropTypes from "prop-types"
import { $FormField } from "../../styles"

const Select = ({ label, name, value, onChange, defaultValue, options }) => {
  const getOptions = () => {
    return options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))
  }

  return (
    <$FormField>
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange}>
        <option defaultValue>{defaultValue}</option>
        {getOptions()}
      </select>
    </$FormField>
  )
}

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
}

Select.defaultProps = {
  label: "",
  value: "",
  onChange: () => {},
  defaultValue: "",
}

export default Select
