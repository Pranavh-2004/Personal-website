import { ArrowRight } from "lucide-react";

import { Link } from "@/lib/router";
type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  link?: { label: string; href: string };
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  link,
}: SectionHeadingProps) => (
  <div className="section-heading">
    <div>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
    {link && (
      <Link className="text-link" to={link.href}>
        {link.label}
        <ArrowRight aria-hidden="true" size={16} />
      </Link>
    )}
  </div>
);
