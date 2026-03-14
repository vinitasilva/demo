import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const createUser = () => {
    if (name === "" || email === "") {
      setMessage("Please enter name and email");
      return;
    }

    setMessage(`User created successfully: ${name} (${email})`);

    setName("");
    setEmail("");
  };

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Create User</h1>

      <div>
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <br />

      <div>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <br />

      <button onClick={createUser}>Create User</button>

      <br />
      <br />

      <p>{message}</p>
    </div>
  );
}

export default App;
