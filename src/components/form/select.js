import React from "react"
import PropTypes from "prop-types"

const Select = ({ label, name, value, onChange, defaultValue, options }) => {
  const getOptions = () => {
    return options.map(({ value, label }) => (
      <option key={value} value={value}>
        {label}
      </option>
    ))
  }

  return (
    <label>
      {label}
      <select name={name} value={value} onChange={onChange}>
        <option defaultValue>{defaultValue}</option>
        {getOptions()}
      </select>
    </label>
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
