import { useState } from "react";
import { NavLink } from "react-router-dom"; // ✅ Use NavLink!
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

const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
      { icon: MdDashboard, label: "Home", href: "/admin/dashboard" },
  { icon: MdPeople, label: "Students", href: "/admin/students" },
  { icon: MdAdminPanelSettings, label: "Users", href: "/admin/users" },
  { icon: MdLibraryBooks, label: "Courses", href: "/admin/courses" },
  { icon: MdSchool, label: "Teacher", href: "/admin/teacher" },
  { icon: MdHowToReg, label: "Registration", href: "/admin/registration" },
  { icon: MdMenuBook, label: "Lesson Plan", href: "/admin/lesson-plan" },
  { icon: MdBarChart, label: "Reports", href: "/admin/reports" },
  { icon: MdSettings, label: "Settings", href: "/admin/settings" },
  { icon: MdAssignmentInd, label: "Principals", href: "/admin/principals" },
  { icon: MdPerson, label: "Profile", href: "/admin/profile" },
  { icon: MdCalendarToday, label: "Attendance", href: "/admin/attendance" },
  { icon: MdMenuBook, label: "Weekly Breakdown", href: "/admin/weekly-breakdown" },
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
