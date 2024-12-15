import React from "react";
import "./App.css";

function Home() {
  return (
    <div className="container text-center">
      <h1 className="my-4">Welcome to Harmonize Calendar</h1>
      <p>Your personal task management and calendar application.</p>
      <img
        src="https://via.placeholder.com/600x300"
        alt="calendar"
        className="img-fluid rounded"
      />
    </div>
  );
}

export default Home;
