import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Welcome from "./components/Home/Welcome";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  // Check the login status and user info from localStorage on component mount
  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedInUserId = localStorage.getItem("loggedInUserId");

    if (loggedInUserId) {
      const loggedInUser = users.find(user => user.id === loggedInUserId);
      if (loggedInUser) {
        setIsLoggedIn(true);
        setUserName(loggedInUser.name);
      }
    }
  }, []);

  // Handle logout by clearing the login state and localStorage
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName("");
    localStorage.removeItem("loggedInUserId");
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} userName={userName} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Welcome userName={userName} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;

