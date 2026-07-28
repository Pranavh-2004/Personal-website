import { ExternalLink, GraduationCap } from "lucide-react";

import { PageIntro } from "@/components/PageIntro";
import { profile, publications } from "@/content/portfolio";

const interests = [
  {
    title: "Security systems",
    description:
      "Attack graphs, SOC alert triage, intrusion detection, and blockchain forensics.",
  },
  {
    title: "Agent infrastructure",
    description:
      "Skill packaging, context management, developer workflows, and interoperable tooling.",
  },
  {
    title: "Networked systems",
    description:
      "Path-aware networking, distributed infrastructure, and systems that remain understandable under failure.",
  },
];

const Research = () => (
  <>
    <PageIntro
      eyebrow="Research"
      title="Research grounded in working systems."
      description="Publications, submissions, and the questions connecting cybersecurity, AI infrastructure, and developer tooling."
    />

    <section className="page-container page-section">
      <div className="research-profile-link">
        <a
          href={profile.links.scholar}
          className="button-secondary"
          target="_blank"
          rel="noreferrer"
        >
          <GraduationCap aria-hidden="true" size={17} />
          Google Scholar
          <ExternalLink aria-hidden="true" size={14} />
        </a>
      </div>
      <div className="research-list">
        {publications.map((publication, index) => (
          <article className="research-item" key={publication.id}>
            <div className="research-number">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="research-body">
              <div className="research-meta">
                <span>{publication.venue}</span>
                <span>{publication.status}</span>
                <span>{publication.year}</span>
              </div>
              <h2>{publication.title}</h2>
              <p className="research-authors">
                {publication.authors.join(", ")}
              </p>
              <p className="research-summary">{publication.summary}</p>
              <div className="tag-list">
                {publication.topics.map((topic) => (
                  <span key={topic}>{topic}</span>
                ))}
              </div>
              {publication.links.length > 0 && (
                <div className="research-links">
                  {publication.links.map((link) => (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      key={link.href}
                    >
                      {link.label}
                      <ExternalLink aria-hidden="true" size={14} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="section-band section-band-contrast">
      <div className="page-container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Current interests</p>
            <h2>The intersections I keep returning to.</h2>
          </div>
        </div>
        <div className="interest-grid">
          {interests.map((interest, index) => (
            <article key={interest.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{interest.title}</h3>
              <p>{interest.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Research;
