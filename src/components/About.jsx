import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import { about } from "../data/portfolioData";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <SectionHeading
          eyebrow="About"
          title="My journey into AI, research, and intelligent systems"
          description={about.intro}
        />

        <div className="panel rounded-[2rem] p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-amber-200">
            Highlights
          </p>
          <div className="mt-6 space-y-4">
            {about.highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
