import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MdDashboard,
  MdPeople,
  MdLibraryBooks,
  MdSchool,
  MdHowToReg,
  MdMenuBook,
  MdBarChart,
  MdSettings,
  MdAdminPanelSettings,
  MdPerson,
  MdCalendarToday,
  MdAssignmentInd,
    MdChevronLeft,
    MdChevronRight
} from "react-icons/md";
import "./Sidebar.css";

const TeacherSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { icon: MdDashboard, label: "Dashboard", href: "/teacher/dashboard" },
  { icon: MdPeople, label: "Students", href: "/teacher/students" },
  { icon: MdAdminPanelSettings, label: "Users", href: "/teacher/users" },
  { icon: MdLibraryBooks, label: "Courses", href: "/teacher/courses" },
  { icon: MdSchool, label: "Teacher", href: "/teacher/teacher" },
  { icon: MdHowToReg, label: "Registration", href: "/teacher/registration" },
  { icon: MdMenuBook, label: "Lesson Plan", href: "/teacher/lesson-plan" },
  { icon: MdBarChart, label: "Reports", href: "/teacher/reports" },
  { icon: MdSettings, label: "Settings", href: "/teacher/settings" },
  { icon: MdAssignmentInd, label: "Principals", href: "/teacher/principals" },
  { icon: MdPerson, label: "Profile", href: "/teacher/profile" },
  { icon: MdCalendarToday, label: "Attendance", href: "/teacher/attendance" },
  { icon: MdMenuBook, label: "Weekly Breakdown", href: "/teacher/weekly-breakdown" },

  ];

  return (
    <aside className={`sidebar ${isCollapsed ? "sidebar-collapsed" : ""}`}>
      <div className="sidebar-header">
        <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle sidebar">
          {isCollapsed ? <MdChevronRight /> : <MdChevronLeft />}
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <li key={index} className="sidebar-item">
                <Link to={item.href} className="sidebar-link">
                  <span className="sidebar-icon">
                    <Icon />
                  </span>
                  <span className="sidebar-label">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default TeacherSidebar;
