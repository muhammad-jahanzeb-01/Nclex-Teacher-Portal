import React from "react";
import "./Dashboard.css";
import { FaChalkboardTeacher, FaUserTie, FaUserGraduate } from "react-icons/fa";

const Dashboard = () => {
  const stats = [
    {
      title: "Teachers",
      count: 25,
      icon: <FaChalkboardTeacher />,
      color: "#4e73df",
    },
    {
      title: "Coordinators",
      count: 5,
      icon: <FaUserTie />,
      color: "#1cc88a",
    },
    {
      title: "Students",
      count: 240,
      icon: <FaUserGraduate />,
      color: "#36b9cc",
    },
  ];

  // Example mock teacher reports
  const teacherUpdates = [
    { name: "Mr. Smith", update: "Uploaded new assignment for Math 101" },
    { name: "Ms. Johnson", update: "Added grades for Science quiz" },
    { name: "Mr. Lee", update: "Shared course materials for Physics" },
  ];

  // Example mock student reports
  const studentUpdates = [
    { name: "Ali Khan", update: "Submitted History assignment" },
    { name: "Sara Ali", update: "Completed English quiz" },
    { name: "Ahmed Raza", update: "Requested course extension" },
  ];

  return (
    <div className="superadmin-dashboard">
      <div className="welcome-card">
        <div className="welcome-content">
          <h2>Welcome back</h2>
          <h1>Jenny Wilson</h1>
          <p>Let’s start the day by checking your reports and updates. Have a great day!</p>
          <button className="todo-btn">To - Do List</button>
        </div>
        <div className="welcome-illustration">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Welcome"
          />
        </div>
      </div>

      <div className="stats-cards">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="stat-card"
            style={{ backgroundColor: stat.color }}
          >
            <div className="stat-icon">{stat.icon}</div>
            <div className="stat-info">
              <h4>{stat.title}</h4>
              <p>{stat.count}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="reports">
        <div className="report-card">
          <h2>Teacher Updates</h2>
          <ul>
            {teacherUpdates.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> — {item.update}
              </li>
            ))}
          </ul>
        </div>

        <div className="report-card">
          <h2>Student Updates</h2>
          <ul>
            {studentUpdates.map((item, index) => (
              <li key={index}>
                <strong>{item.name}</strong> — {item.update}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
