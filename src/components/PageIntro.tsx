type PageIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export const PageIntro = ({
  eyebrow,
  title,
  description,
}: PageIntroProps) => (
  <header className="page-intro page-container">
    <p className="eyebrow">{eyebrow}</p>
    <h1>{title}</h1>
    <p className="page-intro-description">{description}</p>
  </header>
);
