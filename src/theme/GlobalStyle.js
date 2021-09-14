import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @font-face {font-family: 'Rubik-Bold'; src: url('./font/Rubik-Bold.ttf') format('ttf')}
  @font-face {font-family: 'Rubik-SemiBold'; src: url('./font/Rubik-SemiBold.ttf') format('ttf')}
  @font-face {font-family: 'Rubik-ExtraBold'; src: url('./font/Rubik-ExtraBold.ttf') format('ttf')}
  @font-face {font-family: 'HKGrotesk-SemiBold'; src: url('./font/HKGrotesk-SemiBold.otf') format('otf')}
  @font-face {font-family: 'HKGrotesk-Black'; src: url('./font/HKGrotesk-Black.otf') format('otf')}
  @font-face {font-family: 'HKGrotesk-BoldItalic'; src: url('./font/HKGrotesk-BoldItalic.otf') format('otf')}
  @font-face {font-family: 'HKGrotesk-SemiBoldItalic'; src: url('./font/HKGrotesk-SemiBoldItalic.otf') format('otf')}

  body {
    margin: 0;
    font-family: 'HKGrotesk-SemiBold';
    letter-spacing: .56px;
    font-size: 16px;

    @media (min-width: ${({ theme }) => `${theme.breakpoints.Tablet}px`}) {
      font-size: 18px;
    }
  }
`;

export default GlobalStyle;
