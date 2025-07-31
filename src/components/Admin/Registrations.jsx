import React, { useState, useEffect } from "react";
import "./Registrations.css";
import { FaChalkboardTeacher, FaUserGraduate, FaUserTie } from "react-icons/fa";

const Registrations = () => {
  const [selectedRole, setSelectedRole] = useState("Principal");
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    cnic: "",
    password: "",
    confirmPassword: ""
  });

  const [entries, setEntries] = useState({
    Principal: [],
    Teacher: [],
    Student: []
  });

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("registrations"));
    if (savedEntries) setEntries(savedEntries);
  }, []);

  useEffect(() => {
    localStorage.setItem("registrations", JSON.stringify(entries));
  }, [entries]);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEntries = { ...entries };

    if (isEditing) {
      updatedEntries[selectedRole][editIndex] = formData;
      setIsEditing(false);
      setEditIndex(null);
    } else {
      updatedEntries[selectedRole].push(formData);
    }

    setEntries(updatedEntries);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      cnic: "",
      password: "",
      confirmPassword: ""
    });
    setShowModal(false);
  };

  const handleEdit = (index) => {
    const entryToEdit = entries[selectedRole][index];
    setFormData(entryToEdit);
    setEditIndex(index);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleDelete = (index) => {
    const updatedEntries = { ...entries };
    updatedEntries[selectedRole].splice(index, 1);
    setEntries(updatedEntries);
  };

  return (
    <div className="registration">
      <div className="page-header">
        <h1>User Registration</h1>
        <p>Select a role and register a new user</p>
      </div>

      <div className="registration-tabs">
        <button
          className={`tab-btn ${selectedRole === "Principal" ? "active" : ""}`}
          onClick={() => setSelectedRole("Principal")}
        >
          <FaUserTie /> Principal
        </button>
        <button
          className={`tab-btn ${selectedRole === "Teacher" ? "active" : ""}`}
          onClick={() => setSelectedRole("Teacher")}
        >
          <FaChalkboardTeacher /> Teacher
        </button>
        <button
          className={`tab-btn ${selectedRole === "Student" ? "active" : ""}`}
          onClick={() => setSelectedRole("Student")}
        >
          <FaUserGraduate /> Student
        </button>
        <button className="submit-btn" onClick={() => setShowModal(true)}>
          + Add {selectedRole}
        </button>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <form onSubmit={handleSubmit} className="registration-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>CNIC</label>
                  <input
                    type="text"
                    name="cnic"
                    value={formData.cnic}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Address</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="form-actions">
                <button
                  type="button"
                  className="reset-btn"
                  onClick={() => {
                    setShowModal(false);
                    setIsEditing(false);
                    setEditIndex(null);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      address: "",
                      cnic: "",
                      password: "",
                      confirmPassword: ""
                    });
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  {isEditing ? "Update" : "Register"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="table-container">
        <h3>{selectedRole} List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>CNIC</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entries[selectedRole].map((entry, index) => (
              <tr key={index}>
                <td>{entry.name}</td>
                <td>{entry.email}</td>
                <td>{entry.phone}</td>
                <td>{entry.cnic}</td>
                <td>{entry.address}</td>
                <td>
                  <button
                    onClick={() => handleEdit(index)}
                    className="table-btn edit"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(index)}
                    className="table-btn delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Registrations;
