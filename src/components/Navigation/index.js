import { Link } from "gatsby";
import React from "react";

export function Navigation() {
  return (
    <div className="grid grid-cols-12 h-40 content-center">
      <h1 className="col-start-2 col-end-7">
        <Link className="no-underline" to="/">
          jamie guerrero
        </Link>
      </h1>
      {/* <nav className="flex col-start-7 col-end-12 justify-between items-center">
        <Link to="/">code</Link>
        <Link to="#art">art</Link>
        <Link to="#music">music</Link>
        <Link to="/blog">blog</Link>
        <Link to="/about">about</Link>
      </nav> */}
    </div>
  );
}
