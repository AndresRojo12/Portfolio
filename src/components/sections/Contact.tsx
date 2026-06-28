import ContactForm from "../forms/ContactForm";
import Section from "../layout/Section";
import SectionHeader from "../ui/SectionHeader";

import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import { siteConfig } from "../../config/site";

const Contact = () => {
  return (
    <Section id="contact">
      <SectionHeader
        eyebrow="Contacto"
        title="Hablemos sobre tu próximo proyecto"
        description="Si tienes una idea o necesitas desarrollar una aplicación web o móvil, estaré encantado de ayudarte."
        centered
      />

      <div className="mt-20 grid gap-16 lg:grid-cols-2">
        <div>
          <h3 className="text-3xl font-bold">¿Por qué trabajar conmigo?</h3>

          <div className="mt-8 space-y-4">
            <div>✅ Respuesta en menos de 24 horas</div>

            <div>✅ Desarrollo Web</div>

            <div>✅ Desarrollo Mobile</div>

            <div>✅ APIs REST</div>

            <div>✅ Bases de Datos</div>
          </div>

          <div className="mt-12 space-y-5">
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:text-cyan-400"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 hover:text-cyan-400"
            >
              <FaLinkedin />
              LinkedIn
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 hover:text-cyan-400"
            >
              <FaEnvelope />

              {siteConfig.email}
            </a>
          </div>
        </div>

        <div
          className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-900/60
            p-8
          "
        >
          <ContactForm />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
