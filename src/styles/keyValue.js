import styled from "styled-components"

const KeyValue = styled.div`
  display: flex;
  margin-bottom: 0.5rem;

  .key {
    flex: 2;
    font-weight: 700;
  }

  .value {
    flex: 2;
    text-transform: capitalize;
  }
`
export default KeyValue
