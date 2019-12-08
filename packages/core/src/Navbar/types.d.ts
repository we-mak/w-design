import { DisplayProps } from "styled-system";
import { GlobProps } from "../../../types/typings";

export interface NavProps extends GlobProps, DisplayProps {
  children?: React.ReactChild | React.ReactChild[];
}
