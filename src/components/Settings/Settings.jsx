import { MdSave, MdNotifications, MdSecurity, MdPalette, MdLanguage } from "react-icons/md"
import "./Settings.css"

const Settings = () => {
  return (
    <div className="settings">
      <div className="settings-header">
        <h1 className="settings-title">Settings</h1>
        <p className="settings-subtitle">Manage your account and application preferences</p>
      </div>

      <div className="settings-content">
        <div className="settings-section">
          <div className="section-header">
            <MdNotifications className="section-icon" />
            <h2 className="section-title">Notifications</h2>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <h3 className="setting-name">Email Notifications</h3>
              <p className="setting-description">Receive email updates about your projects</p>
            </div>
            <label className="toggle">
              <input type="checkbox" defaultChecked />
              <span className="toggle-slider"></span>
            </label>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <h3 className="setting-name">Push Notifications</h3>
              <p className="setting-description">Get notified about important updates</p>
            </div>
            <label className="toggle">
              <input type="checkbox" />
              <span className="toggle-slider"></span>
            </label>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <MdSecurity className="section-icon" />
            <h2 className="section-title">Security</h2>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <h3 className="setting-name">Two-Factor Authentication</h3>
              <p className="setting-description">Add an extra layer of security to your account</p>
            </div>
            <button className="setting-button">Enable</button>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <h3 className="setting-name">Change Password</h3>
              <p className="setting-description">Update your account password</p>
            </div>
            <button className="setting-button secondary">Change</button>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <MdPalette className="section-icon" />
            <h2 className="section-title">Appearance</h2>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <h3 className="setting-name">Theme</h3>
              <p className="setting-description">Choose your preferred theme</p>
            </div>
            <select className="setting-select">
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
        </div>

        <div className="settings-section">
          <div className="section-header">
            <MdLanguage className="section-icon" />
            <h2 className="section-title">Language & Region</h2>
          </div>
          <div className="setting-item">
            <div className="setting-info">
              <h3 className="setting-name">Language</h3>
              <p className="setting-description">Select your preferred language</p>
            </div>
            <select className="setting-select">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
            </select>
          </div>
        </div>
      </div>

      <div className="settings-footer">
        <button className="save-button">
          <MdSave />
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default Settings
