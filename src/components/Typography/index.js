import { Link } from "gatsby";

export function H1({ children }) {
  return <h1 classname={styles.H1}>{children}</h1>;
}

export function H2({ children }) {
  return <h2 classname={styles.H2}>{children}</h2>;
}

export function H3({ children }) {
  return <h3 classname={styles.H3}>{children}</h3>;
}

export function H4({ children }) {
  return <h4 classname={styles.H4}>{children}</h4>;
}

export function H5({ children }) {
  return <h5 classname={styles.H5}>{children}</h5>;
}

export function Body({ children }) {
  return <p classname={styles.Body}>{children}</p>;
}

export function Strong({ children }) {
  return <strong classname={styles.Strong}>{children}</strong>;
}

export function StrongItalic({ children }) {
  return <i classname={styles.StrongItalic}>{children}</i>;
}

export function Italic({ children }) {
  return <i classname={styles.Italic}>{children}</i>;
}

export function StyledLink({ children }) {
  return <Link classname={styles.Link}>{children}</Link>;
}

export function UL({ children }) {
  return <ul classname={styles.UL}>{children}</ul>;
}

export function LI({ children }) {
  return <li classname={styles.LI}>{children}</li>;
}
