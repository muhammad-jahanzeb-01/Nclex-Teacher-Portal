import React, { useState, useEffect } from "react";
import * as XLSX from "xlsx";
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
    confirmPassword: "",
    campus: ""
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
    resetForm();
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

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      cnic: "",
      password: "",
      confirmPassword: "",
      campus: ""
    });
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const workbook = XLSX.read(bstr, { type: "binary" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { defval: "" });

      const expectedKeys = ["name", "email", "phone", "cnic", "address", "campus", "password", "confirmPassword"];
      const isValid = jsonData.every((row) =>
        expectedKeys.every((key) => key in row)
      );

      if (!isValid) {
        alert("Invalid Excel format. Required columns: " + expectedKeys.join(", "));
        return;
      }

      const updatedEntries = { ...entries };
      updatedEntries[selectedRole] = [...updatedEntries[selectedRole], ...jsonData];
      setEntries(updatedEntries);
    };

    reader.readAsBinaryString(file);
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

        <label className="upload-label">
          📥 Upload Excel
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={handleExcelUpload}
            style={{ display: "none" }}
          />
        </label>
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

              <div className="form-row">
                <div className="form-group">
                  <label>Campus</label>
                  <select
                    name="campus"
                    value={formData.campus}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Campus</option>
                    <option value="Main Campus">Main Campus</option>
                    <option value="North Campus">North Campus</option>
                    <option value="South Campus">South Campus</option>
                    <option value="Online">Online</option>
                  </select>
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
                    resetForm();
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
              <th>Campus</th>
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
                <td>{entry.campus}</td>
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
