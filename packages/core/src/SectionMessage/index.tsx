import * as React from "react";
import Flexbox from "../Flexbox";
import Typo from "../Typo";
import Icon from "../Icon";
import { Section } from "./Styled";
import { SectionMessageProps } from "./types";

const SectionMessage: React.FC<SectionMessageProps> = ({
  appearance = "info",
  title,
  children
}) => {
  let iconName = "fas fa-info-circle";

  switch (appearance) {
    case "confirm":
      iconName = "fa fa-check-circle success";
      break;
    case "error":
      iconName = "fa fa-times error";
      break;
    case "warn":
      iconName = "fa fa-exclamation-triangle warn";
      break;
  }

  return (
    <Section appearance={appearance}>
      <Flexbox>
        <Flexbox.Column p={0}>
          <Icon className={iconName} />
        </Flexbox.Column>
        <Flexbox.Column>
          {title && (
            <Typo appearance="h6" tag="h3">
              {title}
            </Typo>
          )}
          {children}
        </Flexbox.Column>
      </Flexbox>
    </Section>
  );
};

export default SectionMessage;
export { SectionMessageProps };
