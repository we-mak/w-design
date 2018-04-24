import styled from "../../../styledConfig/index";

export const fixed = (size: string) => {
  const sizes = {
    xlarge() {
      return "1296px";
    },
    large() {
      return "976px";
    },
    medium() {
      return "856px";
    },
    small() {
      return "616px";
    },
    xsmall() {
      return "496px";
    }
  };
  return sizes[size];
};

export interface StyleProps {
  fixSize?: string;
}

export const ContainerWrap = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  width: 100%;
  max-width: ${(props: StyleProps) =>
    props.fixSize ? fixed(props.fixSize) : null};
`;
