import React from "react";

function SectionLayout({ children, ref }) {
  return (
    <section className="px-8 py-40 bdr" ref={ref}>
      {children}
    </section>
  );
}

export default SectionLayout;
