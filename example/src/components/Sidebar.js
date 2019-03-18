import React from "react";
import { Link } from "@reach/router";

export const Sidebar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Introduction</Link>
      </li>
      <li>
        <Link to="/provider">Provider</Link>
      </li>
      <li>
        <Link to="/container">Container</Link>
      </li>
      <li>
        <Link to="/button">Buttons</Link>
      </li>
      <li>
        <Link to="/input-field">InputField</Link>
      </li>
    </ul>
  );
};
