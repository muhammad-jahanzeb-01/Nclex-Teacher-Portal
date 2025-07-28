import { useState } from "react";
import "./Header.css";

const CoordinatorHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <h1 className="brand-logo">CoordinatorHeader Portal</h1>
        </div>

        <nav className={`header-nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item"><a href="#" className="nav-link">Dashboard</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Analytics</a></li>
            <li className="nav-item"><a href="#" className="nav-link">Settings</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="user-profile">
            <img src="/placeholder.svg" alt="User" className="user-avatar" />
            <span className="user-name">Admin User</span>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default CoordinatorHeader;
