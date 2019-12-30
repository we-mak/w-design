import styled from "styled-components";
import { GlobProps } from "@w-design/core/lib/types/common/props";

export interface FormFooter extends GlobProps {}

const FormFooter = styled.div<FormFooter>`
  padding: ${props => `${props.theme.space[3]}px`} 0;
  text-align: right;
`;

export default FormFooter;
