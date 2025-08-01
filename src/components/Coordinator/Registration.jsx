import React, { useState, useEffect } from "react";
import "./Registration.css";
import { FaChalkboardTeacher, FaUserGraduate } from "react-icons/fa";

const Registrations = () => {
  const [selectedRole, setSelectedRole] = useState("Teacher");
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const [entries, setEntries] = useState({
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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    cnic: "",
    password: "",
    confirmPassword: ""
  });

  const handleEdit = (index) => {
    const entryToEdit = entries[selectedRole][index];
    setFormData(entryToEdit);
    setEditIndex(index);
    setIsEditing(true);
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
        <p>Select a role to view entries</p>
      </div>

      <div className="registration-tabs">
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
      </div>

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
