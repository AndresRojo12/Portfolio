import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";
import BenefitCard from "../ui/BenefitCard";
import Button from "../ui/Button";

import { benefits } from "../../data/benefits";

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

        <div
          className="mt-20rounded-[32px]borderborder-cyan-500/20bg-gradient-to-rfrom-cyan-500/10to-slate-900p-8text-centermd:p-12"
        >
          <h2 className="text-4xl font-black">
            ¿Tienes una idea o un proyecto?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Estoy listo para ayudarte a convertir tu idea en una aplicación web
            o móvil moderna, escalable y con una excelente experiencia de
            usuario.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button>Hablemos</Button>

            <Button variant="secondary">Ver GitHub</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyMe;
