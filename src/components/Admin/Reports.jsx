// src/components/Reports.jsx

"use client";

import { useState, useEffect } from "react";
import "./Reports.css";

const Reports = () => {
  const [activeTab, setActiveTab] = useState("attendance");
  const [filters, setFilters] = useState({
    institute: "",
    course: "",
    teacher: "",
    dateRange: "",
  });
  const [attendanceData, setAttendanceData] = useState([]);
  const [lectureData, setLectureData] = useState([]);
  const [institutes, setInstitutes] = useState([]);

  useEffect(() => {
    loadReportsData();
  }, []);

  const loadReportsData = () => {
    // Sample Institutes Data
    const sampleInstitutes = [
      {
        name: "Alpha Institute",
        coordinators: [
          {
            name: "Mr. John Doe",
            teachers: [
              {
                name: "Dr. Eleanor Harper",
                students: ["Ethan Harper", "Liam Foster"],
                courses: ["Data Science Fundamentals"]
              },
              {
                name: "Ms. Olivia Carter",
                students: ["Ava Mitchell"],
                courses: ["Software Engineering Principles"]
              }
            ]
          }
        ]
      },
      {
        name: "Beta Institute",
        coordinators: [
          {
            name: "Mrs. Ayesha Khan",
            teachers: [
              {
                name: "Prof. Samuel Bennett",
                students: ["Olivia Bennett", "Noah Carter"],
                courses: ["Machine Learning Applications"]
              }
            ]
          }
        ]
      }
    ];

    const sampleAttendance = [
      {
        id: 1,
        studentName: "Ethan Harper",
        course: "Data Science Fundamentals",
        date: "2024-03-15",
        status: "Present",
        institute: "Alpha Institute",
      },
      {
        id: 2,
        studentName: "Olivia Bennett",
        course: "Machine Learning Applications",
        date: "2024-03-15",
        status: "Absent",
        institute: "Beta Institute",
      },
    ];

    const sampleLectures = [
      {
        id: 1,
        teacherName: "Dr. Eleanor Harper",
        course: "Data Science Fundamentals",
        topic: "Intro to Python",
        date: "2024-03-15",
        duration: "2 hours",
        studentsPresent: 25,
        institute: "Alpha Institute",
      },
      {
        id: 2,
        teacherName: "Prof. Samuel Bennett",
        course: "Machine Learning Applications",
        topic: "Linear Regression",
        date: "2024-03-15",
        duration: "1.5 hours",
        studentsPresent: 22,
        institute: "Beta Institute",
      },
    ];

    setInstitutes(sampleInstitutes);
    setAttendanceData(sampleAttendance);
    setLectureData(sampleLectures);
  };

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const filteredAttendanceData = attendanceData.filter((record) => {
    if (filters.institute && record.institute !== filters.institute) return false;
    if (filters.course && !record.course.toLowerCase().includes(filters.course.toLowerCase())) return false;
    return true;
  });

  const filteredLectureData = lectureData.filter((record) => {
    if (filters.institute && record.institute !== filters.institute) return false;
    if (filters.course && !record.course.toLowerCase().includes(filters.course.toLowerCase())) return false;
    if (filters.teacher && !record.teacherName.toLowerCase().includes(filters.teacher.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="reports">
      <div className="page-header">
        <h1>Reports</h1>
        <p>View and analyze attendance and lecture activity reports</p>
      </div>

      <div className="reports-tabs">
        <button className={`tab-btn ${activeTab === "attendance" ? "active" : ""}`} onClick={() => setActiveTab("attendance")}>Attendance</button>
        <button className={`tab-btn ${activeTab === "lecture" ? "active" : ""}`} onClick={() => setActiveTab("lecture")}>Lecture Activity</button>
      </div>

      <div className="filters-section">
        <h3>Filters</h3>
        <div className="filters-grid">
          <div className="filter-group">
            <select value={filters.institute} onChange={(e) => handleFilterChange("institute", e.target.value)}>
              <option value="">All Institutes</option>
              {institutes.map((inst) => (
                <option key={inst.name} value={inst.name}>{inst.name}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <input type="text" placeholder="Course" value={filters.course} onChange={(e) => handleFilterChange("course", e.target.value)} />
          </div>

          {activeTab === "lecture" && (
            <div className="filter-group">
              <input type="text" placeholder="Teacher" value={filters.teacher} onChange={(e) => handleFilterChange("teacher", e.target.value)} />
            </div>
          )}

          <div className="filter-group">
            <input type="date" value={filters.dateRange} onChange={(e) => handleFilterChange("dateRange", e.target.value)} />
          </div>
        </div>
      </div>

      <div className="reports-content">
        {activeTab === "attendance" && (
          <div className="attendance-report">
            <h2>Attendance Report</h2>
            <div className="report-table">
              <table>
                <thead>
                  <tr>
                    <th>Student Name</th>
                    <th>Course</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Institute</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredAttendanceData.map((record) => (
                    <tr key={record.id}>
                      <td>{record.studentName}</td>
                      <td>{record.course}</td>
                      <td>{record.date}</td>
                      <td><span className={`status ${record.status.toLowerCase()}`}>{record.status}</span></td>
                      <td>{record.institute}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === "lecture" && (
          <div className="lecture-report">
            <h2>Lecture Activity Report</h2>
            <div className="report-table">
              <table>
                <thead>
                  <tr>
                    <th>Teacher Name</th>
                    <th>Course</th>
                    <th>Topic</th>
                    <th>Date</th>
                    <th>Duration</th>
                    <th>Students Present</th>
                    <th>Institute</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredLectureData.map((record) => (
                    <tr key={record.id}>
                      <td>{record.teacherName}</td>
                      <td>{record.course}</td>
                      <td>{record.topic}</td>
                      <td>{record.date}</td>
                      <td>{record.duration}</td>
                      <td>{record.studentsPresent}</td>
                      <td>{record.institute}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
