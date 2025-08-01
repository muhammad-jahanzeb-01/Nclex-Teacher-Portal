import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ import useLocation
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
  MdChevronRight,
} from "react-icons/md";
import "./Sidebar.css";

const TeacherSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation(); // ✅ get current route path

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { icon: MdDashboard, label: "Home", href: "/teacher/dashboard" },
    { icon: MdLibraryBooks, label: "Courses", href: "/teacher/courses" },
    { icon: MdHowToReg, label: "Registration", href: "/teacher/registration" },
    { icon: MdCalendarToday, label: "Attendance", href: "/teacher/attendance" },
    { icon: MdBarChart, label: "Reports", href: "/teacher/reports" },
    { icon: MdPerson, label: "Profile", href: "/teacher/profile" },
    { icon: MdSettings, label: "Settings", href: "/teacher/settings" },
  ];

  return (
    <aside className={`sidebar ${isCollapsed ? "sidebar-collapsed" : ""}`}>
      <div className="sidebar-header">
        <button
          className="sidebar-toggle"
          onClick={toggleSidebar}
          aria-label="Toggle sidebar"
        >
          {isCollapsed ? <MdChevronRight /> : <MdChevronLeft />}
        </button>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-menu">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.href; // ✅ check active
            return (
              <li key={index} className="sidebar-item">
                <Link
                  to={item.href}
                  className={`sidebar-link ${isActive ? "active" : ""}`} // ✅ apply active class
                >
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
