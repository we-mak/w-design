import { DisplayProps } from "styled-system";
import { GlobProps } from "../typings";

export interface NavProps extends GlobProps, DisplayProps {
  children?: React.ReactChild | React.ReactChild[];
}
