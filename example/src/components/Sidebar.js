import React from "react";
import { Link } from "@reach/router";

export const Sidebar = () => {
  return (
    <ul>
      <li>
        <Link to="/">Introduction</Link>
      </li>
      <li>
        <Link to="/start">Getting start</Link>
      </li>
      <li>
        <Link to="/avatar">Avatar</Link>
      </li>
      <li>
        <Link to="/button">Buttons</Link>
      </li>
      <li>
        <Link to="/form">Form</Link>
      </li>
      <li>
        <Link to="/layout">Layout</Link>
      </li>
      <li>
        <Link to="/modal">Modal</Link>
      </li>
      <li>
        <Link to="/nav">Navbar</Link>
      </li>
      <li>
        <Link to="/button">Portal</Link>
      </li>
      <li>
        <Link to="/spinner">Spinner</Link>
      </li>
    </ul>
  );
};
