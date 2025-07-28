import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./components/Login/LoginPage";

// Layouts
import AdminLayout from "./layout/AdminLayout.jsx";
import CoordinatorLayout from "./layout/CoordinatorLayout";
import TeacherLayout from "./layout/TeacherLayout";

// Admin Components
import AdminDashboard from "./components/Admin/Dashboard.jsx";
import ManageUsers from "./components/Admin/ManageUsers.jsx";
import ManageCourses from "./components/Admin/ManageCourses.jsx";
import ManageDepartments from "./components/Admin/ManageDepartments.jsx";
import AdminReports from "./components/Admin/Reports.jsx";
import AdminSettings from "./components/Admin/Settings.jsx";
import AdminProfile from "./components/Admin/AdminProfile.jsx";

// Coordinator Components
import CoordinatorDashboard from "./components/Coordinator/Dashboard.jsx";
import ManageClasses from "./components/Coordinator/ManageClasses.jsx";
import AssignTeachers from "./components/Coordinator/AssignTeachers.jsx";
import StudentList from "./components/Coordinator/StudentList.jsx";
import AttendanceOverview from "./components/Coordinator/AttendanceOverview.jsx";
import CoordinatorReports from "./components/Coordinator/Reports.jsx";
import CoordinatorProfile from "./components/Coordinator/CoordinatorProfile.jsx";

// Teacher Components
import TeacherDashboard from "./components/Teacher/Dashboard.jsx";
import MyClasses from "./components/Teacher/MyClasses.jsx";
import TakeAttendance from "./components/Teacher/TakeAttendance.jsx";
import AttendanceReport from "./components/Teacher/SeeAttendanceReport.jsx";
import Gradebook from "./components/Teacher/Gradebook.jsx";
import Resources from "./components/Teacher/Resources.jsx";
import TeacherProfile from "./components/Teacher/TeacherProfile.jsx";

// ProtectedRoute wrapper
const ProtectedRoute = ({ children, role }) => {
  if (!role) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  const [role, setRole] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setRole={setRole} />} />

        {/* Admin Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute role={role}>
              <AdminLayout>
                <Routes>
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="users" element={<ManageUsers />} />
                  <Route path="courses" element={<ManageCourses />} />
                  <Route path="departments" element={<ManageDepartments />} />
                  <Route path="reports" element={<AdminReports />} />
                  <Route path="settings" element={<AdminSettings />} />
                  <Route path="profile" element={<AdminProfile />} />
                </Routes>
              </AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* Coordinator Routes */}
        <Route
          path="/coordinator/*"
          element={
            <ProtectedRoute role={role}>
              <CoordinatorLayout>
                <Routes>
                  <Route path="dashboard" element={<CoordinatorDashboard />} />
                  <Route path="classes" element={<ManageClasses />} />
                  <Route path="assign-teachers" element={<AssignTeachers />} />
                  <Route path="students" element={<StudentList />} />
                  <Route path="attendance" element={<AttendanceOverview />} />
                  <Route path="reports" element={<CoordinatorReports />} />
                  <Route path="profile" element={<CoordinatorProfile />} />
                </Routes>
              </CoordinatorLayout>
            </ProtectedRoute>
          }
        />

        {/* Teacher Routes */}
        <Route
          path="/teacher/*"
          element={
            <ProtectedRoute role={role}>
              <TeacherLayout>
                <Routes>
                  <Route path="dashboard" element={<TeacherDashboard />} />
                  <Route path="classes" element={<MyClasses />} />
                  <Route path="take-attendance" element={<TakeAttendance />} />
                  <Route path="attendance-report" element={<AttendanceReport />} />
                  <Route path="gradebook" element={<Gradebook />} />
                  <Route path="resources" element={<Resources />} />
                  <Route path="profile" element={<TeacherProfile />} />
                </Routes>
              </TeacherLayout>
            </ProtectedRoute>
          }
        />

        {/* Redirect any unknown route to login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
