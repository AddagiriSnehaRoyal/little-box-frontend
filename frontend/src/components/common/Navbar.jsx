import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">

            {/* Logo */}
            <Link
                to="/"
                className="navbar-logo"
                onClick={closeMenu}
            >
                <span className="logo-heart">♡</span>
                <span>A little box of Love</span>
            </Link>


            {/* Desktop / Mobile Links */}
            <div className={`navbar-links ${menuOpen ? "open" : ""}`}>

                <Link
                    to="/"
                    className={location.pathname === "/" ? "active" : ""}
                    onClick={closeMenu}
                >
                    <span>⌂</span>
                    Home
                </Link>

                <Link
                    to="/create"
                    className={
                        location.pathname.startsWith("/create")
                            ? "active"
                            : ""
                    }
                    onClick={closeMenu}
                >
                    <span>✦</span>
                    Create Box
                </Link>

                <Link
                    to="/open"
                    className={location.pathname === "/open" ? "active" : ""}
                    onClick={closeMenu}
                >
                    <span>♡</span>
                    Open Box
                </Link>

            </div>


            {/* Mobile Menu Button */}
            <button
                type="button"
                className={`menu-button ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

        </nav>
    );
}

export default Navbar;