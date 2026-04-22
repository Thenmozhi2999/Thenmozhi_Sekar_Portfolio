import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        eyebrow="Education"
        title="Academic foundations and continuing growth"
        description="Showcase degrees, coursework, honors, and learning milestones in a format that is simple to update."
      />

      <div className="mt-10 grid gap-6">
        {education.map((item) => (
          <article key={`${item.institution}-${item.degree}`} className="panel rounded-[2rem] p-7">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-white">
                  {item.degree}
                </h3>
                <p className="mt-2 text-lg text-sky-200">{item.institution}</p>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                {item.period}
              </span>
            </div>
            <p className="mt-5 max-w-3xl leading-7 text-slate-300">{item.details}</p>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
