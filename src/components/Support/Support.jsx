import { MdEmail, MdPhone, MdChat, MdHelp, MdSend, MdFeedback } from "react-icons/md"
import "./Support.css"

const Support = () => {
  const supportOptions = [
    {
      icon: MdChat,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      color: "blue",
    },
    {
      icon: MdEmail,
      title: "Email Support",
      description: "Send us an email and we'll respond within 24 hours",
      action: "Send Email",
      color: "green",
    },
    {
      icon: MdPhone,
      title: "Phone Support",
      description: "Call us directly for urgent issues",
      action: "Call Now",
      color: "purple",
    },
  ]

  const faqItems = [
    {
      question: "How do I reset my password?",
      answer: "You can reset your password by clicking the 'Forgot Password' link on the login page.",
    },
    {
      question: "How do I add team members?",
      answer: "Go to the Team section and click the 'Add Member' button to invite new team members.",
    },
    {
      question: "Can I export my project data?",
      answer: "Yes, you can export your project data from the Projects section using the export feature.",
    },
    {
      question: "How do I upgrade my plan?",
      answer: "Visit the Settings page and go to the Billing section to upgrade your subscription plan.",
    },
  ]

  return (
    <div className="support">
      <div className="support-header">
        <h1 className="support-title">Support</h1>
        <p className="support-subtitle">Get help when you need it</p>
      </div>

      <div className="support-options">
        {supportOptions.map((option, index) => {
          const IconComponent = option.icon
          return (
            <div key={index} className={`support-card ${option.color}`}>
              <div className="support-icon">
                <IconComponent />
              </div>
              <div className="support-content">
                <h3 className="support-card-title">{option.title}</h3>
                <p className="support-description">{option.description}</p>
                <button className="support-action">{option.action}</button>
              </div>
            </div>
          )
        })}
      </div>

      <div className="support-sections">
        <div className="faq-section">
          <h2 className="section-title">
            <MdHelp className="section-icon" />
            Frequently Asked Questions
          </h2>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <div key={index} className="faq-item">
                <h3 className="faq-question">{item.question}</h3>
                <p className="faq-answer">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="feedback-section">
          <h2 className="section-title">
            <MdFeedback className="section-icon" />
            Send Feedback
          </h2>
          <div className="feedback-form">
            <div className="form-group">
              <label className="form-label">Type</label>
              <select className="form-select">
                <option>Bug Report</option>
                <option>Feature Request</option>
                <option>General Feedback</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input type="text" className="form-input" placeholder="Brief description of your feedback" />
            </div>
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" rows="4" placeholder="Describe your feedback in detail..."></textarea>
            </div>
            <button className="submit-button">
              <MdSend />
              Submit Feedback
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
