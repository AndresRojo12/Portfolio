import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import BenefitCard from "../ui/BenefitCard";
import Button from "../ui/Button";

import { benefits } from "../../data/benefits";
import { siteConfig } from "../../config/site";

const WhyMe = () => {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeader
          eyebrow="Valor"
          title="¿Por qué trabajar conmigo?"
          description="No solo desarrollo software. Creo soluciones modernas, escalables y enfocadas en generar resultados para empresas y emprendedores."
          centered
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {benefits.map((item) => (
            <BenefitCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mt-32 rounded-[32px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-slate-900 p-8 text-center md:p-12">
          <h2 className="text-4xl font-black">
            ¿Tienes una idea o un proyecto?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Estoy listo para ayudarte a convertir tu idea en una aplicación web
            o móvil moderna, escalable y con una excelente experiencia de
            usuario.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button href="#contact">Hablemos</Button>

            <Button
              variant="secondary"
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver GitHub
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyMe;
