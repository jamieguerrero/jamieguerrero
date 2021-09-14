import React from "react";
import styled from "styled-components";
import { Link } from "../../styles/index.styled";

const NavigationBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.Desktop}px`}) {
    flex-direction: row;
  }
`;

const HeaderTitle = styled.h1`
  ${({ theme }) => theme.typography.H1};
  white-space: pre;

  a {
    color: black;
    text-decoration: none;
  }
`;

const Menu = styled.ul`
  margin: 0.5rem 0;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  list-style: none;
  justify-content: space-around;
  height: 2em;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.Tablet}px`}) {
    width: 50%;
  }
`;
const MenuItem = styled.li``;

export default function Navigation() {
  return (
    <NavigationBar>
      <HeaderTitle>
        <a href="/">JAMIE GUERRERO</a>
      </HeaderTitle>
      <Menu>
        <MenuItem>
          <Link href="/#code">code</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/#music">music</Link>
        </MenuItem>
        <MenuItem>
          <Link href="/resume">resume</Link>
        </MenuItem>
      </Menu>
    </NavigationBar>
  );
}
