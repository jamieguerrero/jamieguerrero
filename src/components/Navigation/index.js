import { Link } from "gatsby";
import React from "react";

export function Navigation() {
  return (
    <div>
      <h1>
        <Link to="/">jamie guerrero</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">code</Link>
        </li>
        <li>
          <Link to="#art">art</Link>
        </li>
        <li>
          <Link to="#music">music</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </div>
  );
}
