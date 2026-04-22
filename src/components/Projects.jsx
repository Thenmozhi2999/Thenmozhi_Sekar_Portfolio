import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work with clean presentation and room to expand"
        description="Project cards are powered by a single data file, so updating content later is straightforward."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="panel group flex h-full flex-col rounded-[2rem] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-400/35 hover:bg-white/8"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-300">
                {project.type}
              </span>
              <span className="text-sky-300 transition group-hover:translate-x-1">
                -&gt;
              </span>
            </div>

            <h3 className="mt-6 font-['Space_Grotesk'] text-2xl font-semibold text-white">
              {project.title}
            </h3>

            <p className="mt-4 flex-1 text-sm leading-6 text-slate-300">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10"
                >
                  {item}
                </span>
              ))}
            </div>

            <a
              href={project.link}
              className="mt-8 inline-flex items-center text-sm font-semibold text-sky-300 transition hover:text-sky-200"
            >
              View Project
            </a>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
