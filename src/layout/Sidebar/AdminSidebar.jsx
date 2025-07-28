import { useState } from "react";
import { NavLink } from "react-router-dom"; // ✅ Use NavLink!
import {
  MdDashboard,
  MdPeople,
  MdLibraryBooks,
  MdApartment,
  MdBarChart,
  MdSettings,
  MdPerson,
  MdChevronLeft,
  MdChevronRight,
  MdAssignmentTurnedIn
} from "react-icons/md";

import "./Sidebar.css";

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { icon: MdDashboard, label: "Dashboard", href: "/admin/dashboard" },
    { icon: MdPeople, label: "Manage Users", href: "/admin/users" },
    { icon: MdLibraryBooks, label: "Manage Courses", href: "/admin/courses" },
    { icon: MdApartment, label: "Departments", href: "/admin/departments" },
    { icon: MdBarChart, label: "Reports", href: "/admin/reports" },
    { icon: MdSettings, label: "Settings", href: "/admin/settings" },
    { icon: MdPerson, label: "Profile", href: "/admin/profile" },
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
            return (
              <li key={index} className="sidebar-item">
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    isActive ? "sidebar-link active" : "sidebar-link"
                  }
                >
                  <span className="sidebar-icon">
                    <Icon />
                  </span>
                  <span className="sidebar-label">{item.label}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
