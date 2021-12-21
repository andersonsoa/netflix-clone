import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState(false);

  const handleScroll = () => setScroll(window.scrollY > 40);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scroll;
};
