import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import { skillGroups } from "../data/portfolioData";

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="AI, ML, and engineering toolkit"
        description="A practical skill set for building AI-powered products, machine learning workflows, LLM applications, and reliable software systems."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.category} className="panel rounded-[2rem] p-6">
            <h3 className="font-['Space_Grotesk'] text-2xl font-semibold text-white">
              {group.category}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
