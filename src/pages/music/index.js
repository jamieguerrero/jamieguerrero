import React from "react";
import PageWrapper from "../../components/PageWrapper";
import * as styles from "./index.module.scss";

function MusicPage() {
  return (
    <PageWrapper>
      <div className={styles.MusicWrapper}>
        <h1>music</h1>
        ⚠️ warning, i do this for my own enjoyment, not for actually
        entertaining others. i leave that to the professionals. but in case
        you're curious, this is where i post:
        <ul>
          <li>teenage engineering experiments</li>
          <li>dj mixes with messed up levels</li>
          <li>unorganized playlists</li>
          <li>horrible covers</li>
          <li>earsplitting practice tapes</li>
        </ul>
      </div>
    </PageWrapper>
  );
}

export default MusicPage;
