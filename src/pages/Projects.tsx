import { ExternalLink } from "lucide-react";
import { useState } from "react";

import { PageIntro } from "@/components/PageIntro";
import {
  ProjectCategory,
  projects,
} from "@/content/portfolio";

const categories: Array<"All" | ProjectCategory> = [
  "All",
  "Research & tooling",
  "Security & systems",
  "Competitive builds",
  "Fintech & web3",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const visibleProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <PageIntro
        eyebrow="Projects"
        title="Things built across the stack."
        description="Research prototypes, developer tools, security systems, and competitive engineering projects. The full record, without vanity metrics."
      />

      <section className="page-container page-section">
        <div className="filter-row" role="group" aria-label="Filter projects">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={activeCategory === category ? "active" : ""}
              onClick={() => setActiveCategory(category)}
              aria-pressed={activeCategory === category}
            >
              {category}
              <span>
                {category === "All"
                  ? projects.length
                  : projects.filter((project) => project.category === category)
                      .length}
              </span>
            </button>
          ))}
        </div>

        <div className="project-index">
          {visibleProjects.map((project, index) => (
            <article className="project-index-row" key={project.id}>
              <div className="project-index-number">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div className="project-index-main">
                <div className="project-index-heading">
                  <div>
                    <p>{project.category}</p>
                    <h2>{project.title}</h2>
                  </div>
                  <span>{project.year}</span>
                </div>
                <p className="project-index-summary">{project.summary}</p>
                {project.award && (
                  <p className="project-award">{project.award}</p>
                )}
                <div className="tag-list">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
              <div className="project-index-links">
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
                  <span>Private research implementation</span>
                )}
                {!project.confidential && project.links.length === 0 && (
                  <span>Documentation not public</span>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
