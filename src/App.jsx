import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

import LoginPage from "./components/Login/LoginPage";

// Layouts
import AdminLayout from "./layout/AdminLayout";
import CoordinatorLayout from "./layout/CoordinatorLayout";
import TeacherLayout from "./layout/TeacherLayout";

// Admin Components
import AdminDashboard from "./components/Admin/Dashboard";
import ManageUsers from "./components/Admin/ManageUsers";
import ManageCourses from "./components/Admin/ManageCourses";
import Teacher from "./components/Admin/Teacher";
import AdminReports from "./components/Admin/Reports";
import AdminSettings from "./components/Admin/Settings";
import AdminProfile from "./components/Admin/AdminProfile";
import WeeklyBreakdownUploader from "./components/Admin/WeeklyBreakdownUploader";
// import AttendanceViewer from "./components/Admin/AttendanceViewer";
import Students from "./components/Admin/ManageStudents";
import Registration from "./components/Admin/Registrations";
import Principals from "./components/Admin/Principals";
import UploadLessonsPlans from './components/Admin/UploadLessonsPlans'; // ✅ Correct Import

// Coordinator Components
import CoordinatorDashboard from "./components/Coordinator/Dashboard";
import CoordinatorManageUsers from "./components/Coordinator/ManageUsers";
import CoordinatorManageCourses from "./components/Coordinator/ManageCourses";
import CoordinatorTeacher from "./components/Coordinator/Teacher";
import CoordinatorReports from "./components/Coordinator/Reports";
import CoordinatorSettings from "./components/Coordinator/Settings";
import CoordinatorProfile from "./components/Coordinator/CoordinatorProfile";
import CoordinatorWeeklyBreakdownUploader from "./components/Coordinator/WeeklyBreakdownUploader";
import CoordinatorAttendanceViewer from "./components/Coordinator/AttendanceViewer";
import CoordinatorStudents from "./components/Coordinator/ManageStudents";
import CoordinatorRegistration from "./components/Coordinator/Registration";
import CoordinatorPrincipals from "./components/Coordinator/Principals";
import CoordinatorLessonPlan from './components/Coordinator/UploadLessonsPlans';

// Teacher Components
import TeacherDashboard from "./components/Teacher/Dashboard";
import TeacherManageUsers from "./components/Teacher/ManageUsers";
import TeacherManageCourses from "./components/Teacher/ManageCourses";
import TeacherTeacher from "./components/Teacher/Teacher";
import TeacherReports from "./components/Teacher/Reports";
import TeacherSettings from "./components/Teacher/Settings";
import TeacherProfile from "./components/Teacher/TeacherProfile";
import TeacherWeeklyBreakdownUploader from "./components/Teacher/WeeklyBreakdownUploader";
import TeacherAttendanceViewer from "./components/Teacher/AttendanceViewer";
import TeacherStudents from "./components/Teacher/ManageStudents";
import TeacherRegistration from "./components/Teacher/Registration";
import TeacherPrincipals from "./components/Teacher/Principals";
import TeacherLessonPlan from './components/Teacher/UploadLessonsPlans';

function App() {
  const [role, setRole] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setRole={setRole} />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin/students" element={<AdminLayout><Students /></AdminLayout>} />
        <Route path="/admin/users" element={<AdminLayout><ManageUsers /></AdminLayout>} />
        <Route path="/admin/courses" element={<AdminLayout><ManageCourses /></AdminLayout>} />
       <Route path="/admin/courses/:courseName" element={<AdminLayout><UploadLessonsPlans /></AdminLayout>} />
        <Route path="/admin/teacher" element={<AdminLayout><Teacher /></AdminLayout>} />
        <Route path="/admin/reports" element={<AdminLayout><AdminReports /></AdminLayout>} />
        <Route path="/admin/settings" element={<AdminLayout><AdminSettings /></AdminLayout>} />
        <Route path="/admin/profile" element={<AdminLayout><AdminProfile /></AdminLayout>} />
        <Route path="/admin/weekly-breakdown" element={<AdminLayout><WeeklyBreakdownUploader /></AdminLayout>} />
        {/* <Route path="/admin/attendance" element={<AdminLayout><AttendanceViewer /></AdminLayout>} /> */}
        <Route path="/admin/registration" element={<AdminLayout><Registration /></AdminLayout>} />
        <Route path="/admin/principals" element={<AdminLayout><Principals /></AdminLayout>} />
        <Route path="/admin/lesson-plan" element={<AdminLayout><UploadLessonsPlans /></AdminLayout>} /> {/* ✅ Fixed */}

        {/* Coordinator Routes */}
        <Route path="/coordinator/dashboard" element={<CoordinatorLayout><CoordinatorDashboard /></CoordinatorLayout>} />
        <Route path="/coordinator/students" element={<CoordinatorLayout><CoordinatorStudents /></CoordinatorLayout>} />
        <Route path="/coordinator/users" element={<CoordinatorLayout><CoordinatorManageUsers /></CoordinatorLayout>} />
        <Route path="/coordinator/courses" element={<CoordinatorLayout><CoordinatorManageCourses /></CoordinatorLayout>} />
        <Route path="/coordinator/courses/:courseName" element={<CoordinatorLayout><CoordinatorLessonPlan /></CoordinatorLayout>} />
        <Route path="/coordinator/teacher" element={<CoordinatorLayout><CoordinatorTeacher /></CoordinatorLayout>} />
        <Route path="/coordinator/reports" element={<CoordinatorLayout><CoordinatorReports /></CoordinatorLayout>} />
        <Route path="/coordinator/settings" element={<CoordinatorLayout><CoordinatorSettings /></CoordinatorLayout>} />
        <Route path="/coordinator/profile" element={<CoordinatorLayout><CoordinatorProfile /></CoordinatorLayout>} />
        <Route path="/coordinator/weekly-breakdown" element={<CoordinatorLayout><CoordinatorWeeklyBreakdownUploader /></CoordinatorLayout>} />
        <Route path="/coordinator/attendance" element={<CoordinatorLayout><CoordinatorAttendanceViewer /></CoordinatorLayout>} />
        <Route path="/coordinator/registration" element={<CoordinatorLayout><CoordinatorRegistration /></CoordinatorLayout>} />
        <Route path="/coordinator/principals" element={<CoordinatorLayout><CoordinatorPrincipals /></CoordinatorLayout>} />
        <Route path="/coordinator/lesson-plan" element={<CoordinatorLayout><CoordinatorLessonPlan /></CoordinatorLayout>} />

        {/* Teacher Routes */}
        <Route path="/teacher/dashboard" element={<TeacherLayout><TeacherDashboard /></TeacherLayout>} />
        <Route path="/teacher/students" element={<TeacherLayout><TeacherStudents /></TeacherLayout>} />
        <Route path="/teacher/users" element={<TeacherLayout><TeacherManageUsers /></TeacherLayout>} />
        <Route path="/teacher/courses" element={<TeacherLayout><TeacherManageCourses /></TeacherLayout>} /> 
        <Route path="/teacher/courses/:courseName" element={<TeacherLayout><TeacherLessonPlan /></TeacherLayout>} />
        <Route path="/teacher/teacher" element={<TeacherLayout><TeacherTeacher /></TeacherLayout>} />
        <Route path="/teacher/reports" element={<TeacherLayout><TeacherReports /></TeacherLayout>} />
        <Route path="/teacher/settings" element={<TeacherLayout><TeacherSettings /></TeacherLayout>} />
        <Route path="/teacher/profile" element={<TeacherLayout><TeacherProfile /></TeacherLayout>} />
        <Route path="/teacher/weekly-breakdown" element={<TeacherLayout><TeacherWeeklyBreakdownUploader /></TeacherLayout>} />
        <Route path="/teacher/attendance" element={<TeacherLayout><TeacherAttendanceViewer /></TeacherLayout>} />
        <Route path="/teacher/registration" element={<TeacherLayout><TeacherRegistration /></TeacherLayout>} />
        <Route path="/teacher/principals" element={<TeacherLayout><TeacherPrincipals /></TeacherLayout>} />
        <Route path="/teacher/lesson-plan" element={<TeacherLayout><TeacherLessonPlan /></TeacherLayout>} />

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
