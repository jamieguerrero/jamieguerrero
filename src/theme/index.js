import { css } from "styled-components";

const typography = {
  H1: css`
    font-family: "Rubik-Bold", arial;
    font-size: 36px;
    line-height: 1;
    letter-spacing: 1.71px;
    text-transform: uppercase;
    white-space: pre;
  `,
  H2: css`
    font-family: "Rubik-Bold", arial;
    font-size: 21px;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    white-space: pre;
  `,
  H3: css`
    font-family: "Rubik-SemiBold", arial;
    font-size: 1rem;
    line-height: 1;
    letter-spacing: 0.86px;
    text-transform: uppercase;
    white-space: pre;
  `,
  ExtraBold: css`
    font-family: "Rubik-ExtraBold", arial;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.67px;
    text-transform: uppercase;
    white-space: pre;
  `,
  Body: css`
    font-family: "HKGrotesk-SemiBold", arial;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.56px;
  `,
  Strong: css`
    font-family: "HKGrotesk-Black", arial;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.56px;
  `,
  StrongItalic: css`
    font-family: "HKGrotesk-BoldItalic", arial;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.56px;
  `,
  Italic: css`
    font-family: "HKGrotesk-SemiBoldItalic", arial;
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.56px;
  `,
};

const theme = {
  breakpoints: {
    Mobile: 320,
    Tablet: 768,
    Desktop: 1024,
    DesktopHD: 1440,
  },
  fonts: {
    Mobile: 12,
    Tablet: 12,
    Desktop: 14,
    DesktopHD: 16,
  },
  grid: {
    gutter: {
      Mobile: 12,
      Tablet: 12,
      Desktop: 28,
      DesktopHD: 32,
    },
  },
  typography,
};

export default theme;
