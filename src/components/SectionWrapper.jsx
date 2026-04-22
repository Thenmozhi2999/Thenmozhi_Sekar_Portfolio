export default function SectionWrapper({ id, className = "", children }) {
  return (
    <section id={id} className={`section-divider py-20 sm:py-24 ${className}`}>
      <div className="section-shell">{children}</div>
    </section>
  );
}
