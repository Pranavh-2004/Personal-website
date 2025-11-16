import { useState } from "react";
import { TerminalWindow } from "../TerminalWindow";
import { Mail, Github, Linkedin, Twitter, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="min-h-screen py-20 px-4" ref={ref}>
      <TerminalWindow title="pranav@portfolio: ~/contact">
        <div className="space-y-6">
          <div className="flex items-center gap-2 mb-6">
            <span className="command-prompt">$</span>
            <span>contact --send-message</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div
              className={`code-block ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.1s" }}
            >
              <h3 className="font-bold text-lg mb-4 text-primary">
                # Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">
                    --name
                  </label>
                  <Input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    required
                    className="font-mono"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">
                    --email
                  </label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="font-mono"
                  />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground block mb-2">
                    --message
                  </label>
                  <Textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your message here..."
                    required
                    className="font-mono min-h-32"
                  />
                </div>
                <Button type="submit" className="w-full">
                  <Send size={16} className="mr-2" />
                  Execute Send
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div
              className={`space-y-4 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="code-block">
                <h3 className="font-bold text-lg mb-4 text-primary">
                  # Connect
                </h3>
                <div className="space-y-3">
                  <a
                    href="mailto:pranav2004@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary smooth-transition"
                  >
                    <Mail size={20} className="flex-shrink-0" />
                    <span className="text-sm break-all">
                      pranav2004@gmail.com
                    </span>
                  </a>
                  <a
                    href="https://github.com/Pranavh-2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary smooth-transition"
                  >
                    <Github size={20} className="flex-shrink-0" />
                    <span className="text-sm break-all">
                      github.com/Pranavh-2004
                    </span>
                  </a>
                  <a
                    href="https://linkedin.com/in/pranav-hemanth"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary smooth-transition"
                  >
                    <Linkedin size={20} className="flex-shrink-0" />
                    <span className="text-sm break-all">
                      linkedin.com/in/pranav-hemanth
                    </span>
                  </a>
                </div>
              </div>

              <div className="code-block">
                <h3 className="font-bold text-lg mb-4 text-primary">
                  # Availability
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                    <span className="break-words">
                      Open to research opportunities
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"></div>
                    <span className="break-words">
                      Available for collaboration
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                    <span className="break-words">
                      Currently: Research Intern @ C3iHub, IIT Kanpur
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500 flex-shrink-0"></div>
                    <span className="break-words">
                      Response time: 24-48 hours
                    </span>
                  </div>
                </div>
              </div>

              <div className="code-block">
                <pre className="text-xs text-muted-foreground overflow-x-auto">
                  <code className="break-words whitespace-pre-wrap">{`$ curl -X POST https://pranav.dev/api/contact \\
  --header "Content-Type: application/json" \\
  --data '{
    "name": "Your Name",
    "email": "you@email.com",
    "message": "Hello!"
  }'`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </TerminalWindow>
    </section>
  );
};
