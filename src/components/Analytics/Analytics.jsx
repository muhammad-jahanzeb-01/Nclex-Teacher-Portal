import { MdTrendingUp, MdTrendingDown, MdShowChart, MdBarChart } from "react-icons/md"
import "./Analytics.css"

const Analytics = () => {
  const metrics = [
    {
      title: "Page Views",
      value: "124,532",
      change: "+12.5%",
      trend: "up",
      icon: MdShowChart,
    },
    {
      title: "Bounce Rate",
      value: "32.4%",
      change: "-2.1%",
      trend: "down",
      icon: MdTrendingDown,
    },
    {
      title: "Session Duration",
      value: "4m 32s",
      change: "+8.2%",
      trend: "up",
      icon: MdTrendingUp,
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+0.8%",
      trend: "up",
      icon: MdBarChart,
    },
  ]

  return (
    <div className="analytics">
      <div className="analytics-header">
        <h1 className="analytics-title">Analytics</h1>
        <p className="analytics-subtitle">Track your performance and insights</p>
      </div>

      <div className="metrics-grid">
        {metrics.map((metric, index) => {
          const IconComponent = metric.icon
          return (
            <div key={index} className="metric-card">
              <div className="metric-icon">
                <IconComponent />
              </div>
              <div className="metric-content">
                <h3 className="metric-value">{metric.value}</h3>
                <p className="metric-title">{metric.title}</p>
                <span className={`metric-change ${metric.trend}`}>{metric.change}</span>
              </div>
            </div>
          )
        })}
      </div>

      <div className="charts-section">
        <div className="chart-container">
          <h3 className="chart-title">Traffic Overview</h3>
          <div className="line-chart">
            <svg viewBox="0 0 400 200" className="chart-svg">
              <polyline
                points="0,150 50,120 100,80 150,100 200,60 250,90 300,40 350,70 400,30"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
              />
              <circle cx="400" cy="30" r="4" fill="#3b82f6" />
            </svg>
          </div>
        </div>

        <div className="chart-container">
          <h3 className="chart-title">Device Usage</h3>
          <div className="pie-chart">
            <div className="pie-segment desktop" data-value="65%">
              Desktop
            </div>
            <div className="pie-segment mobile" data-value="25%">
              Mobile
            </div>
            <div className="pie-segment tablet" data-value="10%">
              Tablet
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Analytics
