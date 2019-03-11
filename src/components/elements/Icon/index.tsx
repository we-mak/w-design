/**
 * Component build on top of Fontawesome
 */
import * as React from "react";

const Icon = ({ className }: { className: string }) => (
  <i className={className} aria-hidden="true" />
);

export default Icon;
