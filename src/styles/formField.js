import styled from "styled-components"

const FormField = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  label {
    margin-right: 1rem;
  }

  input[type="text"],
  select {
    width: 100%;
    height: 1.5rem;
  }
`
export default FormField
