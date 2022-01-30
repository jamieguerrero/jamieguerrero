import React from "react";
import * as styles from "./index.module.scss";

export default function Footer({ className }) {
  return (
    <div className={`${className} ${styles.FooterWrapper}`}>
      <div className={styles.Socials}>
        <div className={styles.SocialItem}>
          <a href="/">instagram</a>
        </div>
        <div className={styles.SocialItem}>
          <a href="/">linkedin</a>
        </div>
        <div className={styles.SocialItem}>
          <a href="/">soundcloud</a>
        </div>
        <div className={styles.SocialItem}>
          <a href="/">spotify</a>
        </div>
        <div className={styles.SocialItem}>
          <a href="/">email</a>
        </div>
      </div>
      <p>made with ❤️2021</p>
    </div>
  );
}
