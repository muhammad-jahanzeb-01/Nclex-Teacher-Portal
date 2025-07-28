import { MdAdd, MdEmail, MdPhone, MdMoreVert } from "react-icons/md"
import "./Team.css"

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "John Doe",
      role: "Frontend Developer",
      email: "john@example.com",
      phone: "+1 234 567 8901",
      avatar: "/placeholder.svg?height=80&width=80&text=JD",
      status: "online",
      projects: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "UI/UX Designer",
      email: "jane@example.com",
      phone: "+1 234 567 8902",
      avatar: "/placeholder.svg?height=80&width=80&text=JS",
      status: "away",
      projects: 3,
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Backend Developer",
      email: "mike@example.com",
      phone: "+1 234 567 8903",
      avatar: "/placeholder.svg?height=80&width=80&text=MJ",
      status: "online",
      projects: 4,
    },
    {
      id: 4,
      name: "Sarah Wilson",
      role: "Project Manager",
      email: "sarah@example.com",
      phone: "+1 234 567 8904",
      avatar: "/placeholder.svg?height=80&width=80&text=SW",
      status: "offline",
      projects: 8,
    },
  ]

  return (
    <div className="team">
      <div className="team-header">
        <div>
          <h1 className="team-title">Team</h1>
          <p className="team-subtitle">Manage your team members and their roles</p>
        </div>
        <button className="add-member-btn">
          <MdAdd />
          Add Member
        </button>
      </div>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="member-card">
            <div className="member-header">
              <button className="member-menu">
                <MdMoreVert />
              </button>
            </div>

            <div className="member-avatar">
              <img src={member.avatar || "/placeholder.svg"} alt={member.name} />
              <div className={`status-indicator ${member.status}`}></div>
            </div>

            <div className="member-info">
              <h3 className="member-name">{member.name}</h3>
              <p className="member-role">{member.role}</p>
              <div className="member-projects">{member.projects} active projects</div>
            </div>

            <div className="member-contact">
              <div className="contact-item">
                <MdEmail />
                <span>{member.email}</span>
              </div>
              <div className="contact-item">
                <MdPhone />
                <span>{member.phone}</span>
              </div>
            </div>

            <div className="member-actions">
              <button className="action-btn primary">Message</button>
              <button className="action-btn secondary">View Profile</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Team
