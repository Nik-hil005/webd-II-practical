import { useState } from "react";

function InputTask() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1 className="Heading">Live Input Task</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="Input"
      />

      <h2 className="Namee">{name}</h2>
    </div>
  );
}

export default InputTask;
