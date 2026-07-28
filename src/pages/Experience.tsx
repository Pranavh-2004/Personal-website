import { PageIntro } from "@/components/PageIntro";
import {
  academicExperience,
  competitiveExperience,
  professionalExperience,
  profile,
  skillGroups,
  type Experience as ExperienceItem,
} from "@/content/portfolio";

const Timeline = ({ items }: { items: ExperienceItem[] }) => (
  <div className="experience-list">
    {items.map((item) => (
      <article key={`${item.organization}-${item.role}-${item.period}`}>
        <div className="experience-marker" aria-hidden="true" />
        <div className="experience-period">{item.period}</div>
        <div className="experience-content">
          <div className="experience-heading">
            <div>
              <h3>{item.role}</h3>
              <p>{item.organization}</p>
            </div>
            {item.location && <span>{item.location}</span>}
          </div>
          <ul>
            {item.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </article>
    ))}
  </div>
);

const Experience = () => (
  <>
    <PageIntro
      eyebrow="Experience"
      title="A record of research, teaching, and building."
      description="Professional work, academic roles, competitions, and the technical context behind them."
    />

    <section className="page-container page-section education-strip">
      <div>
        <p className="eyebrow">Education</p>
        <h2>{profile.university}</h2>
      </div>
      <div>
        <strong>{profile.degree}</strong>
        <span>Aug 2023 – Jun {profile.graduation}</span>
      </div>
      <div>
        <strong>CGPA {profile.cgpa}</strong>
        <span>Top 10% of class</span>
      </div>
    </section>

    <section className="page-container experience-section">
      <div className="experience-section-heading">
        <p className="eyebrow">Professional</p>
        <h2>Research and engineering</h2>
      </div>
      <Timeline items={professionalExperience} />
    </section>

    <section className="section-band section-band-contrast">
      <div className="page-container experience-section">
        <div className="experience-section-heading">
          <p className="eyebrow">Academic</p>
          <h2>Teaching and applied study</h2>
        </div>
        <Timeline items={academicExperience} />
      </div>
    </section>

    <section className="page-container experience-section">
      <div className="experience-section-heading">
        <p className="eyebrow">Competitive engineering</p>
        <h2>Hackathons and CTFs</h2>
      </div>
      <Timeline items={competitiveExperience} />
    </section>

    <section className="section-band section-band-contrast">
      <div className="page-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Technical range</p>
            <h2>Tools used in the work.</h2>
          </div>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3>{group.label}</h3>
              <p>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Experience;
