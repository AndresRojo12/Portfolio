import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import cv from "../../assets/cv/Andres-Rojo-CV.pdf";

import Container from "./Container";

import Logo from "../ui/Logo";
import Button from "../ui/Button";

import { navigation } from "../../data/navigation";

const Navbar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 30);

    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (

    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-800 bg-[#030712]/90 backdrop-blur-xl shadow-lg"
          : "bg-transparent"
      }`}
    >

      <Container>

        <div className="flex h-20 items-center justify-between">

          <Logo />

          <nav className="hidden items-center gap-8 lg:flex">

            {navigation.map((item) => (

              <Link
                key={item.to}
                to={item.to}
                smooth
                duration={500}
                spy
                offset={-80}
                activeClass="text-cyan-400"
                className="cursor-pointer text-slate-300 transition hover:text-cyan-400"
              >
                {item.label}
              </Link>

            ))}

          </nav>

          <Button
          href={cv}
          download>

            Descargar CV

          </Button>

        </div>

      </Container>

    </header>

  );

};

export default Navbar;