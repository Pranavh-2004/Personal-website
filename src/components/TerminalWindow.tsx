import { ReactNode } from "react";

interface TerminalWindowProps {
  children: ReactNode;
  title?: string;
}

export const TerminalWindow = ({ children, title = "pranav@portfolio" }: TerminalWindowProps) => {
  return (
    <div className="terminal-window max-w-7xl mx-auto my-8">
      <div className="terminal-header px-4 py-3 flex items-center justify-between">
        <div className="traffic-lights">
          <div className="traffic-light bg-red-500 hover:bg-red-600 cursor-pointer"></div>
          <div className="traffic-light bg-yellow-500 hover:bg-yellow-600 cursor-pointer"></div>
          <div className="traffic-light bg-green-500 hover:bg-green-600 cursor-pointer"></div>
        </div>
        <div className="text-sm text-muted-foreground font-mono">{title}</div>
        <div className="w-14"></div>
      </div>
      <div className="terminal-content p-6 min-h-[400px]">
        {children}
      </div>
    </div>
  );
};
