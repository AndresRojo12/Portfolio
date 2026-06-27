import type { ReactNode } from "react";
import Container from "./Container";

interface Props {
  id?: string;
  children: ReactNode;
}

const Section = ({
  id,
  children,
}: Props) => {
  return (
    <section
      id={id}
      className="py-32"
    >
      <Container>

        {children}

      </Container>
    </section>
  );
};

export default Section;