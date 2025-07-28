import { MdTrendingUp, MdPeople, MdAttachMoney, MdShoppingCart, MdMoreVert } from "react-icons/md"
import "./Dashboard.css"

const Dashboard = () => {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      icon: MdAttachMoney,
      color: "green",
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+180.1%",
      icon: MdPeople,
      color: "blue",
    },
    {
      title: "Sales",
      value: "12,234",
      change: "+19%",
      icon: MdShoppingCart,
      color: "purple",
    },
    {
      title: "Growth",
      value: "+573",
      change: "+201%",
      icon: MdTrendingUp,
      color: "orange",
    },
  ]

  const recentActivities = [
    { id: 1, user: "John Doe", action: "Created new project", time: "2 hours ago" },
    { id: 2, user: "Jane Smith", action: "Updated dashboard", time: "4 hours ago" },
    { id: 3, user: "Mike Johnson", action: "Completed task", time: "6 hours ago" },
    { id: 4, user: "Sarah Wilson", action: "Added new member", time: "8 hours ago" },
  ]

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1 className="dashboard-title">Dashboard</h1>
        <p className="dashboard-subtitle">Welcome back! Here's what's happening with your projects.</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <div key={index} className={`stat-card ${stat.color}`}>
              <div className="stat-header">
                <div className="stat-icon">
                  <IconComponent />
                </div>
                <button className="stat-menu">
                  <MdMoreVert />
                </button>
              </div>
              <div className="stat-content">
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-title">{stat.title}</p>
                <span className="stat-change">{stat.change} from last month</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="dashboard-content">
        <div className="chart-section">
          <div className="chart-card">
            <h3 className="chart-title">Revenue Overview</h3>
            <div className="chart-placeholder">
              <div className="chart-bars">
                <div className="bar" style={{ height: "60%" }}></div>
                <div className="bar" style={{ height: "80%" }}></div>
                <div className="bar" style={{ height: "40%" }}></div>
                <div className="bar" style={{ height: "90%" }}></div>
                <div className="bar" style={{ height: "70%" }}></div>
                <div className="bar" style={{ height: "85%" }}></div>
                <div className="bar" style={{ height: "65%" }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="activity-section">
          <div className="activity-card">
            <h3 className="activity-title">Recent Activity</h3>
            <div className="activity-list">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="activity-item">
                  <div className="activity-avatar">
                    <img
                      src={`/placeholder.svg?height=32&width=32&text=${activity.user.charAt(0)}`}
                      alt={activity.user}
                    />
                  </div>
                  <div className="activity-content">
                    <p className="activity-text">
                      <strong>{activity.user}</strong> {activity.action}
                    </p>
                    <span className="activity-time">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
