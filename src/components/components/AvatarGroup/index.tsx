import * as React from "react";
import styled from "styled-components";
import { AvatarProps } from "./types";
import Avartar from "../../elements/Avatar";

const AvatarGroupWrapper = styled.div`
  align-content: space-between;
  align-items: flex-start;
  display: flex;
`;
AvatarGroupWrapper.displayName = "AvatarGroupWrapper";

const AvatarWrapper = styled.div`
  flex: 0 0 auto;
`;
AvatarWrapper.displayName = "AvatarWrapper";

const AvatarContent = styled.div`
  flex: 1 1 auto;
  &:not(:last-child) {
    padding-right: 0.4rem;
  }
  &:not(:first-child) {
    padding-left: 0.4rem;
  }
`;
AvatarContent.displayName = "AvatarContent";

const AvatarTitle = styled.div`
  font-weight: 500;
  margin-bottom: 0.4rem;
`;
AvatarTitle.displayName = "AvatarTitle";

const AvatarDescription = styled.div`
  color: ${props => props.theme.colors["N40"]};
`;

const AvatarActions = styled.div`
  flex: 0 0 auto;
`;

const AvatarGroup = ({ name, description, actions, ...rest }: AvatarProps) => {
  return (
    <AvatarGroupWrapper>
      <AvatarWrapper>
        <Avartar dataInitial={name} {...rest} />
      </AvatarWrapper>
      <AvatarContent>
        {name && <AvatarTitle>{name}</AvatarTitle>}
        {description && <AvatarDescription>{description}</AvatarDescription>}
      </AvatarContent>
      {actions && <AvatarActions>{actions}</AvatarActions>}
    </AvatarGroupWrapper>
  );
};

export default AvatarGroup;
