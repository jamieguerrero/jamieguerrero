import { css } from "styled-components";

const typography = {
  H1: css`
    font-family: "Rubik-Bold";
    font-size: 36px;
    line-height: 1;
    letter-spacing: 1.71px;
    text-transform: uppercase;
    white-space: pre;
  `,
  H2: css`
    font-family: "Rubik-Bold";
    font-size: 21px;
    line-height: 1;
    letter-spacing: 1px;
    text-transform: uppercase;
    white-space: pre;
  `,
  H3: css`
    font-family: "Rubik-SemiBold";
    font-size: 1rem;
    line-height: 1;
    letter-spacing: 0.86px;
    text-transform: uppercase;
    white-space: pre;
  `,
  ExtraBold: css`
    font-family: "Rubik-ExtraBold";
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.67px;
    text-transform: uppercase;
    white-space: pre;
  `,
  Body: css`
    font-family: "HKGrotesk-SemiBold";
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.56px;
  `,
  Strong: css`
    font-family: "HKGrotesk-Black";
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.56px;
  `,
  StrongItalic: css`
    font-family: "HKGrotesk-BoldItalic";
    font-size: 1rem;
    line-height: 1.5;
    letter-spacing: 0.56px;
  `,
  Italic: css`
    font-family: "HKGrotesk-SemiBoldItalic";
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
