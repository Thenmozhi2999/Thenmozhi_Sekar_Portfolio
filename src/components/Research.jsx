import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import { research } from "../data/portfolioData";

export default function Research() {
  return (
    <SectionWrapper id="research">
      <SectionHeading
        eyebrow="Research"
        title="Research interests framed in a clear and credible way"
        description="A strong research section can communicate curiosity, rigor, and the real-world problems you care about."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {research.map((item) => (
          <article key={item.title} className="panel rounded-[2rem] p-7">
            <p className="text-sm uppercase tracking-[0.28em] text-amber-200">
              {item.organization}
            </p>
            <h3 className="mt-4 font-['Space_Grotesk'] text-2xl font-semibold text-white">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-slate-400">{item.period}</p>
            <p className="mt-5 leading-7 text-slate-300">{item.summary}</p>
            {item.link ? (
              <a
                href={item.link}
                className="mt-6 inline-flex rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-2 text-sm font-semibold text-sky-200 transition hover:bg-sky-400/20"
              >
                {item.linkLabel || "Learn More"}
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
