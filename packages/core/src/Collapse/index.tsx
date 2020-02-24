/**
 * Copyright (c) We-Mak.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 * **************
 * Collapse
 * A collapsible content. It's can be expended or collapsed.
 */
import * as React from "react";
import styled from "styled-components";
import CustomTag from "../CustomTag";
import Spinner from "../Spinner";
import { Arrow } from "./Arrow";
import {
  getCollapseContainerStyle,
  getCollapseTitleStyle,
  getLoaderStyle,
  getContentStyle
} from "./getStyled";
import { GlobProps } from "../common/props";

export interface CollapseProps extends GlobProps {
  title: string;
  tag?: string;
  isDefaultOpen?: boolean;
  isLoading?: boolean;
  icon?: React.ReactChild;
  children?: React.ReactNode;
  onLoadingList?: (e: React.SyntheticEvent<HTMLElement>) => void;
}

const Container = styled(CustomTag)`
  ${getCollapseContainerStyle}
`;

const Title = styled.div`
  ${getCollapseTitleStyle}
`;

// Loading content state
const Loader = styled(Spinner)`
  ${getLoaderStyle}
`;

export interface ContentProps {
  role?: string;
  height?: number;
}

const Content = styled(CustomTag)`
  ${getContentStyle}
`;

const Collapse: React.FC<CollapseProps> = ({
  tag,
  title,
  icon,
  isLoading,
  isDefaultOpen = false,
  onLoadingList,
  children,
  ...rest
}) => {
  const [open, setOpen] = React.useState(isDefaultOpen);
  const [contentHeight, setContentHeight] = React.useState<number | undefined>();

  // Use sub menu title as a marker
  // to apply the result height of sub menu list
  const menuRef = React.useRef(null);
  const titleRef = React.useRef(null);

  const getMenuHeight = () => {
    const menuNode: HTMLElement = menuRef!.current!;
    const titleNode: HTMLElement = titleRef!.current!;

    return menuNode && titleNode && menuNode!.scrollHeight - titleNode!.clientHeight;
  };

  let animation: number | null;

  React.useEffect(() => {
    animation = requestAnimationFrame(() => setContentHeight(open ? getMenuHeight() : 0));

    return () => {
      cancelAnimationFrame(animation!);
    };
  }, [open]);

  const onToggleMenu = () => {
    return setOpen(!open);
  };

  return (
    <Container tag={tag} tagRef={menuRef} {...rest}>
      <Title onClick={onToggleMenu} onFocus={onLoadingList} ref={titleRef}>
        {icon}
        {title}
        {isLoading ? <Loader /> : <Arrow isOpen={open} />}
      </Title>

      <Content height={contentHeight}>{open && <>{children}</>}</Content>
    </Container>
  );
};

export default Collapse;
