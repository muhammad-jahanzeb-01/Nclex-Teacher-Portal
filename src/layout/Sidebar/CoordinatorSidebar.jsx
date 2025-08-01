import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // ✅ Import useLocation
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
  const location = useLocation(); // ✅ Get current path

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { icon: MdDashboard, label: "Home", href: "/coordinator/dashboard" },
    { icon: MdLibraryBooks, label: "Courses", href: "/coordinator/courses" },
    { icon: MdHowToReg, label: "Registration", href: "/coordinator/registration" },
    { icon: MdCalendarToday, label: "Attendance", href: "/coordinator/attendance" },
    { icon: MdBarChart, label: "Reports", href: "/coordinator/reports" },
    { icon: MdPerson, label: "Profile", href: "/coordinator/profile" },
    { icon: MdSettings, label: "Settings", href: "/coordinator/settings" },
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
            const isActive = location.pathname === item.href; // ✅ Check if current route matches
            return (
              <li key={index} className="sidebar-item">
                <Link
                  to={item.href}
                  className={`sidebar-link ${isActive ? "active" : ""}`} // ✅ Apply "active" class
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

export default CoordinatorSidebar;
