import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import cv from "../../assets/cv/Andres-Rojo-CV.pdf";

import Container from "./Container";

import Logo from "../ui/Logo";
import Button from "../ui/Button";

import { navigation } from "../../data/navigation";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
                hashSpy
                offset={-80}
                activeClass="text-cyan-400"
                className="cursor-pointer text-slate-300 transition hover:text-cyan-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-lg p-2 transition hover:bg-slate-800 lg:hidden"
          >
            <Menu size={28} />
          </button>
          <Button href={cv} download className="hidden lg:inline-flex">
            Descargar CV
          </Button>
        </div>
      </Container>
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md lg:hidden">
          <div className="ml-auto flex h-full w-72 flex-col bg-[#030712] p-8">
            <button onClick={() => setIsOpen(false)} className="self-end">
              <X size={30} />
            </button>

            <nav className="mt-12 flex flex-col gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-xl text-slate-300 transition hover:text-cyan-400"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Button href={cv} download className="mt-12 w-full">
              Descargar CV
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
