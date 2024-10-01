import React from "react";

function SectionLayout({ children, ref }) {
  return (
    <section className="px-8 py-40 " ref={ref}>
      {children}
    </section>
  );
}

export default SectionLayout;
