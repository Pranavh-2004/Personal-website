import { ReactNode, useCallback, useEffect, useState } from "react";
import { Github, GraduationCap, Linkedin, Mail } from "lucide-react";

import { InteractiveTerminal } from "@/components/InteractiveTerminal";
import { Navigation } from "@/components/Navigation";
import { profile } from "@/content/portfolio";
import { Link, usePathname } from "@/lib/router";

const ScrollToTop = () => {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
};

const routeMetadata: Record<
  string,
  { title: string; description: string }
> = {
  "/": {
    title: "Pranav Hemanth | Systems & Security Researcher",
    description:
      "Pranav Hemanth is a systems and security researcher building practical tools across AI evaluation, blockchain forensics, networking, and developer infrastructure.",
  },
  "/research": {
    title: "Research | Pranav Hemanth",
    description:
      "Research by Pranav Hemanth spanning AI systems evaluation, agent context retrieval, conversation interfaces, and security.",
  },
  "/projects": {
    title: "Projects | Pranav Hemanth",
    description:
      "Selected systems, security, AI, networking, fintech, and developer-tool projects built by Pranav Hemanth.",
  },
  "/experience": {
    title: "Experience | Pranav Hemanth",
    description:
      "Research and engineering experience at IIT Madras, Pandemonium Research, IIIT Hyderabad, C3iHub IIT Kanpur, and PES University.",
  },
  "/archive": {
    title: "Archive | Pranav Hemanth",
    description:
      "Certificates, milestones, and selected photographs from Pranav Hemanth's academic and research work.",
  },
};

const RouteMetadata = () => {
  const pathname = usePathname();

  useEffect(() => {
    const metadata = routeMetadata[pathname] ?? {
      title: "Page Not Found | Pranav Hemanth",
      description:
        "The requested page could not be found on Pranav Hemanth's portfolio.",
    };
    let description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    let canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.append(description);
    }
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.append(canonical);
    }

    document.title = metadata.title;
    description.setAttribute("content", metadata.description);
    canonical.setAttribute(
      "href",
      new URL(pathname, "https://pranav-hemanth.vercel.app").toString(),
    );
  }, [pathname]);

  return null;
};

export const SiteLayout = ({ children }: { children: ReactNode }) => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const openTerminal = useCallback(() => setIsTerminalOpen(true), []);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsTerminalOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  return (
    <div className="site-shell">
      <ScrollToTop />
      <RouteMetadata />
      <Navigation onOpenTerminal={openTerminal} />
      <main id="main-content">{children}</main>
      <footer className="site-footer">
        <div className="page-container footer-grid">
          <div>
            <Link to="/" className="footer-name">
              Pranav Hemanth
            </Link>
            <p>Research, systems, security, and the tools around them.</p>
          </div>
          <div className="footer-links" aria-label="Social links">
            <a href={`mailto:${profile.email}`}>
              <Mail aria-hidden="true" size={17} />
              Email
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github aria-hidden="true" size={17} />
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin aria-hidden="true" size={17} />
              LinkedIn
            </a>
            <a
              href={profile.links.scholar}
              target="_blank"
              rel="noreferrer"
            >
              <GraduationCap aria-hidden="true" size={18} />
              Scholar
            </a>
          </div>
        </div>
        <div className="page-container footer-bottom">
          <span>© 2026 Pranav Hemanth</span>
          <button type="button" onClick={openTerminal}>
            <span aria-hidden="true">$</span> open terminal
          </button>
        </div>
      </footer>
      <InteractiveTerminal
        open={isTerminalOpen}
        onOpenChange={setIsTerminalOpen}
      />
    </div>
  );
};
