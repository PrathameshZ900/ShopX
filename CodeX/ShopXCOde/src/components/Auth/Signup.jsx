// Signup.js
import React, { useState } from "react";
import "./AuthForm.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      email,
      password,
    };

    // Get existing users from localStorage or initialize an empty array
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Add the new user to the array
    existingUsers.push(user);

    // Save the updated array back to localStorage
    localStorage.setItem("users", JSON.stringify(existingUsers));

    setMessage("Account created successfully! You can now login.");
    setName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {message && <p className="success-message">{message}</p>}
          <button type="submit" className="auth-btn">Sign Up</button>
        </form>
        <p className="auth-footer">
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
