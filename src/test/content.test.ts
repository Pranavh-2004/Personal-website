import { describe, expect, it } from "vitest";

import {
  certificates,
  gallery,
  profile,
  projects,
  publications,
} from "@/content/portfolio";

describe("portfolio content", () => {
  it("uses unique stable identifiers for indexed content", () => {
    expect(new Set(projects.map((project) => project.id)).size).toBe(
      projects.length,
    );
    expect(new Set(publications.map((publication) => publication.id)).size).toBe(
      publications.length,
    );
  });

  it("retains the complete personal archive", () => {
    expect(certificates).toHaveLength(12);
    expect(gallery).toHaveLength(6);
  });

  it("uses the current contact and CV", () => {
    expect(profile.email).toBe("pranavh2004@gmail.com");
    expect(profile.links.cv).toBe("/cv.pdf");
    expect(profile.links.scholar).toContain("user=wyI18VEAAAAJ");
  });

  it("does not expose empty links", () => {
    const links = [
      ...projects.flatMap((project) => project.links),
      ...publications.flatMap((publication) => publication.links),
    ];

    expect(links.every((link) => /^https:\/\//.test(link.href))).toBe(true);
  });
});
