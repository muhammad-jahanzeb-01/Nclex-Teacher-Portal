import { useState } from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdClass, MdCheckCircle, MdAssignmentTurnedIn, MdGrade, MdFolder, MdPerson, MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Sidebar.css";

const TeacherSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { icon: MdDashboard, label: "Dashboard", href: "/teacher/dashboard" },
  { icon: MdClass, label: "My Classes", href: "/teacher/classes" },
  { icon: MdCheckCircle, label: "Take Attendance", href: "/teacher/take-attendance" },
  { icon: MdAssignmentTurnedIn, label: "Attendance Report", href: "/teacher/attendance-report" },
  { icon: MdGrade, label: "Gradebook", href: "/teacher/gradebook" },
  { icon: MdFolder, label: "Resources", href: "/teacher/resources" },
  { icon: MdPerson, label: "Profile", href: "/teacher/profile" },

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
