// src/components/Reports.jsx

"use client";

import { useState, useEffect } from "react";
import "./Reports.css";
import { FaDownload, FaEye } from "react-icons/fa";

const Reports = () => {
  const [activeTab, setActiveTab] = useState("attendance");
  const [filters, setFilters] = useState({
    institute: "",
    course: "",
    teacher: "",
    dateRange: "",
    city: "",
  });
  const [attendanceData, setAttendanceData] = useState([]);
  const [lectureData, setLectureData] = useState([]);
  const [marksData, setMarksData] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);

  useEffect(() => {
    loadReportsData();
  }, []);

  const loadReportsData = () => {
    const sampleInstitutes = [
      {
        name: "Alpha Institute",
        coordinators: [
          {
            name: "Mr. John Doe",
            teachers: [
              {
                name: "Dr. Eleanor Harper",
                city: "Lahore",
                students: [
                  {
                    name: "Ethan Harper",
                    phone: "03123456789",
                    email: "ethan@example.com",
                    cnic: "35202-1234567-1",
                    documents: ["CNIC.pdf", "Transcript.pdf"],
                    fees: "Paid",
                    marksHistory: [75, 80, 85],
                    lmsId: "STEMETA123",
                    lmsPass: "pass123"
                  }
                ],
                courses: ["Data Science Fundamentals"]
              },
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
        institute: "Alpha Institute"
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
        institute: "Alpha Institute"
      },
    ];

    const sampleMarks = [
      {
        id: 1,
        studentName: "Ethan Harper",
        course: "Data Science Fundamentals",
        quiz: "Quiz 1",
        percentage: 85,
        date: "2024-03-10",
        institute: "Alpha Institute"
      }
    ];

    setInstitutes(sampleInstitutes);
    setAttendanceData(sampleAttendance);
    setLectureData(sampleLectures);
    setMarksData(sampleMarks);
  };

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredData = {
    attendance: attendanceData.filter(r =>
      (!filters.institute || r.institute === filters.institute) &&
      (!filters.course || r.course.toLowerCase().includes(filters.course.toLowerCase()))
    ),
    lecture: lectureData.filter(r =>
      (!filters.institute || r.institute === filters.institute) &&
      (!filters.course || r.course.toLowerCase().includes(filters.course.toLowerCase())) &&
      (!filters.teacher || r.teacherName.toLowerCase().includes(filters.teacher.toLowerCase()))
    ),
    marks: marksData.filter(r =>
      (!filters.institute || r.institute === filters.institute) &&
      (!filters.course || r.course.toLowerCase().includes(filters.course.toLowerCase()))
    )
  };

  const exportToCSV = () => {
    let headers = [];
    let data = [];

    if (activeTab === "attendance") {
      headers = ["Student Name", "Course", "Date", "Status", "Institute"];
      data = filteredData.attendance.map((r) => [r.studentName, r.course, r.date, r.status, r.institute]);
    } else if (activeTab === "lecture") {
      headers = ["Teacher Name", "Course", "Topic", "Date", "Duration", "Students Present", "Institute"];
      data = filteredData.lecture.map((r) => [r.teacherName, r.course, r.topic, r.date, r.duration, r.studentsPresent, r.institute]);
    } else if (activeTab === "marks") {
      headers = ["Student Name", "Course", "Quiz", "Percentage", "Date", "Institute"];
      data = filteredData.marks.map((r) => [r.studentName, r.course, r.quiz, r.percentage, r.date, r.institute]);
    }

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...data.map((row) => row.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `${activeTab}_report.csv`);
    document.body.appendChild(link);
    link.click();
  };

  const showStudentDetails = (student) => setSelectedStudent(student);

  return (
    <div className="reports">
      <div className="reports-header">
        <h1>Reports</h1>
        <div className="filters-grid">
          <select value={filters.institute} onChange={(e) => handleFilterChange("institute", e.target.value)}>
            <option value="">All Institutes</option>
            {institutes.map((i) => <option key={i.name} value={i.name}>{i.name}</option>)}
          </select>
          <input type="text" placeholder="Course" value={filters.course} onChange={(e) => handleFilterChange("course", e.target.value)} />
          <input type="text" placeholder="Teacher" value={filters.teacher} onChange={(e) => handleFilterChange("teacher", e.target.value)} />
          <input type="text" placeholder="City" value={filters.city} onChange={(e) => handleFilterChange("city", e.target.value)} />
          <input type="date" value={filters.dateRange} onChange={(e) => handleFilterChange("dateRange", e.target.value)} />
        </div>
      </div>

      <div className="reports-tabs">
        <button onClick={() => setActiveTab("attendance")}>Attendance</button>
        <button onClick={() => setActiveTab("lecture")}>Lecture</button>
        <button onClick={() => setActiveTab("marks")}>Marks</button>
        <button onClick={() => setActiveTab("students")}>Students</button>
      </div>

      <div className="export-section">
        <button className="download-btn" onClick={exportToCSV}><FaDownload /> Export</button>
      </div>

      <div className="reports-content">
        {activeTab === "attendance" && (
          <table><thead><tr><th>Student</th><th>Course</th><th>Date</th><th>Status</th><th>Institute</th></tr></thead><tbody>
            {filteredData.attendance.map((r) => (
              <tr key={r.id}><td>{r.studentName}</td><td>{r.course}</td><td>{r.date}</td><td>{r.status}</td><td>{r.institute}</td></tr>
            ))}</tbody></table>
        )}

        {activeTab === "lecture" && (
          <table><thead><tr><th>Teacher</th><th>Course</th><th>Topic</th><th>Date</th><th>Duration</th><th>Students</th><th>Institute</th></tr></thead><tbody>
            {filteredData.lecture.map((r) => (
              <tr key={r.id}><td>{r.teacherName}</td><td>{r.course}</td><td>{r.topic}</td><td>{r.date}</td><td>{r.duration}</td><td>{r.studentsPresent}</td><td>{r.institute}</td></tr>
            ))}</tbody></table>
        )}

        {activeTab === "marks" && (
          <table><thead><tr><th>Student</th><th>Course</th><th>Quiz</th><th>%</th><th>Date</th><th>Institute</th></tr></thead><tbody>
            {filteredData.marks.map((r) => (
              <tr key={r.id}><td>{r.studentName}</td><td>{r.course}</td><td>{r.quiz}</td><td>{r.percentage}</td><td>{r.date}</td><td>{r.institute}</td></tr>
            ))}</tbody></table>
        )}

        {activeTab === "students" && (
          <div className="student-list">
            {institutes.flatMap((i) => i.coordinators.flatMap(c => c.teachers.flatMap(t => t.students.map(s => (
              <div className="student-card" key={s.name}>
                <h4>{s.name}</h4>
                <button onClick={() => showStudentDetails(s)}><FaEye /> View Details</button>
              </div>
            )))))}
          </div>
        )}

        {selectedStudent && (
          <div className="student-modal">
            <h3>{selectedStudent.name}</h3>
            <p><b>Email:</b> {selectedStudent.email}</p>
            <p><b>Phone:</b> {selectedStudent.phone}</p>
            <p><b>CNIC:</b> {selectedStudent.cnic}</p>
            <p><b>Fees:</b> {selectedStudent.fees}</p>
            <p><b>LMS ID:</b> {selectedStudent.lmsId}</p>
            <p><b>Password:</b> {selectedStudent.lmsPass}</p>
            <p><b>Marks:</b> {selectedStudent.marksHistory.join(", ")}</p>
            <p><b>Documents:</b> {selectedStudent.documents.join(", ")}</p>
            <button onClick={() => setSelectedStudent(null)}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reports;
