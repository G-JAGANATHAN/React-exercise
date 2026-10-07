import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function Example1() {
  const [name, setName] = useState("");

  return (
    <div className="mt-5">
      <div className = "card p-4 bg-light">
      <label className="form-label">UserName</label>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        className="form-control"
        onChange={(event) => setName(event.target.value)}
      />
      <h2>Hello, {name} Welcome to React</h2>
      <button onClick={() => setName("")}>Clear</button>
    </div>
    </div>
  );
}

export default Example1;