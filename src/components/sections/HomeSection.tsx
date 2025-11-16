import { useEffect, useState } from "react";
import { TerminalWindow } from "../TerminalWindow";
import { User } from "lucide-react";

export const HomeSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "whoami";
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => setShowContent(true), 300);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4"
    >
      <TerminalWindow title="pranav@portfolio: ~">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-lg">
            <span className="command-prompt">$</span>
            <span>{displayText}</span>
            {!showContent && <span className="typing-cursor"></span>}
          </div>

          {showContent && (
            <div className="animate-fade-in space-y-6">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <img
                  src="https://res.cloudinary.com/djkl22q57/image/upload/c_fill,f_auto,g_face,h_200,q_auto,w_200/v1/portfolio/portfolio/profile?_a=BAMAMiOc0"
                  alt="Pranav Hemanth"
                  className="w-32 h-32 rounded-lg object-cover border-2 border-primary shadow-lg"
                />
                <div className="flex-1 space-y-4">
                  <div className="code-block">
                    <pre className="text-sm">
                      <code>{`{
  "name": "Pranav Hemanth",
  "role": "Computer Science Student & Cybersecurity Researcher",
  "location": "Bangalore, India",
  "university": "PES University",
  "interests": ["Cybersecurity", "Machine Learning", "Operating Systems", "Web Development"],
  "currently": "Research Intern @ C3iHub, IIT Kanpur",
  "contact": {
    "email": "pranav2004@gmail.com",
    "github": "github.com/Pranavh-2004",
    "linkedin": "linkedin.com/in/pranav-hemanth"
  }
}`}</code>
                    </pre>
                  </div>
                  <div className="text-muted-foreground space-y-2">
                    <p className="flex items-center gap-2">
                      <span className="command-prompt">›</span>
                      Cybersecurity researcher developing graph-based threat
                      detection frameworks
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="command-prompt">›</span>
                      5× Hackathon Winner | Student Researcher | CTF Competitor
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="command-prompt">›</span>
                      Type{" "}
                      <code className="bg-secondary px-2 py-1 rounded">
                        help
                      </code>{" "}
                      to explore more
                    </p>
                  </div>
                </div>
              </div>

              <div className="code-block mt-6">
                <div className="text-muted-foreground mb-2">
                  # Quick Commands
                </div>
                <div className="space-y-1 text-sm">
                  <div>
                    <span className="text-primary">whoami</span>{" "}
                    <span className="text-muted-foreground">
                      // Display user info
                    </span>
                  </div>
                  <div>
                    <span className="text-primary">ls -la</span>{" "}
                    <span className="text-muted-foreground">
                      // List all sections
                    </span>
                  </div>
                  <div>
                    <span className="text-primary">cat resume.md</span>{" "}
                    <span className="text-muted-foreground">
                      // View resume
                    </span>
                  </div>
                  <div>
                    <span className="text-primary">./projects.sh</span>{" "}
                    <span className="text-muted-foreground">
                      // Browse projects
                    </span>
                  </div>
                  <div>
                    <span className="text-primary">contact --send-message</span>{" "}
                    <span className="text-muted-foreground">
                      // Get in touch
                    </span>
                  </div>
                  <div className="pt-2 border-t border-border mt-2">
                    <span className="text-muted-foreground">
                      💡 Tip: Press{" "}
                    </span>
                    <kbd className="bg-secondary px-2 py-1 rounded text-xs">
                      ⌘K
                    </kbd>
                    <span className="text-muted-foreground">
                      {" "}
                      to open the interactive terminal
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </TerminalWindow>
    </section>
  );
};
