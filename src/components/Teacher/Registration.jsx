import React, { useState, useEffect } from "react";
import "./Registration.css";
import { FaUserGraduate } from "react-icons/fa";

const Registrations = () => {
  const [entries, setEntries] = useState({ Student: [] });

  useEffect(() => {
    const savedEntries = JSON.parse(localStorage.getItem("registrations"));
    if (savedEntries && savedEntries.Student) {
      setEntries({ Student: savedEntries.Student });
    }
  }, []);

  return (
    <div className="registration">
      <div className="page-header">
        <h1>Student List</h1>
        <p>Only student records are visible now</p>
      </div>

      <div className="registration-tabs">
        <button className="tab-btn active">
          <FaUserGraduate /> Student
        </button>
      </div>

      <div className="table-container">
        <h3>Student List</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>CNIC</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {entries.Student.length > 0 ? (
              entries.Student.map((entry, index) => (
                <tr key={index}>
                  <td>{entry.name}</td>
                  <td>{entry.email}</td>
                  <td>{entry.phone}</td>
                  <td>{entry.cnic}</td>
                  <td>{entry.address}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  No student records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Registrations;
