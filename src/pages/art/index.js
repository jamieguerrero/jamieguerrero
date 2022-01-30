import React from "react";
import PageWrapper from "../../components/PageWrapper";
import * as styles from "./index.module.scss";

function ArtPage() {
  return (
    <PageWrapper>
      <div className={styles.ArtWrapper}>
        <h1>art</h1>
        <p>this is not a phase, mom 🖤</p>
        <ul>
          <li>floyd steinberg dithering exploration</li>
        </ul>
      </div>
    </PageWrapper>
  );
}

export default ArtPage;
