import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 text-white flex gap-6">
      <Link to="/">Home</Link>
      <Link to="/merge">Merge PDF</Link>
    </nav>
  );
}
    