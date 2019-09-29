/**
 * Component build on top of Fontawesome
 */
import * as React from "react";

const Icon = ({ className, ...rest }: any) => (
  <i className={className} aria-hidden="true" {...rest} />
);

export default Icon;
