import Container from "../layout/Container";
import SectionHeader from "../ui/SectionHeader";

import StackCard from "../ui/StackCard";

import { stack } from "../../data/stack";

const Stack = () => {
  return (
    <section
      id="stack"
      className="py-24 md:py-32"
    >
      <Container>

        <SectionHeader
          eyebrow="Tecnologías"
          title="Tecnologías y herramientas"
          description="Estas son las principales tecnologías que utilizo para construir aplicaciones web y móviles modernas."
          centered
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {stack.map((item) => (

            <StackCard
              key={item.title}
              {...item}
            />

          ))}

        </div>

      </Container>
    </section>
  );
};

export default Stack;