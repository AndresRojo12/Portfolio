import { motion } from "framer-motion";

import ServiceCard from "../ui/ServiceCard";

import { services } from "../../data/services";
import SectionHeader from "../ui/SectionHeader";

const Services = () => {
  return (
    <>
      <SectionHeader
        eyebrow="Servicios"
        title="¿Cómo puedo ayudarte?"
        description="Desarrollo soluciones digitales modernas, escalables y enfocadas en resultados para empresas, emprendedores y startups."
        centered
      />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 text-cyan-400">Servicios</p>

          <h2 className="text-5xl font-bold">¿Cómo puedo ayudarte?</h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Desarrollo soluciones digitales modernas, escalables y orientadas a
            resultados para empresas, emprendedores y startups.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
