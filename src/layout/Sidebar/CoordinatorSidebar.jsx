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

const CoordinatorSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { icon: MdDashboard, label: "Dashboard", href: "/coordinator/dashboard" },
  { icon: MdPeople, label: "Students", href: "/coordinator/students" },
  { icon: MdAdminPanelSettings, label: "Users", href: "/coordinator/users" },
  { icon: MdLibraryBooks, label: "Courses", href: "/coordinator/courses" },
  { icon: MdSchool, label: "Teacher", href: "/coordinator/teacher" },
  { icon: MdHowToReg, label: "Registration", href: "/coordinator/registration" },
  { icon: MdMenuBook, label: "Lesson Plan", href: "/coordinator/lesson-plan" },
  { icon: MdBarChart, label: "Reports", href: "/coordinator/reports" },
  { icon: MdSettings, label: "Settings", href: "/coordinator/settings" },
  // { icon: MdAssignmentInd, label: "Principals", href: "/coordinator/principals" },
  { icon: MdPerson, label: "Profile", href: "/coordinator/profile" },
  { icon: MdCalendarToday, label: "Attendance", href: "/coordinator/attendance" },
  { icon: MdMenuBook, label: "Weekly Breakdown", href: "/coordinator/weekly-breakdown" },
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

export default CoordinatorSidebar;
