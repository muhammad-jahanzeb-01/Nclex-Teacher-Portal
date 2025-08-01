import React, { useState } from "react";
import "./AdminProfile.css";
import DP from '../../assets/OnePiece.jpg'
import { FiEdit2, FiLogOut, FiSave, FiX } from "react-icons/fi";

const AdminProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "Jahanzeb Anwar",
    role: "Super Admin",
    email: "admin@lms.com",
    phone: "+92 300 1234567",
    cnic: "35202-1234567-8",
    address: "123 Main Street, Lahore",
    description: "Dedicated LMS administrator with a passion for educational tech and training excellence.",
    status: "Active",
    joinDate: "10 Jan 2024",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setEditMode(false);
    console.log("Updated Data:", formData);
    // You can send formData to the backend here
  };

  const handleCancel = () => {
    setEditMode(false);
  };

  return (
    <div className="admin-card">
      <div className="admin-avatar-section">
        <img
          src={DP}
          alt="Admin"
          className="admin-avatar"
        />
        <div>
          {editMode ? (
            <>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="input-edit name-input"
              />
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="input-edit role-input"
              />
            </>
          ) : (
            <>
              <h2>{formData.name}</h2>
              <p>{formData.role}</p>
            </>
          )}
        </div>
      </div>

      <div className="admin-info-grid">
        {[
          { label: "Email", key: "email" },
          { label: "Phone", key: "phone" },
          { label: "CNIC", key: "cnic" },
          { label: "Address", key: "address" },
          { label: "Description", key: "description", fullWidth: true },
          // { label: "Status", key: "status" },
          // { label: "Join Date", key: "joinDate" },
        ].map(({ label, key, fullWidth }) => (
          <div className={`info-box ${fullWidth ? "full-width" : ""}`} key={key}>
            <span className="label">{label}</span>
            {editMode ? (
              <input
                type="text"
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="input-edit"
              />
            ) : (
              <span className={`value ${key === "status" ? "status" : ""}`}>
                {formData[key]}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="admin-actions">
        {editMode ? (
          <>
            <button className="btn save-btn" onClick={handleSave}>
              <FiSave /> Save
            </button>
            <button className="btn cancel-btn" onClick={handleCancel}>
              <FiX /> Cancel
            </button>
          </>
        ) : (
          <>
            <button className="btn edit-btn" onClick={() => setEditMode(true)}>
              <FiEdit2 /> Edit Profile
            </button>
            <button className="btn logout-btn">
              <FiLogOut /> Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;
