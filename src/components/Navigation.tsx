import { useEffect, useState } from "react";
import {
  Command,
  FileText,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";

import { navigation, profile } from "@/content/portfolio";
import { NavLink } from "@/lib/router";

type NavigationProps = {
  onOpenTerminal: () => void;
};

const getInitialTheme = () => {
  const saved = window.localStorage.getItem("portfolio-theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const Navigation = ({ onOpenTerminal }: NavigationProps) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const navItems = navigation.map((item) => (
    <NavLink
      key={item.href}
      to={item.href}
      end={item.href === "/"}
      onClick={() => setIsMenuOpen(false)}
      className={({ isActive }) =>
        `site-nav-link ${isActive ? "site-nav-link-active" : ""}`
      }
    >
      {item.label}
    </NavLink>
  ));

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <NavLink to="/" className="site-brand" aria-label="Pranav Hemanth home">
          <span aria-hidden="true" className="site-brand-mark">
            &gt;_
          </span>
          <span>pranav.hemanth</span>
        </NavLink>

        <nav className="site-nav-desktop" aria-label="Primary navigation">
          {navItems}
        </nav>

        <div className="site-header-actions">
          <a
            href={profile.links.cv}
            className="icon-command icon-command-cv"
            target="_blank"
            rel="noreferrer"
            aria-label="Open CV"
            title="Open CV"
          >
            <FileText aria-hidden="true" size={17} />
            <span>CV</span>
          </a>
          <button
            type="button"
            className="icon-command"
            onClick={onOpenTerminal}
            aria-label="Open interactive terminal"
            title="Open terminal (Command or Control K)"
          >
            <Command aria-hidden="true" size={18} />
          </button>
          <button
            type="button"
            className="icon-command"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
          >
            {theme === "dark" ? (
              <Sun aria-hidden="true" size={18} />
            ) : (
              <Moon aria-hidden="true" size={18} />
            )}
          </button>
          <button
            type="button"
            className="icon-command site-menu-button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          >
            {isMenuOpen ? (
              <X aria-hidden="true" size={20} />
            ) : (
              <Menu aria-hidden="true" size={20} />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          className="site-nav-mobile"
          aria-label="Mobile navigation"
        >
          {navItems}
          <a
            href={profile.links.cv}
            target="_blank"
            rel="noreferrer"
            className="site-nav-link"
          >
            CV
          </a>
        </nav>
      )}
    </header>
  );
};
