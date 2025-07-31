import React, { useState } from "react";
import "./TeacherProfile.css";
import { FiEdit2, FiLogOut, FiSave } from "react-icons/fi";

const TeacherProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState({
    name: "Jahanzeb Anwar",
    role: "Teacher",
    email: "teacher@lms.com",
    phone: "+92 300 1234567",
    address: "123 Model Town, Lahore",
    cnic: "35201-1234567-8",
    description: "Experienced Science Teacher",
    joinDate: "10 Jan 2024",
    status: "Active",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleEdit = () => setEditMode(!editMode);

  return (
    <div className="admin-card">
      <div className="admin-avatar-section">
        <img
          src="https://via.placeholder.com/120"
          alt="Teacher"
          className="admin-avatar"
        />
        <div>
          <h2>{formData.name}</h2>
          <p>{formData.role}</p>
        </div>
      </div>

      <div className="admin-info-grid">
        {[
          ["Email", "email"],
          ["Phone", "phone"],
          ["Address", "address"],
          ["CNIC", "cnic"],
          ["Description", "description"],
          // ["Status", "status"],
          // ["Join Date", "joinDate"],
        ].map(([label, key]) => (
          <div className="info-box" key={key}>
            <span className="label">{label}</span>
            {editMode ? (
              <input
                type="text"
                name={key}
                className="value-input"
                value={formData[key]}
                onChange={handleChange}
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
        <button className="btn edit-btn" onClick={toggleEdit}>
          {editMode ? <><FiSave /> Save</> : <><FiEdit2 /> Edit Profile</>}
        </button>
        <button className="btn logout-btn">
          <FiLogOut /> Logout
        </button>
      </div>
    </div>
  );
};

export default TeacherProfile;
