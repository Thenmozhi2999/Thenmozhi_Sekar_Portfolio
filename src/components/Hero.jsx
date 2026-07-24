import { profile } from "../data/portfolioData";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-14">
      <div className="section-shell grid items-center gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
        <div>
          <div className="inline-flex rounded-full border border-amber-300/25 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-200">
            {profile.availability}
          </div>

          <h1 className="mt-8 font-['Space_Grotesk'] text-5xl font-bold leading-tight text-white sm:text-6xl">
            Building <span className="text-gradient">production-ready AI and ML systems</span> through research, engineering, and MLOps.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/5"
            >
              Let&apos;s Connect
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <span>{profile.title}</span>
            <span className="hidden h-1 w-1 rounded-full bg-slate-500 sm:block" />
            <span>{profile.location}</span>
          </div>
        </div>

        <div className="grid-pattern panel relative rounded-[2rem] p-8">
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-sky-400/20 blur-2xl" />
          <div className="absolute -bottom-8 left-6 h-24 w-24 rounded-full bg-amber-300/20 blur-2xl" />

          <div className="relative space-y-6">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-900/70">
              <img
                src={profile.image}
                alt={profile.name}
                className="h-72 w-full object-cover object-top"
              />
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-sky-300">
                Snapshot
              </p>
              <h2 className="mt-4 font-['Space_Grotesk'] text-2xl font-semibold text-white">
                {profile.name}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {profile.snapshot}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {profile.heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <p className="font-['Space_Grotesk'] text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
