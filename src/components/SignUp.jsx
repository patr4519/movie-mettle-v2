import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "https://63dbfd55c45e08a04352c66d.mockapi.io/users",
        {
          login: username,
          password: password,
          created: Date.now(),
          favorites: [],
        }
      );
      alert(`${username} was created!`);
    } catch (error) {
      alert(error);
    } finally {
      setUsername("");
      setPassword("");
    }
  };

  return (
    <div className="profile">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button sx={{ height: "35px" }} type="submit">
          Create
        </Button>
      </form>
    </div>
  );
};
