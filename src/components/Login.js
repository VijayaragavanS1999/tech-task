import React, { useState, useEffect } from "react";
import axios from "axios";
import App from "./App";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, password };
    const response = await axios.post(
      "http://blogservice.herokuapp.com/api/login",
      user
    );
    setUser(response.data);
    localStorage.setItem("user", response.data);
    console.log(response.data);
  };

  if (user) {
    return (
      <div>
        {user.name} <App />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        placeholder="enter a username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
