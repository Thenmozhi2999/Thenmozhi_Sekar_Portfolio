import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import { publications } from "../data/portfolioData";

export default function Publications() {
  return (
    <SectionWrapper id="publications">
      <SectionHeading
        eyebrow="Publications"
        title="A concise publication list with clean citation-style layout"
        description="Replace the placeholders with papers, posters, articles, or whitepapers as your profile grows."
      />

      <div className="mt-10 space-y-4">
        {publications.map((publication) => (
          <article
            key={publication.title}
            className="panel flex flex-col gap-4 rounded-[2rem] p-6 md:flex-row md:items-center md:justify-between"
          >
            <div>
              <h3 className="font-['Space_Grotesk'] text-xl font-semibold text-white">
                {publication.title}
              </h3>
              <p className="mt-2 text-slate-300">
                {publication.venue} <span className="text-slate-500">|</span> {publication.year}
              </p>
            </div>
            <a
              href={publication.link}
              className="inline-flex w-fit rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:bg-sky-400/20"
            >
              {publication.link === "#" ? "Link Coming Soon" : "View Publication"}
            </a>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
