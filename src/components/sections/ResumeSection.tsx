import { TerminalWindow } from "../TerminalWindow";
import {
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  Trophy,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ResumeSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="resume" className="min-h-screen py-20 px-4" ref={ref}>
      <TerminalWindow title="pranav@portfolio: ~/resume">
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="command-prompt">$</span>
            <span>cat resume.md</span>
          </div>

          <div className="space-y-8">
            {/* Education */}
            <div
              className={`code-block smooth-transition ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex items-center gap-2 mb-4 text-primary">
                <GraduationCap size={20} />
                <h3 className="font-bold text-lg">## Education</h3>
              </div>
              <div className="space-y-4 pl-6">
                <div>
                  <div className="font-semibold">
                    Bachelor of Technology in Computer Science
                  </div>
                  <div className="text-muted-foreground text-sm">
                    PES University, Bangalore • Aug 2023 - June 2027 • CGPA:
                    9.18/10.0 (Top 10%)
                  </div>
                  <div className="text-sm mt-2">
                    Relevant coursework: Applied Cryptography, Computer Network
                    Security, Algorithms and Data Structures, Operating Systems,
                    Machine Learning, Data Science, Web Technologies
                  </div>
                  <div className="text-sm mt-1">
                    Academic Highlights: 5× Hackathon Winner (Cybersecurity,
                    ML/AI), Research in advanced graph-based threat detection
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div
              className={`code-block smooth-transition ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Briefcase size={20} />
                <h3 className="font-bold text-lg">
                  ## Professional Experience
                </h3>
              </div>
              <div className="space-y-6 pl-6">
                <div>
                  <div className="font-semibold">
                    Cybersecurity Research and Development Intern
                  </div>
                  <div className="text-muted-foreground text-sm">
                    C3iHub, IIT Kanpur • Jun 2025 - Sept 2025
                  </div>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                      Developed a unified heterogeneous attack graph system with
                      knowledge graph embeddings for multistage threat detection
                    </li>
                    <li>
                      Engineered and operationalized a custom alert correlation
                      framework, achieving 500× to 10,000× alert reduction
                      across Suricata, Zeek, Wazuh, and OSSEC
                    </li>
                    <li>
                      Currently authoring a research paper outlining the
                      framework for proactive cybersecurity
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">
                    Cybersecurity and Machine Learning Project Intern
                  </div>
                  <div className="text-muted-foreground text-sm">
                    IIIT-Hyderabad • Dec 2025 - Jan 2026
                  </div>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                      Winter intern at the cybersecurity center at
                      IIIT-Hyderabad (Upcoming)
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">CTF Team Member</div>
                  <div className="text-muted-foreground text-sm">
                    Center for Information Security, Forensics and Cyber
                    Resilience, PES University • Oct 2024 - Present
                  </div>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                      Contributed to improving university ranking on CTF charts
                      and helped organize national CTFs
                    </li>
                    <li>
                      Competed in national/international CTFs; achieved Top-25
                      national ranking in the MIST OSINT Challenge 2025
                    </li>
                    <li>
                      Contributed to organization and mentorship of CryoVault, a
                      national-level CTF
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">Technical Head</div>
                  <div className="text-muted-foreground text-sm">
                    Appex PESU (Technical Club) • Mar 2025 - Present
                  </div>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                      Led the technical team for Horcrux 2.0, a state-level
                      hackathon, overseeing technical logistics, evaluations,
                      and participant mentoring
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">
                    Event Curator, Marketing, and Technical
                  </div>
                  <div className="text-muted-foreground text-sm">
                    The Amateur Manager and Scientist (TAMS), PES University •
                    Feb 2024 - Aug 2024
                  </div>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                      Curated and led 'Aeroquest', a flagship TAMS'24 event with
                      nearly 200 participants
                    </li>
                    <li>
                      Drove marketing campaigns across Bihar and Bangalore,
                      reaching over 100 schools
                    </li>
                    <li>
                      Developed and maintained the official PESU TAMS website;
                      managed email and database systems
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">
                    Chief Technology Officer, Co-Founder
                  </div>
                  <div className="text-muted-foreground text-sm">
                    HelpCreate (Startup) • Oct 2020 - Oct 2021
                  </div>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                      Co-founded a platform enabling innovators to transform
                      ideas into businesses via a community-centric web app
                    </li>
                    <li>
                      3rd Place, Eureka! Junior @ IIT Bombay (2500+ student
                      ideas). Secured seed funding and incubation at IIM
                      Bangalore
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Academic Roles & Achievements */}
            <div
              className={`code-block smooth-transition ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.7s" }}
            >
              <div className="flex items-center gap-2 mb-4 text-primary">
                <BookOpen size={20} />
                <h3 className="font-bold text-lg">
                  ## Academic Roles & Achievements
                </h3>
              </div>
              <div className="space-y-6 pl-6">
                <div>
                  <div className="font-semibold">
                    Subject Matter Expert, Applied Cryptography (PESU I/O)
                  </div>
                  <div className="text-muted-foreground text-sm">
                    PES University, Bangalore • Sept 2025 - Present
                  </div>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                      Conceptualized and taught modules on classical/modern
                      cryptography
                    </li>
                    <li>
                      Designed and hosted daily CTF challenges integrating
                      cryptographic principles with OSINT/forensics
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">
                    Teaching Assistant, Automata Formal Languages and Logic
                    (AFLL)
                  </div>
                  <div className="text-muted-foreground text-sm">
                    PES University, Bangalore • Aug 2025 - Present
                  </div>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                      Created study material, problem sets, and guided students
                      for lexer projects and formal language modeling
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">
                    Machine Learning Summer School (OxML 2025)
                  </div>
                  <div className="text-muted-foreground text-sm">
                    University of Oxford (Remote) • Aug 2025
                  </div>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>Among the youngest participants</li>
                    <li>
                      Attended intensive sessions on AI safety & alignment,
                      conformal prediction, generative AI, robotics, and
                      representation learning
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="font-semibold">
                    Tilde 4.0 Mentor (AI Study Assistant)
                  </div>
                  <div className="text-muted-foreground text-sm">
                    HSP (Remote) • Jul 2025 - Aug 2025
                  </div>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                      Mentored a team of 5 in developing Prob.lm, a
                      low-resource, offline AI study assistant using
                      Retrieval-Augmented Generation (RAG)
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Research Projects */}
            <div
              className={`code-block smooth-transition ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.8s" }}
            >
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Trophy size={20} />
                <h3 className="font-bold text-lg">## Research Projects</h3>
              </div>
              <div className="space-y-6 pl-6">
                <div>
                  <div className="font-semibold">
                    Research Project: Imperceptible Digital Watermarking
                  </div>
                  <div className="text-muted-foreground text-sm">
                    buildspace (Nights & Weekends S5) • Jun 2024 - Jul 2024
                  </div>
                  <ul className="list-disc list-inside text-sm mt-2 space-y-1">
                    <li>
                      Developed Imagine Hashing, a novel method for
                      imperceptible digital watermarking for images using
                      Steganography and Cryptography
                    </li>
                    <li>
                      Guided implementation of document chunking, embedding
                      generation, and hybrid retrieval (BM25 + semantic search)
                      for prototype
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hackathon Wins */}
            <div
              className={`code-block smooth-transition ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.9s" }}
            >
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Trophy size={20} />
                <h3 className="font-bold text-lg">## Notable Achievements</h3>
              </div>
              <ul className="list-disc list-inside space-y-2 pl-6 text-sm">
                <li>
                  5× Hackathon Winner (Cybersecurity, ML/AI & Blockchain
                  categories)
                </li>
                <li>Top-25 national ranking in MIST OSINT Challenge 2025</li>
                <li>1st Place, Kodikon 3.0 (R3ND3R - React Testing Tool)</li>
                <li>1st Place, Arithemenia (Blockheads - Blockchain Voting)</li>
                <li>4th Place, CIDECODE 2.0 (IoTrace - WearOS Forensics)</li>
                <li>
                  Among youngest participants at Oxford ML Summer School 2025
                </li>
              </ul>
            </div>

            {/* Skills */}
            <div
              className={`code-block smooth-transition ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "1.0s" }}
            >
              <div className="flex items-center gap-2 mb-4 text-primary">
                <Award size={20} />
                <h3 className="font-bold text-lg">## Skills & Technologies</h3>
              </div>
              <div className="pl-6 space-y-3">
                <div>
                  <div className="text-sm font-semibold mb-1">
                    Programming Languages:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Python",
                      "C/C++",
                      "Go",
                      "JavaScript",
                      "TypeScript",
                      "SQL",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-secondary px-3 py-1 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">ML/AI:</div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "NumPy",
                      "PyTorch",
                      "Generative AI",
                      "RAG",
                      "Knowledge Graphs",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-secondary px-3 py-1 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">
                    Web Development:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Node.js",
                      "React.js",
                      "Next.js",
                      "Express",
                      "MongoDB",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-secondary px-3 py-1 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">
                    Cybersecurity & DevOps:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "OSINT",
                      "Penetration Testing",
                      "Docker",
                      "Kubernetes",
                      "CI/CD",
                      "AWS Security",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-secondary px-3 py-1 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold mb-1">
                    Security Tools:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Wazuh",
                      "OSSEC",
                      "Suricata",
                      "Zeek",
                      "Dgraph",
                      "NetworkX",
                    ].map((skill) => (
                      <span
                        key={skill}
                        className="bg-secondary px-3 py-1 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </section>
  );
};
