import { useEffect, useState } from "react";

export function useNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return {
    isScrolled,
    isOpen,
    toggleMenu,
  };
}