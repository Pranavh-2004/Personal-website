import { TerminalWindow } from "../TerminalWindow";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "../ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    id: 1,
    title: "Blockheads",
    description:
      "Blockchain-based election voting system to enhance accessibility, transparency, and efficiency",
    tech: ["Ethereum", "Solidity", "Smart Contracts", "JavaScript", "Web3"],
    github: "https://github.com/Pranavh-2004/Blockheads",
    demo: null,
    lines: 5600,
    award: "1st Place, Arithemenia",
  },
  {
    id: 2,
    title: "R3ND3R",
    description:
      "Automated test case generation and rendering for React components",
    tech: ["React", "TypeScript", "Testing", "Automation"],
    github: null,
    demo: null,
    lines: 3100,
    award: "1st Place, Kodikon 3.0",
  },
  {
    id: 3,
    title: "IoTrace",
    description:
      "Non-invasive forensic tool for WearOS smartwatches with AI-powered analysis and PDF reporting",
    tech: ["TypeScript", "Python", "WearOS", "BLE", "Forensics"],
    github: "https://github.com/Pranavh-2004/IoTrace",
    demo: null,
    lines: 4200,
    award: "4th Place, CIDECODE 2.0",
  },
  {
    id: 5,
    title: "ReRo-robowars-2023",
    description:
      "Autonomous line-following bot controlled via Python with real-time sensor data guiding motor commands over socket connection to ESP32",
    tech: ["Python", "Robotics", "Client-Server", "ROS2", "ESP32"],
    github: "https://github.com/Pranavh-2004/ReRo-robowars-2023",
    demo: null,
    lines: 800,
    award: "1st Place, ReRo Robowars 3.0",
  },
  {
    id: 4,
    title: "HAWKE Framework",
    description:
      "Graph-based cybersecurity framework for alert correlation and multi-stage attack detection",
    tech: ["Python", "Knowledge Graphs", "Dgraph", "NetworkX", "KGE"],
    github: null,
    demo: null,
    lines: 8500,
    confidential: true,
  },
  {
    id: 6,
    title: "PolymorphicMalware",
    description:
      "Educational research on polymorphic malware with encryption, self-modification, and controlled file infection",
    tech: ["Python", "Cryptography", "Security Research", "Malware Analysis"],
    github: "https://github.com/Pranavh-2004/PolymorphicMalware",
    demo: null,
    lines: 2400,
  },
  {
    id: 7,
    title: "WinSec-DLL-Hijacking",
    description:
      "A demonstration of DLL hijacking on Windows using a malicious DLL built from macOS with MinGW",
    tech: ["C", "WinAPI", "Offensive Security", "DLL Injection"],
    github: "https://github.com/Pranavh-2004/WinSec-DLL-Hijacking",
    demo: null,
    lines: 1800,
  },
  {
    id: 8,
    title: "BlueSense",
    description:
      "A Python-based Bluetooth Low Energy (BLE) device scanner, monitor, and manager with a CLI interface",
    tech: ["Python", "BLE", "IoT", "Bluetooth", "CLI"],
    github: "https://github.com/Pranavh-2004/BlueSense",
    demo: null,
    lines: 2200,
  },
  {
    id: 9,
    title: "GPT-From-Scratch",
    description:
      "Exploring transformers by building a GPT model from scratch using nanoGPT, inspired by Andrej Karpathy's tutorial",
    tech: ["Python", "PyTorch", "Transformers", "Deep Learning", "GPT"],
    github: "https://github.com/Pranavh-2004/GPT-From-Scratch",
    demo: null,
    lines: 3100,
  },
  {
    id: 10,
    title: "TermBrowse",
    description:
      "A Terminal-Based Web Browser with Google search, text rendering, link navigation, bookmarking, and readability enhancements",
    tech: ["Python", "CLI", "Browser", "Terminal"],
    github: "https://github.com/Pranavh-2004/TermBrowse",
    demo: null,
    lines: 2900,
  },
  {
    id: 11,
    title: "AlgoTrader",
    description:
      "Algorithmic trading bot utilizing Alpaca's commission-free stock trading API to automate buy/sell decisions",
    tech: ["Python", "FinTech", "Trading Algorithms", "Alpaca API"],
    github: "https://github.com/Pranavh-2004/AlgoTrader",
    demo: null,
    lines: 3600,
  },
  {
    id: 12,
    title: "ShareVault",
    description:
      "Airbnb for data storage: A decentralized platform for secure, encrypted data sharing using blockchain and zero-knowledge proofs",
    tech: ["TypeScript", "Web3", "Blockchain", "ZKP", "Decentralized Storage"],
    github: "https://github.com/Pranavh-2004/ShareVault",
    demo: null,
    lines: 4800,
  },
];

export const ProjectsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="projects" className="min-h-screen py-20 px-4" ref={ref}>
      <TerminalWindow title="pranav@portfolio: ~/projects">
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="command-prompt">$</span>
            <span>ls -la projects/</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className={`code-block hover:border-primary smooth-transition cursor-pointer group ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Folder className="text-primary" size={20} />
                    <h3 className="font-bold">{project.title}</h3>
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {project.lines} lines
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                {project.award && (
                  <div className="text-xs bg-primary/10 text-primary px-2 py-1 rounded mb-3 inline-block">
                    🏆 {project.award}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-secondary px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  {project.confidential ? (
                    <Button
                      variant="outline"
                      size="sm"
                      disabled
                      className="opacity-50 cursor-not-allowed"
                    >
                      <Github size={14} className="mr-2" />
                      Confidential
                    </Button>
                  ) : (
                    <>
                      {project.github && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github size={14} className="mr-2" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button variant="outline" size="sm" asChild>
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink size={14} className="mr-2" />
                            Demo
                          </a>
                        </Button>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="code-block mt-6">
            <div className="text-sm text-muted-foreground">
              <span className="command-prompt">$</span> git log --oneline
            </div>
            <div className="mt-2 space-y-1 text-sm">
              <div className="text-muted-foreground">
                <span className="text-primary">a1b2c3d</span> feat: Add new
                project showcase
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary">e4f5g6h</span> refactor: Improve
                project card design
              </div>
              <div className="text-muted-foreground">
                <span className="text-primary">i7j8k9l</span> docs: Update
                project descriptions
              </div>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </section>
  );
};
