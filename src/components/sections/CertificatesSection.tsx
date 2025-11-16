import { TerminalWindow } from "../TerminalWindow";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "../ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certificates = [
  {
    id: 1,
    title: "Machine Learning Summer School (OxML 2025)",
    issuer: "University of Oxford",
    date: "Aug 2025",
    credentialId: "CPD Accredited",
    skills: [
      "Machine Learning",
      "Generative AI",
      "Deep Learning",
      "Agent-based Modeling",
      "Computer Vision",
    ],
  },
  {
    id: 2,
    title: "Cybersecurity Research and Development Intern",
    issuer: "C3iHub, IIT Kanpur",
    date: "Jun 2025 - Sep 2025",
    credentialId: "C3iHub_Internship_Certificate",
    skills: [
      "Cyber Threat Intelligence (CTI)",
      "Cybersecurity",
      "Security Operations Center",
      "Security Operations",
      "Knowledge Graphs",
    ],
  },
  {
    id: 3,
    title: "Cooking with Granite: Hands-on with IBM's Open Source LLMs",
    issuer: "BeMyApp",
    date: "Apr 2025",
    credentialId: "bf752f06-e45e-4353-b8aa-1990dcdb15df",
    skills: ["Generative AI", "LLMs", "Open Source"],
  },
  {
    id: 4,
    title: "Problem Solving Basic",
    issuer: "HackerRank",
    date: "Apr 2025",
    credentialId: "85DE7D06992C",
    skills: ["Algorithm Design", "Algorithm Analysis", "Algorithms"],
    description:
      "Passed HackerRank Problem Solving certification as part of DAA course",
  },
  {
    id: 5,
    title: "Introduction to Programming in C",
    issuer: "NPTEL (IIT Kanpur)",
    date: "Apr 2024",
    credentialId: "NPTEL24CS02S346603738",
    skills: ["C Programming"],
    description: "Secured top 5% in C programming certification course by IITK",
  },
  {
    id: 6,
    title: "Postman API Fundamentals Student Expert",
    issuer: "Canvas Credentials (Badgr)",
    date: "Jan 2024",
    credentialId: "65b28c7671e4c16beb7d686f",
    skills: ["API Testing", "REST APIs", "Postman"],
  },
  {
    id: 7,
    title: "Deep Dive into GenAI",
    issuer: "PESU IO",
    date: "Oct 2023",
    credentialId: null,
    skills: ["Generative AI"],
  },
  {
    id: 8,
    title: "Official Space Camp and HLCA Graduate",
    issuer: "Space Camp",
    date: "Oct 2022",
    credentialId: "USSRC_2022",
    skills: ["Aerospace", "STEM"],
  },
  {
    id: 9,
    title: "IEntO Participation",
    issuer: "E-Cell, IIT Bombay",
    date: "Nov 2022",
    credentialId: "ecell2021",
  },
  {
    id: 10,
    title: "E-SUMMIT '21",
    issuer: "E-Cell, IIT Bombay",
    date: "Feb 2021",
    credentialId: "ecell2021",
  },
  {
    id: 11,
    title: "NEO 2021 Certificate",
    issuer: "E-Cell, IIT Bombay",
    date: "Jan 2021",
    credentialId: "ecell2021",
  },
  {
    id: 12,
    title: "Cambridge English B1 Entry Level Certificate in ESOL International",
    issuer: "Cambridge English",
    date: "Apr 2018",
    credentialId: "0060908866",
    skills: ["English Language"],
  },
];

export const CertificatesSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="certificates" className="min-h-screen py-20 px-4" ref={ref}>
      <TerminalWindow title="pranav@portfolio: ~/certificates">
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="command-prompt">$</span>
            <span>ls -la certificates/ | grep .cert</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {certificates.map((cert, idx) => (
              <div
                key={cert.id}
                className={`code-block hover:border-primary smooth-transition hover:shadow-lg cursor-pointer group ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <Award className="text-primary flex-shrink-0" size={24} />
                  <span className="text-xs text-muted-foreground">
                    {cert.date}
                  </span>
                </div>

                <h3 className="font-bold mb-2 text-sm">{cert.title}</h3>
                <p className="text-xs text-muted-foreground mb-2">
                  {cert.issuer}
                </p>

                {cert.description && (
                  <p className="text-xs text-muted-foreground italic mb-2">
                    {cert.description}
                  </p>
                )}

                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1 mb-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                {cert.credentialId && (
                  <div className="code-block text-xs mt-3 bg-background">
                    <div className="text-muted-foreground">
                      ID: {cert.credentialId}
                    </div>
                  </div>
                )}

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-3 text-xs opacity-0 group-hover:opacity-100 smooth-transition"
                >
                  <ExternalLink size={12} className="mr-2" />
                  Verify Certificate
                </Button>
              </div>
            ))}
          </div>

          <div className="code-block mt-6">
            <div className="text-sm text-muted-foreground">
              <span className="command-prompt">$</span> cert-manager --summary
            </div>
            <div className="mt-3 text-sm">
              <div className="flex justify-between py-2 border-b border-border">
                <span>Total Certificates:</span>
                <span className="text-primary font-bold">
                  {certificates.length}
                </span>
              </div>
              <div className="flex justify-between py-2">
                <span>Latest Achievement:</span>
                <span className="text-primary">{certificates[0].date}</span>
              </div>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </section>
  );
};
