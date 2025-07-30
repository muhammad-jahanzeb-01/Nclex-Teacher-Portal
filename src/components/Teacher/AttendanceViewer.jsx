import React, { useState, useEffect } from "react";
import "./AttendanceViewer.css";

const initialStudents = [
  { id: 1, name: "Ali Khan" },
  { id: 2, name: "Sara Ahmed" },
  { id: 3, name: "Usman Tariq" },
];

const Attendance = () => {
  const [students, setStudents] = useState(
    initialStudents.map((student) => ({
      ...student,
      status: "Not Marked",
      signInTime: null,
      signOutTime: null,
      duration: "",
    }))
  );
  const [history, setHistory] = useState([]);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const calculateDuration = (start, end) => {
    const diffMs = new Date(end) - new Date(start);
    const minutes = Math.floor(diffMs / 60000);
    const seconds = Math.floor((diffMs % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
  };

  const handleAttendance = (id, action) => {
    setStudents((prev) =>
      prev.map((student) => {
        if (student.id === id) {
          const now = new Date();
          if (action === "in") {
            return {
              ...student,
              signInTime: now,
              signOutTime: null,
              status: "Signed In",
              duration: "",
            };
          } else if (action === "out" && student.signInTime) {
            const duration = calculateDuration(student.signInTime, now);
            const updatedStudent = {
              ...student,
              signOutTime: now,
              status: "Signed Out",
              duration,
            };
            setHistory((prevHistory) => [
              ...prevHistory,
              {
                name: student.name,
                signIn: student.signInTime.toLocaleTimeString(),
                signOut: now.toLocaleTimeString(),
                duration,
              },
            ]);
            return updatedStudent;
          }
        }
        return student;
      })
    );
  };

  return (
    <div className="attendance-container">
      <h2>🕒 {currentTime.toLocaleTimeString()}</h2>

      <table className="attendance-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Status</th>
            <th>Sign In</th>
            <th>Sign Out</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.name}</td>
              <td className={s.status === "Signed In" ? "in" : s.status === "Signed Out" ? "out" : ""}>
                {s.status}
              </td>
              <td>{s.signInTime ? s.signInTime.toLocaleTimeString() : "-"}</td>
              <td>{s.signOutTime ? s.signOutTime.toLocaleTimeString() : "-"}</td>
              <td>{s.duration || "-"}</td>
              <td>
                <button onClick={() => handleAttendance(s.id, "in")}>Sign In</button>
                <button onClick={() => handleAttendance(s.id, "out")}>Sign Out</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>📜 Attendance History</h3>
      <table className="attendance-table history-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Sign In</th>
            <th>Sign Out</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {history.length > 0 ? (
            history.map((record, idx) => (
              <tr key={idx}>
                <td>{record.name}</td>
                <td>{record.signIn}</td>
                <td>{record.signOut}</td>
                <td>{record.duration}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No history yet.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Attendance;
