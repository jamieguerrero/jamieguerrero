import React from "react";
import HelloP5 from "./HelloP5";
import { PageWrapper } from "../../components/PageWrapper";
import * as styles from "./index.module.scss";

function ArtPage() {
  return (
    <PageWrapper>
      <div className={styles.ArtWrapper}>
        <HelloP5 />
      </div>
    </PageWrapper>
  );
}

export default ArtPage;
