import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

export default function Head() {
  const titles = ["hi, i'm jamie guerrero ✌🏼", "it's nice to meet you!"];
  const [titleIndex, setTitleIndex] = useState(0);
  useEffect(() => {
    const timer = setTimeout(
      () => setTitleIndex((i) => (i === 0 ? 1 : 0)),
      1500
    );
    return () => {
      clearTimeout(timer);
    };
  }, [titleIndex]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{titles[titleIndex]}</title>
        <link rel="canonical" href="http://www.jamieguerrero.com" />
      </Helmet>
    </>
  );
}
