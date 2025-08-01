import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const AdminHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleModal = () => setShowModal((prev) => !prev);

  const handleProfileClick = () => {
    navigate("/admin/profile");
    setShowModal(false);
  };

  const handleLogout = () => {
    // implement logout logic here
    navigate("/");
    console.log("Logging out...");
    setShowModal(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setShowModal(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-brand">
          <h1 className="brand-logo">Nclex Admin Portal</h1>
        </div>

        <div className="header-actions">
          <div className="user-profile" onClick={toggleModal}>
            <img src="/placeholder.svg" alt="User" className="user-avatar" />
            <span className="user-name">Admin User</span>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>

          {showModal && (
            <div className="profile-modal" ref={modalRef}>
              <ul>
                <li onClick={handleProfileClick}>View Profile</li>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
