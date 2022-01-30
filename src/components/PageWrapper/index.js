import React from "react";
import PropTypes from "prop-types";
import Head from "../Head";
import Navigation from "../Navigation";
import * as styles from "./index.module.scss";
import { Grid } from "../Grid";
import Footer from "../Footer";

export default function PageWrapper({ children }) {
  return (
    <div className={styles.PageWrapper}>
      <Head />
      <Grid>
        <div className={styles.InnerPageWrapper}>
          <Navigation />
          {children}
        </div>
      </Grid>
      <Footer className={styles.Footer} />
    </div>
  );
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
