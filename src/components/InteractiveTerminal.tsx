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
      <div>• joke - Hear a developer joke</div>
      <div>• date - Show current date and time</div>
      <div>• clear - Clear the terminal</div>
      <div>• help - Show this help message</div>
    </div>
  ),
  whoami: "Pranav Hemanth - Full Stack Developer passionate about creating amazing web experiences",
  skills: (
    <div className="space-y-1">
      <div className="text-primary">Technical Skills:</div>
      <div>• Frontend: React, TypeScript, Tailwind CSS</div>
      <div>• Backend: Node.js, Python, PostgreSQL</div>
      <div>• Tools: Git, Docker, VS Code</div>
    </div>
  ),
  projects: (
    <div className="space-y-1">
      <div className="text-primary">Featured Projects:</div>
      <div>• E-Commerce Platform</div>
      <div>• AI Chat Assistant</div>
      <div>• Task Management App</div>
      <div>• Weather Dashboard</div>
    </div>
  ),
  contact: (
    <div className="space-y-1">
      <div className="text-primary">Contact Information:</div>
      <div>• Email: pranav@example.com</div>
      <div>• GitHub: github.com/pranavhemanth</div>
      <div>• LinkedIn: linkedin.com/in/pranavhemanth</div>
    </div>
  ),
  joke: "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
  date: new Date().toLocaleString(),
};

export const InteractiveTerminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<Command[]>([
    { input: "", output: "Type 'help' to see available commands. Press ESC to close." },
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

    const output = commands[trimmedInput] || `Command not found: ${input}. Type 'help' for available commands.`;
    
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
        <kbd className="bg-primary-foreground/20 px-2 py-1 rounded text-xs">⌘K</kbd>
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
