import React from "react";
import styled, { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import theme from "../../theme";
import Head from "../Head";
import { Grid } from "../../styles/index.styled";
import Navigation from "../Navigation";
import GlobalStyle from "../../theme/GlobalStyle";

export const InnerPageWrapper = styled.div`
  grid-column: 2/12;
`;

export const PageWrapper = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Head />
    <Grid>
      <InnerPageWrapper>
        <Navigation />
        {children}
      </InnerPageWrapper>
    </Grid>
  </ThemeProvider>
);

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
