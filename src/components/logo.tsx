import { Link } from "react-router-dom";

// Use the correct relative path for your logo SVG

export default function Logo() {
  return (
    <Link to="/" className="inline-flex shrink-0" aria-label="Cruip">
      <img src="/images/logo.svg" alt="Cruip Logo" width={32} height={32} />
    </Link>
  );
}
