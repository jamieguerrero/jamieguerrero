import { useEffect, useState } from "react";

export default function useTitles() {
  const titles = ["Hi, I'm Jamie Guerrero ✌🏼", "It's nice to meet you!"];
  const [titleIndex, setTitleIndex] = useState(0);
  useEffect(() => {
    setTimeout(() => setTitleIndex((i) => (i === 0 ? 1 : 0)), 1500);
  }, [titleIndex]);

  return { title: titles[titleIndex] };
}
