import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { HomeSection } from "@/components/sections/HomeSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { InteractiveTerminal } from "@/components/InteractiveTerminal";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");

    // Handle scroll-based active section detection
    const handleScroll = () => {
      const sections = ["home", "resume", "projects", "blog", "certificates", "gallery", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      <main className="pt-16">
        <HomeSection />
        <ResumeSection />
        <ProjectsSection />
        <BlogSection />
        <CertificatesSection />
        <GallerySection />
        <ContactSection />
      </main>
      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <div className="max-w-7xl mx-auto px-4">
          <p className="font-mono">
            <span className="command-prompt">$</span> echo "Built with React, TypeScript, and Tailwind CSS" | cowsay
          </p>
          <p className="mt-2">© 2024 Pranav Hemanth. All rights reserved.</p>
        </div>
      </footer>
      <InteractiveTerminal />
    </div>
  );
};

export default Index;
