import styled from "styled-components"

const ButtonGroup = styled.div`
  display: flex;
  margin-top: 1rem;

  button {
    flex: 2;

    + button {
      margin-left: 1rem;
    }
  }
`
export default ButtonGroup
