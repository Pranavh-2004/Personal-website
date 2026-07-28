import { cleanup, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, beforeEach, describe, expect, it } from "vitest";

import App from "@/App";

afterEach(cleanup);

beforeEach(() => {
  window.history.pushState({}, "", "/");
  window.localStorage.clear();
  document.documentElement.classList.remove("dark");
});

describe("portfolio routes", () => {
  it("renders the current positioning on the homepage", async () => {
    render(<App />);

    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: "Pranav Hemanth",
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByText("IIT Madras").length).toBeGreaterThan(0);
    expect(
      screen.getAllByText(/Conversation Tree Architecture/i).length,
    ).toBeGreaterThan(0);
  });

  it("loads a detail route directly", async () => {
    window.history.pushState({}, "", "/research");
    render(<App />);

    expect(
      await screen.findByRole("heading", {
        level: 1,
        name: /Research grounded in working systems/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/arXiv:2604.16911/i).length).toBeGreaterThan(0);
    expect(
      screen.getByRole("link", { name: /Google Scholar/i }),
    ).toHaveAttribute(
      "href",
      "https://scholar.google.com/citations?user=wyI18VEAAAAJ&hl=en",
    );
    expect(document.title).toBe("Research | Pranav Hemanth");
    expect(
      document.querySelector('link[rel="canonical"]'),
    ).toHaveAttribute(
      "href",
      "https://pranav-hemanth.vercel.app/research",
    );
  });

  it("filters the project index by category", async () => {
    window.history.pushState({}, "", "/projects");
    render(<App />);
    const user = userEvent.setup();

    await screen.findByRole("heading", {
      level: 1,
      name: /Things built across the stack/i,
    });
    await user.click(
      screen.getByRole("button", { name: /Fintech & web3/i }),
    );

    expect(screen.getByRole("heading", { name: "AlgoTrader" })).toBeVisible();
    expect(screen.getByRole("heading", { name: "ShareVault" })).toBeVisible();
    expect(
      screen.queryByRole("heading", { name: "Skilldex" }),
    ).not.toBeInTheDocument();
  });

  it("switches the archive from certificates to gallery", async () => {
    window.history.pushState({}, "", "/archive");
    render(<App />);
    const user = userEvent.setup();

    expect(await screen.findByText("Cambridge English B1")).toBeVisible();
    await user.click(screen.getByRole("tab", { name: /Gallery/i }));

    expect(screen.getByRole("button", { name: /Open IIT Kanpur/i })).toBeVisible();
    expect(screen.queryByText("Cambridge English B1")).not.toBeInTheDocument();
  });
});

describe("global interactions", () => {
  it("opens the terminal and executes a content command", async () => {
    render(<App />);
    const user = userEvent.setup();

    await screen.findByRole("heading", { name: "Pranav Hemanth" });
    await user.click(
      screen.getByRole("button", { name: "Open interactive terminal" }),
    );
    const input = screen.getByLabelText("Terminal command");
    await user.type(input, "whoami{Enter}");

    expect(screen.getByRole("dialog")).toBeVisible();
    expect(
      screen.getAllByText(/Co-founder & Researcher @ Pandemonium Research/i)
        .length,
    ).toBeGreaterThan(0);
  });

  it("navigates with a terminal route command", async () => {
    render(<App />);
    const user = userEvent.setup();

    await screen.findByRole("heading", { name: "Pranav Hemanth" });
    await user.click(
      screen.getByRole("button", { name: "Open interactive terminal" }),
    );
    await user.type(
      screen.getByLabelText("Terminal command"),
      "projects{Enter}",
    );

    await waitFor(() =>
      expect(
        screen.getByRole("heading", {
          level: 1,
          name: /Things built across the stack/i,
        }),
      ).toBeVisible(),
    );
  });

  it("persists a theme selection", async () => {
    render(<App />);
    const user = userEvent.setup();

    await screen.findByRole("heading", { name: "Pranav Hemanth" });
    await user.click(
      screen.getByRole("button", { name: /Switch to dark theme/i }),
    );

    expect(document.documentElement).toHaveClass("dark");
    expect(window.localStorage.getItem("portfolio-theme")).toBe("dark");
  });
});
