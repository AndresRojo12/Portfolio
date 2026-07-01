import ServiceCard from "../ui/ServiceCard";
import { services } from "../../data/services";
import SectionHeader from "../ui/SectionHeader";
import Section from "../layout/Section";

const Services = () => {
  return (
    <Section id="services">
      <SectionHeader
            eyebrow="Servicios"
            title="¿Cómo puedo ayudarte?"
            description="Desarrollo soluciones digitales modernas, escalables y enfocadas en resultados para empresas, emprendedores y startups."
            centered
          />

          <div className="mx-auto max-w-7xl px-6">
            <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
    </Section>
  );
};

export default Services;
