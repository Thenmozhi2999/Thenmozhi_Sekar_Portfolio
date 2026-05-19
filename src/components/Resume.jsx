import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import { resume } from "../data/portfolioData";

export default function Resume() {
  return (
    <SectionWrapper id="resume">
      <div className="panel rounded-[2rem] p-8 sm:p-10">
        <SectionHeading
          eyebrow="Resume"
          title="Resume for Applied AI and ML opportunities"
          description={resume.description}
        />

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={resume.ctaHref}
            className="rounded-full bg-amber-300 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-amber-200"
          >
            {resume.ctaLabel}
          </a>
          <a
            href="#experience"
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
          >
            Review Experience
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
