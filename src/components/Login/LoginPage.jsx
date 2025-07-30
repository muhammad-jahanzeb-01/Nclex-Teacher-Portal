import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage({ setRole }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

 const credentials = {
  "admin@lms.com": { password: "admin", role: "Admin", path: "/admin/dashboard" },
  "coord@lms.com": { password: "coord", role: "Coordinator", path: "/coordinator/dashboard" },
  "teacher@lms.com": { password: "teacher", role: "Teacher", path: "/teacher/dashboard" },
};


  const handleLogin = (e) => {
    e.preventDefault();
    const user = credentials[email.trim().toLowerCase()];

    if (user && user.password === password) {
      setRole(user.role);
      navigate(user.path);
    } else {
      setError("Invalid email or password.");
    }
  };

  const autofill = () => {
    setEmail("admin@lms.com");
    setPassword("admin");
    setError("");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>

        <label>Email:</label>
        <input
          type="email"
          placeholder="e.g. admin@lms.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button onClick={handleLogin}>Login</button>
        <button className="autofill" onClick={autofill}>
          Use Default Admin Login
        </button>
      </div>
    </div>
  );
}

export default LoginPage;
