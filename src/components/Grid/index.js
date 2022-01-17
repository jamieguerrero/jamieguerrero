import React from "react";
import * as styles from "./index.module.scss";

export function Grid({ children }) {
  return <div className={styles.Grid}>{children}</div>;
}
