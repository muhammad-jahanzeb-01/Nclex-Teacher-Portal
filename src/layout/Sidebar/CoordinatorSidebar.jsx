import { useState } from "react";
import { Link } from "react-router-dom";
import { MdChevronRight, MdChevronLeft, MdSettings, MdSupport, MdAnalytics, MdFolder, MdDashboard, MdClass, MdPersonAdd, MdPeople, MdFactCheck, MdBarChart, MdPerson } from "react-icons/md";

import "./Sidebar.css";

const CoordinatorSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const menuItems = [
    { icon: MdDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: MdFolder, label: "Projects", href: "/projects" },
    { icon: MdAnalytics, label: "Analytics", href: "/analytics" },
    { icon: MdPeople, label: "Team", href: "/team" },
    { icon: MdSettings, label: "Settings", href: "/settings" },
    { icon: MdSupport, label: "Support", href: "/support" },
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
