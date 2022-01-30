import { Link } from "gatsby";
import React from "react";
import * as styles from "./index.module.scss";

export default function Navigation() {
  return (
    <div className={styles.NavigationBar}>
      <h1 className={styles.HeaderTitle}>
        <Link to="/">jamie guerrero</Link>
      </h1>
      <ul className={styles.Menu}>
        <li>
          <Link to="/">code</Link>
        </li>
        <li>
          <Link to="/art">art</Link>
        </li>
        <li>
          <Link to="/music">music</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
      </ul>
    </div>
  );
}
