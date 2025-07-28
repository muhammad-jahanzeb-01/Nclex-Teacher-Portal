"use client"

import { useState } from "react"
import "./Header.css"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <h1 className="brand-logo">Nclex-Teacher-Portal</h1>
        </div>

        <nav className={`header-nav ${isMenuOpen ? "nav-open" : ""}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <a href="#" className="nav-link">
                Dashboard
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Analytics
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Settings
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <div className="user-profile">
            <img src="/placeholder.svg?height=32&width=32" alt="User Avatar" className="user-avatar" />
            <span className="user-name">John Doe</span>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
