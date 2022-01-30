import React from "react";
import PageWrapper from "../../components/PageWrapper";
import * as styles from "./index.module.scss";

function ArtPage() {
  return (
    <PageWrapper>
      <div className={styles.ArtWrapper}>
        <h1>Art</h1>
      </div>
    </PageWrapper>
  );
}

export default ArtPage;
