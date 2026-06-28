import Container from "../layout/Container";

import Logo from "../ui/Logo";

import SocialLinks from "../ui/SocialLinks";

import FooterColumn from "../footer/FooterColumn";

import { footerNavigation } from "../../data/footer";

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 py-20">
      <Container>
        <div className="grid gap-16 lg:grid-cols-4">
          <div>
            <Logo />

            <p className="mt-8 leading-8 text-slate-400">
              Construyo aplicaciones web y móviles modernas para empresas y
              emprendedores.
            </p>

            <SocialLinks />
          </div>

          {footerNavigation.map((section) => (
            <FooterColumn key={section.title} {...section} />
          ))}

          <div>
            <h3 className="mb-5 font-bold">Disponible</h3>

            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-green-400" />

              <span>Aceptando nuevos proyectos</span>
            </div>

            <p className="mt-5 text-slate-400">
              Tiempo de respuesta promedio: menos de 24 horas.
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} Andrés Rojo. Todos los derechos
            reservados.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="transition hover:text-cyan-400"
          >
            ↑ Volver arriba
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
