import type { ReactNode } from "react";

import Navbar from "@/components/layout/Navbar";

interface Props {
  children: ReactNode;
}

export function MainLayout({ children }: Props) {
  return (
    <>
      <Navbar />
      
      <main>{children}</main>
    </>
  );
}
