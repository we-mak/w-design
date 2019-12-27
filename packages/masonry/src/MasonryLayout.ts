import styled from "styled-components";

export const MasonryLayout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: stretch;
  width: 100%;
  margin: auto;
  .msr_col {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-content: stretch;
    flex-grow: 1;
    width: 100%;
  }
  .msr_item {
    margin: 0.5rem;
  }
`;
