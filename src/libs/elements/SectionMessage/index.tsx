import * as React from "react";
import Typo from "../Typo";
import { Section } from "./Styled";
import { SectionMessageProps } from "./types";

const SectionMessage: React.FC<SectionMessageProps> = ({
  appearance = "info",
  title,
  children
}) => {
  return (
    <Section appearance={appearance}>
      {title && (
        <Typo appearance="h5" tag="h1">
          {title}
        </Typo>
      )}
      {children}
    </Section>
  );
};

export default SectionMessage;
