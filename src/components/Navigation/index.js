import { Link } from "gatsby";
import React from "react";
import * as styles from "./index.module.scss";

export default function Navigation() {
  return (
    <div className={styles.NavigationBar}>
      <h1 className={styles.HeaderTitle}>
        <Link to="/">JAMIE GUERRERO</Link>
      </h1>
      <ul className={styles.Menu}>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/art">art</Link>
        </li>
        <li>
          <Link to="/blog">blog</Link>
        </li>
      </ul>
    </div>
  );
}
