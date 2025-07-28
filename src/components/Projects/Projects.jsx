import { MdAdd, MdMoreVert, MdFolder, MdPeople, MdCalendarToday } from "react-icons/md"
import "./Projects.css"

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Modern online shopping platform with React and Node.js",
      status: "In Progress",
      progress: 75,
      team: 5,
      dueDate: "Dec 15, 2024",
      color: "blue",
    },
    {
      id: 2,
      name: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication",
      status: "Planning",
      progress: 25,
      team: 3,
      dueDate: "Jan 20, 2025",
      color: "green",
    },
    {
      id: 3,
      name: "AI Dashboard",
      description: "Analytics dashboard with machine learning insights",
      status: "Completed",
      progress: 100,
      team: 4,
      dueDate: "Nov 30, 2024",
      color: "purple",
    },
    {
      id: 4,
      name: "Social Media Tool",
      description: "Content management and scheduling platform",
      status: "In Progress",
      progress: 60,
      team: 6,
      dueDate: "Dec 25, 2024",
      color: "orange",
    },
  ]

  return (
    <div className="projects">
      <div className="projects-header">
        <div>
          <h1 className="projects-title">Projects</h1>
          <p className="projects-subtitle">Manage and track your project progress</p>
        </div>
        <button className="add-project-btn">
          <MdAdd />
          New Project
        </button>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className={`project-card ${project.color}`}>
            <div className="project-header">
              <div className="project-icon">
                <MdFolder />
              </div>
              <button className="project-menu">
                <MdMoreVert />
              </button>
            </div>

            <div className="project-content">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-progress">
                <div className="progress-header">
                  <span className="progress-label">Progress</span>
                  <span className="progress-value">{project.progress}%</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${project.progress}%` }}></div>
                </div>
              </div>

              <div className="project-meta">
                <div className="meta-item">
                  <MdPeople />
                  <span>{project.team} members</span>
                </div>
                <div className="meta-item">
                  <MdCalendarToday />
                  <span>{project.dueDate}</span>
                </div>
              </div>

              <div className="project-status">
                <span className={`status-badge ${project.status.toLowerCase().replace(" ", "-")}`}>
                  {project.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
