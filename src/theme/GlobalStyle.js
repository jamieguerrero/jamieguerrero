import { createGlobalStyle } from "styled-components";
import "../fonts/fonts.css";

const GlobalStyle = createGlobalStyle`
  @import '../fonts/fonts.css';
  
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
