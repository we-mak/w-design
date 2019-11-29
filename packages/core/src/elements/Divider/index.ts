import styled from "styled-components";
import { hex2Rgba } from "../../../common/helpers";
import CustomTag from "../CustomTag";

const Divider = styled(CustomTag)`
  flex-shrink: 0;
  height: 0.05rem;
  background-color: ${props => hex2Rgba(props.theme.colors["N30"], 0.08)};
  border-radius: 1px;
  margin: 19px 0px;
`;
Divider.displayName = "Divider";

export default Divider;
