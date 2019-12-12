import styled from "styled-components";
import { SectionMessageProps } from "./index";

const getSectionStyle = (props: SectionMessageProps) => {
  const { theme, appearance } = props;

  let backgroundColor = theme.colors["B0"];
  let iconColor = theme.colors["B50"];

  switch (appearance) {
    case "confirm":
      backgroundColor = theme.colors["G0"];
      iconColor = theme.colors["G30"];
      break;
    case "warn":
      backgroundColor = theme.colors["O0"];
      iconColor = theme.colors["O30"];
      break;
    case "error":
      backgroundColor = theme.colors["R0"];
      iconColor = theme.colors["R30"];
      break;
  }

  return `
    background: ${backgroundColor};
    i {
      color: ${iconColor}
    }
  `;
};

export const Section = styled.section`
  margin: 0.4rem 0;
  padding: 0.8rem;
  border-radius: 0.2rem;
  ${getSectionStyle};
`;
