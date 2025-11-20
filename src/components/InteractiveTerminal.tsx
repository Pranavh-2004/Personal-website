import { useState, useRef, useEffect } from "react";
import { X } from "lucide-react";

interface Command {
  input: string;
  output: string | JSX.Element;
}

const commands: Record<string, string | JSX.Element> = {
  help: (
    <div className="space-y-1">
      <div className="text-primary font-bold">Available Commands:</div>
      <div>• whoami - Display information about me</div>
      <div>• skills - List my technical skills</div>
      <div>• projects - Show my projects</div>
      <div>• contact - Get my contact information</div>
      <div>• ls -la - List all sections</div>
      <div>• contact --send-message - Get in touch</div>
      <div>• joke - Hear a developer joke</div>
      <div>• date - Show current date and time</div>
      <div>• clear - Clear the terminal</div>
      <div>• help - Show this help message</div>
    </div>
  ),
  whoami: (
    <div className="flex flex-col sm:flex-row gap-4 items-start">
      <img
        src="https://res.cloudinary.com/djkl22q57/image/upload/c_fill,f_auto,g_face,h_200,q_auto,w_200/v1/portfolio/portfolio/profile?_a=BAMAMiOc0"
        alt="Pranav Hemanth"
        className="w-32 h-32 rounded-lg object-cover border-2 border-primary"
      />
      <div className="space-y-1 break-words flex-1">
        <div className="font-bold text-lg">Pranav Hemanth</div>
        <div>
          Computer Science Student & Cybersecurity Researcher at PES University
          (CGPA 9.18/10.0)
        </div>
        <div>Currently Research Intern @ C3iHub, IIT Kanpur</div>
        <div>5× Hackathon Winner | Top-25 MIST OSINT Challenge 2025</div>
      </div>
    </div>
  ),
  skills: (
    <div className="space-y-2">
      <div className="text-primary font-bold">Technical Skills:</div>
      <div>
        <div className="text-primary">Programming Languages:</div>
        <div className="pl-4">
          Python, C/C++, Go, JavaScript, TypeScript, SQL
        </div>
      </div>
      <div>
        <div className="text-primary">ML/AI:</div>
        <div className="pl-4">
          NumPy, PyTorch, Generative AI, RAG, Knowledge Graphs
        </div>
      </div>
      <div>
        <div className="text-primary">Web Development:</div>
        <div className="pl-4">Node.js, React.js, Next.js, Express, MongoDB</div>
      </div>
      <div>
        <div className="text-primary">Cybersecurity & DevOps:</div>
        <div className="pl-4">
          OSINT, Penetration Testing, Docker, Kubernetes, CI/CD, AWS Security
        </div>
      </div>
      <div>
        <div className="text-primary">Security Tools:</div>
        <div className="pl-4">
          Wazuh, OSSEC, Suricata, Zeek, Dgraph, NetworkX
        </div>
      </div>
    </div>
  ),
  projects: (
    <div className="space-y-2">
      <div className="text-primary font-bold">Featured Projects:</div>
      <div>
        <div className="text-primary">🏆 Hackathon Winners:</div>
        <div className="pl-4 space-y-1">
          <div>
            • Blockheads - 1st Place Arithemenia (Blockchain Voting, 5600 lines)
          </div>
          <div>
            • R3ND3R - 1st Place Kodikon 3.0 (React Testing, 3100 lines)
          </div>
          <div>
            • IoTrace - 4th Place CIDECODE 2.0 (WearOS Forensics, 4200 lines)
          </div>
        </div>
      </div>
      <div>
        <div className="text-primary">🔒 Security Research:</div>
        <div className="pl-4 space-y-1">
          <div>
            • HAWKE Framework - Graph-based threat detection (8500 lines)
          </div>
          <div>
            • PolymorphicMalware - Educational malware research (2400 lines)
          </div>
          <div>• WinSec-DLL-Hijacking - Windows security demo (1800 lines)</div>
          <div>• BlueSense - BLE scanner & monitor (2200 lines)</div>
        </div>
      </div>
      <div>
        <div className="text-primary">🤖 AI/ML & Tools:</div>
        <div className="pl-4 space-y-1">
          <div>
            • GPT-From-Scratch - Transformer implementation (3100 lines)
          </div>
          <div>• TermBrowse - Terminal web browser (2900 lines)</div>
          <div>• ResumeBuilder - PDF automation (1900 lines)</div>
        </div>
      </div>
      <div>
        <div className="text-primary">🌐 Web3 & FinTech:</div>
        <div className="pl-4 space-y-1">
          <div>• ShareVault - Decentralized storage with ZKP (4800 lines)</div>
          <div>• AlgoTrader - Algorithmic trading bot (3600 lines)</div>
        </div>
      </div>
    </div>
  ),
  contact: (
    <div className="space-y-1 break-words">
      <div className="text-primary font-bold">Contact Information:</div>
      <div className="break-all">• Email: pranav2004@gmail.com</div>
      <div className="break-all">• GitHub: github.com/Pranavh-2004</div>
      <div className="break-all">
        • LinkedIn: linkedin.com/in/pranav-hemanth
      </div>
      <div className="pt-2 text-muted-foreground">
        Open to research opportunities and collaborations!
      </div>
    </div>
  ),
  joke: "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
  date: new Date().toLocaleString(),
  "ls -la": (
    <div className="space-y-1">
      <div className="text-primary font-bold">Portfolio Sections:</div>
      <div className="space-y-1 font-mono text-sm">
        <div>drwxr-xr-x 5 pranav staff 160 Nov 20 2025 home/</div>
        <div>drwxr-xr-x 8 pranav staff 256 Nov 20 2025 resume/</div>
        <div>drwxr-xr-x 12 pranav staff 384 Nov 20 2025 projects/</div>
        <div>drwxr-xr-x 6 pranav staff 192 Nov 20 2025 certificates/</div>
        <div>drwxr-xr-x 4 pranav staff 128 Nov 20 2025 blog/</div>
        <div>drwxr-xr-x 7 pranav staff 224 Nov 20 2025 gallery/</div>
        <div>drwxr-xr-x 3 pranav staff 96 Nov 20 2025 contact/</div>
      </div>
      <div className="mt-2 text-muted-foreground text-sm">
        Use navigation menu or scroll to explore each section
      </div>
    </div>
  ),
  "contact --send-message": (
    <div className="space-y-3 text-sm">
      <div className="text-primary font-bold"># Contact Pranav Hemanth</div>
      <div className="space-y-2">
        <div>
          <div className="text-primary">## Email</div>
          <div className="pl-4 break-all">📧 pranav2004@gmail.com</div>
        </div>
        <div>
          <div className="text-primary">## Social</div>
          <div className="pl-4">🐙 GitHub: github.com/Pranavh-2004</div>
          <div className="pl-4">
            💼 LinkedIn: linkedin.com/in/pranav-hemanth
          </div>
        </div>
        <div>
          <div className="text-primary">## Availability</div>
          <div className="pl-4 space-y-1">
            <div>🟢 Open to research opportunities</div>
            <div>🟢 Available for collaboration</div>
            <div>🔵 Currently: Research Intern @ C3iHub, IIT Kanpur</div>
            <div>🟡 Response time: 24-48 hours</div>
          </div>
        </div>
      </div>
      <div className="text-muted-foreground text-xs mt-2">
        → Scroll to Contact section to send a message via form
      </div>
    </div>
  ),
};

export const InteractiveTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<Command[]>([
    {
      input: "",
      output: "Type 'help' to see available commands. Press ESC to close.",
    },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const trimmedInput = input.trim().toLowerCase();

    if (trimmedInput === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    // Handle command with arguments
    let output: string | JSX.Element;

    if (trimmedInput === "ls -la" || trimmedInput === "ls -la //") {
      output = commands["ls -la"];
    } else if (
      trimmedInput === "contact --send-message" ||
      trimmedInput === "contact --send-message //"
    ) {
      output = commands["contact --send-message"];
    } else {
      output =
        commands[trimmedInput] ||
        `Command not found: ${input}. Type 'help' for available commands.`;
    }

    setHistory([...history, { input, output }]);
    setInput("");
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-3 rounded-lg shadow-lg smooth-transition hover:scale-105 z-50 font-mono text-sm flex items-center gap-2"
      >
        <span className="hidden sm:inline">Terminal</span>
        <kbd className="bg-primary-foreground/20 px-2 py-1 rounded text-xs">
          ⌘K
        </kbd>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="terminal-window w-full max-w-3xl max-h-[600px] flex flex-col animate-scale-in">
        <div className="terminal-header p-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="traffic-lights">
              <button
                onClick={() => setIsOpen(false)}
                className="traffic-light bg-red-500 hover:bg-red-600"
                aria-label="Close terminal"
              />
              <div className="traffic-light bg-yellow-500" />
              <div className="traffic-light bg-green-500" />
            </div>
            <span className="text-sm text-muted-foreground font-mono">
              Interactive Terminal
            </span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-foreground smooth-transition"
          >
            <X size={18} />
          </button>
        </div>

        <div
          ref={historyRef}
          className="flex-1 overflow-auto p-4 space-y-3 terminal-content"
        >
          {history.map((cmd, idx) => (
            <div key={idx} className="space-y-1">
              {cmd.input && (
                <div className="flex items-center gap-2">
                  <span className="command-prompt">$</span>
                  <span>{cmd.input}</span>
                </div>
              )}
              <div className="pl-4 text-muted-foreground">{cmd.output}</div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="border-t border-border p-4">
          <div className="flex items-center gap-2">
            <span className="command-prompt">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-foreground font-mono"
              placeholder="Type a command..."
              autoComplete="off"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
