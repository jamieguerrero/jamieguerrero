import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: max-content;

  height: 100vh;
  grid-column-gap: ${({ theme }) => `${theme.grid.gutter.Mobile}px`};

  @media (min-width: ${({ theme }) => `${theme.breakpoints.Tablet}px`}) {
    grid-column-gap: ${({ theme }) => `${theme.grid.gutter.Tablet}px`};
  }
  @media (min-width: ${({ theme }) => `${theme.breakpoints.Desktop}px`}) {
    grid-column-gap: ${({ theme }) => `${theme.grid.gutter.Desktop}px`};
  }
  @media (min-width: ${({ theme }) => `${theme.breakpoints.DesktopHD}px`}) {
    grid-column-gap: ${({ theme }) => `${theme.grid.gutter.DesktopHD}px`};
  }
`;

export default Grid;
