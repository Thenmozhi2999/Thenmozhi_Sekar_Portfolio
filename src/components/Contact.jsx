import SectionHeading from "./SectionHeading";
import SectionWrapper from "./SectionWrapper";
import { contact, profile } from "../data/portfolioData";

const contactItems = [
  {
    label: "Professional Email",
    value: contact.professionalEmail,
    href: `mailto:${contact.professionalEmail}`,
  },
  {
    label: "Personal Email",
    value: contact.personalEmail,
    href: `mailto:${contact.personalEmail}`,
  },
  { label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
  { label: "Location", value: contact.location, href: "#" },
];

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="pb-24">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let people know how to reach you"
            description={contact.message}
          />

          <div className="mt-8 flex flex-wrap gap-4">
            {profile.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400/35 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="panel rounded-[2rem] p-8">
          <div className="grid gap-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition hover:border-sky-400/30"
              >
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-3 text-lg text-white">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
