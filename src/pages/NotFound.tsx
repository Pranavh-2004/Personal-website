import { ArrowLeft } from "lucide-react";

import { Link } from "@/lib/router";
const NotFound = () => (
  <section className="not-found page-container">
    <p className="eyebrow">404 · route not found</p>
    <h1>This branch ends here.</h1>
    <p>The page may have moved, or the path may never have existed.</p>
    <Link to="/" className="button-primary">
      <ArrowLeft aria-hidden="true" size={17} />
      Return home
    </Link>
  </section>
);

export default NotFound;
