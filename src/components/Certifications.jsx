import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <SectionHeading
        eyebrow="Certifications"
        title="Professional learning milestones and credentials"
        description="This space works well for certificates, professional programs, and platform-based credentials."
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {certifications.map((certification) => (
          <article key={certification.title} className="panel overflow-hidden rounded-[2rem]">
            {certification.image ? (
              <img
                src={certification.image}
                alt={certification.title}
                className="h-64 w-full object-cover object-top"
              />
            ) : null}
            <div className="p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-amber-200">
                {certification.year}
              </p>
              <h3 className="mt-4 font-['Space_Grotesk'] text-2xl font-semibold text-white">
                {certification.title}
              </h3>
              <p className="mt-3 text-slate-300">{certification.issuer}</p>
              {certification.details ? (
                <p className="mt-4 text-sm leading-6 text-slate-400">{certification.details}</p>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
