// src/components/Admin/AdminProfile.jsx

import React from "react";
import "./TeacherProfile.css";
import { FiEdit2, FiLogOut } from "react-icons/fi";

const AdminProfile = () => {
  return (
    <>
      <div className="admin-card">
        <div className="admin-avatar-section">
          <img
            src="https://via.placeholder.com/120"
            alt="Admin"
            className="admin-avatar"
          />
          <div>
            <h2>Jahanzeb Anwar</h2>
            <p>Super Admin</p>
          </div>
        </div>

        <div className="admin-info-grid">
          <div className="info-box">
            <span className="label">Email</span>
            <span className="value">admin@lms.com</span>
          </div>
          <div className="info-box">
            <span className="label">Phone</span>
            <span className="value">+92 300 1234567</span>
          </div>
          <div className="info-box">
            <span className="label">Status</span>
            <span className="value status">Active</span>
          </div>
          <div className="info-box">
            <span className="label">Join Date</span>
            <span className="value">10 Jan 2024</span>
          </div>
        </div>

        <div className="admin-actions">
          <button className="btn edit-btn"><FiEdit2 /> Edit Profile</button>
          <button className="btn logout-btn"><FiLogOut /> Logout</button>
        </div>
      </div>
    </>
  );
};

export default AdminProfile;
