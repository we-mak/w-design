import styled from "styled-components";
import { SectionMessageProps } from "./types";

const getSectionStyle = (props: SectionMessageProps) => {
  const { theme, appearance } = props;

  let backgroundColor = theme.colors["B0"];

  switch (appearance) {
    case "confirm":
      backgroundColor = theme.colors["G0"];
      break;
    case "warn":
      backgroundColor = theme.colors["O0"];
      break;
    case "error":
      backgroundColor = theme.colors["R0"];
      break;
    default:
      backgroundColor = theme.colors["B0"];
      break;
  }

  return `
    background: ${backgroundColor};
  `;
};

export const Section = styled.section`
  margin: 0.4rem;
  padding: 0.8rem;
  border-radius: 0.2rem;
  ${getSectionStyle};
`;
