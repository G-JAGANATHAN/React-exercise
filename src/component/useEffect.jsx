import { useState, useEffect } from "react";

const StudentDashboard = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    
      setMessage("Student Dashboard Mounted");
  },[]);

  const handleSubmit = () => {
      setMessage(`Welcome, ${name}!`);
  };

  return (
    <div>
      <h2>{message}</h2>

      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(event) => setName(event.target.value)}
      />

      <button onClick ={handleSubmit }>Submit</button>
    </div>
  );
};

export default StudentDashboard;