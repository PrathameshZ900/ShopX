import React from "react";
import "./Welcome.css"; // Make sure to link your CSS file

function Welcome({ userName }) {
  return (
    <div className="welcome-container">
      {userName ? (
        <h1 className="welcome-message">Welcome back, {userName}!</h1>
      ) : (
        <h1 className="welcome-message">Please log in to continue.</h1>
      )}
    </div>
  );
}

export default Welcome;
