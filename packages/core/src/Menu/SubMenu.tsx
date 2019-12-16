/**
 * Sub Menu
 * */
import * as React from "react";
import styled from "styled-components";
import Spinner from "../Spinner";
import { Arrow } from "./Arrow";
import { IconBefore } from "./MenuItem";
import { useMenu } from "./MenuContext";
import { getSubMenuStyle } from "./Styled";
import { GlobProps } from "../common/props";

export interface SubMenuProps extends GlobProps {
  eventKey?: string;
  children?: React.ReactChild | React.ReactChild[];
  title?: string;
  isOpen?: boolean;
  icon?: React.ReactChild;
  disabled?: boolean;
  isLoading?: boolean;
  onLoadingList?: (e: React.SyntheticEvent<HTMLElement>) => void;
}

// titleSpinner
const Title = styled.div`
  padding: 0.4rem;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  &:hover {
    color: ${props => props.theme.colors["B50"]};
    * {
      color: ${props => props.theme.colors["B50"]};
    }
  }
`;

// list
const SubList = styled.ul`
  padding: 0;
  position: relative;
  display: block;
  opacity: ${(props: SubMenuProps) => (props.isOpen ? 1 : 0)};
  transition: height 0.3s cubic-bezier(0.5, 0.045, 0.4, 1),
    opacity 0.1s cubic-bezier(0.5, 0.045, 0.4, 1);
  will-change: height;
  will-change: opacity;
  li {
    padding-left: 2rem;
  }
`;
SubList.displayName = "SubList";

// Loading
const Loader = styled(Spinner)`
  align-items: center;
  display: flex;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  margin: 0 0.4rem;
  padding: 0 0.6rem;
`;
Loader.displayName = "Loader";

/**
 * Submenu Container
 */
const Container = styled.li`
  ${getSubMenuStyle}
`;

const SubMenuComponent: React.FunctionComponent<SubMenuProps> = ({
  title,
  icon,
  isOpen,
  isLoading,
  onLoadingList,
  children,
  eventKey,
  ...rest
}) => {
  const { setDefaultOpenKey } = useMenu();
  const [open, setOpen] = React.useState(setDefaultOpenKey(eventKey));
  const [listStyle, setListStyle] = React.useState({});

  // Use sub menu title as a marker
  // to apply the result height of sub menu list
  const menuRef = React.useRef(null);
  const titleRef = React.useRef(null);

  const getMenuHeight = () => {
    const menuNode: HTMLElement = menuRef!.current!;
    const titleNode: HTMLElement = titleRef!.current!;

    return (
      menuNode && titleNode && menuNode!.scrollHeight - titleNode!.getBoundingClientRect().height
    );
  };

  let animation: number | null = null;
  React.useEffect(() => {
    animation = requestAnimationFrame(() =>
      setListStyle({
        height: open ? getMenuHeight() : 0
      })
    );

    return () => {
      cancelAnimationFrame(animation!);
      setListStyle({});
    };
  }, [open]);

  const onToggleMenu = () => {
    requestAnimationFrame(() =>
      setListStyle({
        height: open ? getMenuHeight() : 0
      })
    );

    return setOpen(!open);
  };

  return (
    <Container ref={menuRef} {...rest}>
      <Title onClick={onToggleMenu} onFocus={onLoadingList} ref={titleRef}>
        {icon && <IconBefore>{icon}</IconBefore>}
        {title}
        {isLoading ? <Loader /> : <Arrow isOpen={open} />}
      </Title>
      <SubList role="menu" isOpen={open} style={listStyle}>
        {React.Children.map(children!, (child: any) => {
          return React.cloneElement(child, {
            eventKey: child.key || "submenu-key"
          });
        })}
      </SubList>
    </Container>
  );
};

export const SubMenu = React.memo(SubMenuComponent);
