import React from "react";
import PropTypes from "prop-types";
import Head from "../Head";
import Navigation from "../Navigation";
import * as styles from "./index.module.scss";
import { Grid } from "../Grid";
import Footer from "../Footer";

export const PageWrapper = ({ children }) => (
  <div>
    <Head />
    <Grid>
      <div className={styles.InnerPageWrapper}>
        <Navigation />
        {children}
      </div>
    </Grid>
    <Footer />
  </div>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
