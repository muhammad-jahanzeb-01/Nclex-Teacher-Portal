"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import {
  MdDashboard,
  MdFolder,
  MdAnalytics,
  MdPeople,
  MdSettings,
  MdSupport,
  MdChevronLeft,
  MdChevronRight,
} from "react-icons/md"
import "./Sidebar.css"

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  const menuItems = [
    { icon: MdDashboard, label: "Dashboard", href: "/dashboard", active: true },
    { icon: MdFolder, label: "Projects", href: "/projects" },
    { icon: MdAnalytics, label: "Analytics", href: "/analytics" },
    { icon: MdPeople, label: "Team", href: "/team" },
    { icon: MdSettings, label: "Settings", href: "/settings" },
    { icon: MdSupport, label: "Support", href: "/support" },
  ]

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
            const IconComponent = item.icon
            return (
              <li key={index} className="sidebar-item">
                <Link to={item.href} className={`sidebar-link ${item.active ? "active" : ""}`}>
                  <span className="sidebar-icon">
                    <IconComponent />
                  </span>
                  <span className="sidebar-label">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="sidebar-user">
          <div className="sidebar-user-avatar">
            <img src="/placeholder.svg?height=40&width=40" alt="User" />
          </div>
          <div className="sidebar-user-info">
            <div className="sidebar-user-name">John Doe</div>
            <div className="sidebar-user-role">Admin</div>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
