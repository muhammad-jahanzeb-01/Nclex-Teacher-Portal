import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage({ setRole }) {
  const [selectedRole, setSelectedRole] = useState("Admin");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // if it's in a <form>
    setRole(selectedRole);

    // Navigate to the correct dashboard
    switch (selectedRole) {
      case "Admin":
        navigate("/admin/dashboard");
        break;
      case "Coordinator":
        navigate("/coordinator/dashboard");
        break;
      case "Teacher":
        navigate("/teacher/dashboard");
        break;
      default:
        navigate("/login");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>

        <label>Select Role:</label>
        <select
          value={selectedRole}
          onChange={(e) => setSelectedRole(e.target.value)}
        >
          <option value="Admin">Admin</option>
          <option value="Coordinator">Coordinator</option>
          <option value="Teacher">Teacher</option>
        </select>

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;
