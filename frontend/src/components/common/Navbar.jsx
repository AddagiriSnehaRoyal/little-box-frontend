import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        ♡ A little box of Love
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/create">Create Box</Link>
        <Link to="/open">Open Box</Link>
      </div>
    </nav>
  );
}

export default Navbar;