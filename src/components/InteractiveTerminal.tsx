import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Command, X } from "lucide-react";

import {
  navigation,
  profile,
  projects,
  publications,
  skillGroups,
} from "@/content/portfolio";
import { useNavigate } from "@/lib/router";

type TerminalEntry = {
  input?: string;
  output: React.ReactNode;
};

type InteractiveTerminalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const initialEntry: TerminalEntry = {
  output: (
    <span>
      Type <strong>help</strong> for available commands.
    </span>
  ),
};

export const InteractiveTerminal = ({
  open,
  onOpenChange,
}: InteractiveTerminalProps) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<TerminalEntry[]>([initialEntry]);
  const historyRef = useRef<HTMLDivElement>(null);

  const commands = useMemo<Record<string, React.ReactNode>>(
    () => ({
      help: (
        <div className="terminal-help">
          <strong>Available commands</strong>
          <span>whoami · research · projects · experience · archive</span>
          <span>skills · contact · ls · date · clear</span>
        </div>
      ),
      whoami: (
        <div className="terminal-stack">
          <strong>{profile.name}</strong>
          <span>{profile.role}</span>
          <span>Research Intern @ IIT Madras</span>
          <span>Co-founder & Researcher @ Pandemonium Research</span>
        </div>
      ),
      skills: (
        <div className="terminal-stack">
          {skillGroups.map((group) => (
            <span key={group.label}>
              <strong>{group.label}:</strong> {group.items.join(", ")}
            </span>
          ))}
        </div>
      ),
      contact: (
        <div className="terminal-stack">
          <strong>Best way to reach me</strong>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.links.github} target="_blank" rel="noreferrer">
            github.com/Pranavh-2004
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
            linkedin.com/in/pranav-hemanth
          </a>
          <a href={profile.links.scholar} target="_blank" rel="noreferrer">
            scholar.google.com/citations?user=wyI18VEAAAAJ
          </a>
        </div>
      ),
      ls: (
        <div className="terminal-stack">
          {navigation.map((item) => (
            <span key={item.href}>
              drwxr-xr-x&nbsp;&nbsp;{item.label.toLowerCase()}/
            </span>
          ))}
          <span>-rw-r--r--&nbsp;&nbsp;cv.pdf</span>
        </div>
      ),
      date: new Date().toLocaleString(),
      research: `${publications.length} publications and submissions. Opening /research…`,
      projects: `${projects.length} projects. Opening /projects…`,
      experience: "Opening /experience…",
      archive: "Opening /archive…",
    }),
    [],
  );

  useEffect(() => {
    if (!open) return;
    const historyElement = historyRef.current;
    if (!historyElement) return;

    historyElement.scrollTop = historyElement.scrollHeight;
  }, [history, open]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const command = input.trim().toLowerCase();
    if (!command) return;

    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const routes: Record<string, string> = {
      home: "/",
      research: "/research",
      projects: "/projects",
      experience: "/experience",
      archive: "/archive",
    };

    const output =
      commands[command] ??
      `Command not found: ${input}. Type "help" for available commands.`;
    setHistory((entries) => [...entries, { input, output }]);
    setInput("");

    if (routes[command]) {
      window.setTimeout(() => {
        navigate(routes[command]);
        onOpenChange(false);
      }, 240);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>
        <button type="button" className="terminal-launcher">
          <Command aria-hidden="true" size={18} />
          <span>Terminal</span>
          <kbd>⌘K</kbd>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="terminal-overlay" />
        <Dialog.Content className="terminal-dialog">
          <div className="terminal-titlebar">
            <div className="terminal-lights" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <Dialog.Title>pranav@portfolio:~</Dialog.Title>
            <Dialog.Close asChild>
              <button
                type="button"
                className="terminal-close"
                aria-label="Close terminal"
              >
                <X aria-hidden="true" size={18} />
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Description className="sr-only">
            Navigate the portfolio and inspect selected information using text
            commands.
          </Dialog.Description>
          <div className="terminal-history" ref={historyRef} aria-live="polite">
            {history.map((entry, index) => (
              <div className="terminal-entry" key={`${entry.input}-${index}`}>
                {entry.input && (
                  <div className="terminal-command">
                    <span aria-hidden="true">$</span>
                    <span>{entry.input}</span>
                  </div>
                )}
                <div className="terminal-output">{entry.output}</div>
              </div>
            ))}
          </div>
          <form className="terminal-input-row" onSubmit={handleSubmit}>
            <label htmlFor="terminal-input" aria-label="Terminal command">
              $
            </label>
            <input
              id="terminal-input"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Type a command…"
              autoComplete="off"
              autoFocus
            />
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
