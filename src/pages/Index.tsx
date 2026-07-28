import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
} from "lucide-react";
import { useEffect, useState } from "react";

import { SectionHeading } from "@/components/SectionHeading";
import { matrixCompanionFrames } from "@/components/matrixFrames";
import { Matrix } from "@/components/ui/matrix";
import {
  currentRoles,
  news,
  professionalExperience,
  profile,
  projects,
  publications,
} from "@/content/portfolio";
import { Link } from "@/lib/router";

const Index = () => {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const featuredProjects = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <>
      <section className="home-hero">
        <div className="page-container hero-grid">
          <div className="hero-copy">
            <p className="hero-status">
              <span aria-hidden="true" />
              Bangalore, India · Building and researching
            </p>
            <h1>{profile.name}</h1>
            <p className="hero-role">{profile.role}</p>
            <p className="hero-summary">
              I build security systems, research infrastructure, and developer
              tools. Currently at IIT Madras and co-building Pandemonium
              Research while completing computer science at PES University.
            </p>
            <div className="hero-actions">
              <Link to="/research" className="button-primary">
                View research
                <ArrowRight aria-hidden="true" size={17} />
              </Link>
              <a
                href={profile.links.cv}
                className="button-secondary"
                target="_blank"
                rel="noreferrer"
              >
                <Download aria-hidden="true" size={17} />
                CV
              </a>
            </div>
            <div className="hero-socials" aria-label="Profile links">
              <a href={`mailto:${profile.email}`}>
                <Mail aria-hidden="true" size={17} />
                {profile.email}
              </a>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
              >
                <Github aria-hidden="true" size={18} />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin aria-hidden="true" size={18} />
              </a>
              <a
                href={profile.links.scholar}
                target="_blank"
                rel="noreferrer"
                aria-label="Google Scholar profile"
              >
                <GraduationCap aria-hidden="true" size={19} />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-image-wrap">
              <img
                src={profile.photo}
                alt="Pranav Hemanth"
                width="560"
                height="560"
              />
              <div className="hero-matrix" aria-hidden="true">
                <Matrix
                  rows={12}
                  cols={16}
                  frames={matrixCompanionFrames}
                  fps={7}
                  size={4}
                  gap={2}
                  autoplay={!reduceMotion}
                  ariaLabel="Animated matrix companion"
                  palette={{
                    on: "hsl(var(--primary))",
                    off: "hsl(var(--muted-foreground))",
                  }}
                />
              </div>
            </div>
            <div className="hero-terminal-line">
              <span aria-hidden="true">$</span>
              <span>current --focus</span>
              <strong>blockchain forensics</strong>
            </div>
          </div>
        </div>
        <div className="page-container role-strip" aria-label="Current roles">
          {currentRoles.map((role) => (
            <a
              key={role.organization}
              href={role.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>{role.role}</span>
              <strong>{role.organization}</strong>
              <ExternalLink aria-hidden="true" size={14} />
            </a>
          ))}
        </div>
      </section>

      <section className="section-band">
        <div className="page-container">
          <SectionHeading
            eyebrow="Research"
            title="Questions that became systems."
            description="Work across agent tooling, conversational architecture, and graph-based intrusion detection."
            link={{ label: "All research", href: "/research" }}
          />
          <div className="publication-list">
            {publications.map((publication, index) => (
              <article className="publication-row" key={publication.id}>
                <span className="publication-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="publication-meta">
                    {publication.status} · {publication.year}
                  </p>
                  <h3>{publication.title}</h3>
                  <p>{publication.authors.join(", ")}</p>
                </div>
                {publication.links[0] ? (
                  <a
                    href={publication.links[0].href}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-link"
                    aria-label={`Open ${publication.title}`}
                  >
                    <ArrowRight aria-hidden="true" size={18} />
                  </a>
                ) : (
                  <span className="publication-venue">{publication.venue}</span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band section-band-contrast">
        <div className="page-container">
          <SectionHeading
            eyebrow="Selected work"
            title="Built to learn. Built to be used."
            description="A selection of research tooling, network systems, and security projects."
            link={{ label: "All projects", href: "/projects" }}
          />
          <div className="featured-project-grid">
            {featuredProjects.map((project, index) => (
              <article className="project-card" key={project.id}>
                <div className="project-card-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span>{project.year}</span>
                </div>
                <p className="project-category">{project.category}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="tag-list" aria-label="Technologies">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="project-card-links">
                  {project.links.map((link) => (
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
                  {project.confidential && (
                    <span>Research implementation is private</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="page-container split-section">
          <div>
            <SectionHeading
              eyebrow="Experience"
              title="Research in production contexts."
              link={{ label: "Full experience", href: "/experience" }}
            />
            <div className="compact-timeline">
              {professionalExperience.slice(0, 4).map((experience) => (
                <article key={`${experience.organization}-${experience.period}`}>
                  <div>
                    <h3>{experience.role}</h3>
                    <p>{experience.organization}</p>
                  </div>
                  <span>{experience.period}</span>
                </article>
              ))}
            </div>
          </div>

          <div className="news-panel">
            <SectionHeading eyebrow="Updates" title="Recently." />
            <div className="news-list">
              {news.slice(0, 5).map((item) => (
                <article key={`${item.date}-${item.text}`}>
                  <time>{item.date}</time>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">
                      {item.text}
                    </a>
                  ) : (
                    <p>{item.text}</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="contact-band">
        <div className="page-container contact-band-inner">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Research, collaborations, or a difficult systems problem.</h2>
          </div>
          <a href={`mailto:${profile.email}`} className="button-primary">
            <Mail aria-hidden="true" size={17} />
            Start a conversation
          </a>
        </div>
      </section>
    </>
  );
};

export default Index;
