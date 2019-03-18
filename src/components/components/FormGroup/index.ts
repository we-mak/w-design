/**
 * FormGroup
 * Wrapping up InputField, Button together and group it as a component
 * */
import styled from "styled-components";

const FormGroup = styled.div`
  display: flex;
  input,
  select {
    flex: 1 1 auto;
  }

  button {
    z-index: 1;
  }

  input:first-child:not(:last-child),
  select:first-child:not(:last-child),
  button:first-child:not(:last-child) {
    border-bottom-right-radius: 0;
    border-top-right-radius: 0;
  }

  input:not(:first-child):not(:last-child),
  select:not(:first-child):not(:last-child),
  button:not(:first-child):not(:last-child) {
    border-radius: 0;
    margin-left: -0.05rem;
  }

  input:last-child:not(:first-child),
  select:last-child:not(:first-child),
  button:last-child:not(:first-child) {
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
    margin-left: -0.05rem;
  }
`;

export default FormGroup;
