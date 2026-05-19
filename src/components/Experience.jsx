import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import { experiences } from "../data/portfolioData";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Applied AI research and engineering experience"
        description="Work spanning AI/ML research, LLM experimentation, backend systems, automation, analytics, and production-focused software engineering."
      />

      <div className="mt-10 space-y-6">
        {experiences.map((experience) => (
          <article key={`${experience.company}-${experience.role}`} className="panel rounded-[2rem] p-7">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-sky-300">
                  {experience.company}
                </p>
                <h3 className="mt-3 font-['Space_Grotesk'] text-2xl font-semibold text-white">
                  {experience.role}
                </h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                {experience.period}
              </span>
            </div>

            <p className="mt-5 max-w-3xl leading-7 text-slate-300">{experience.summary}</p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              {experience.achievements.map((achievement) => (
                <div
                  key={achievement}
                  className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm leading-6 text-slate-200"
                >
                  {achievement}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
