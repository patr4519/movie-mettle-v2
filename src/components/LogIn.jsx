import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../features/api/userSlice";

export const LogIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.get(
        "https://63dbfd55c45e08a04352c66d.mockapi.io/users"
      );

      let user;

      for (let i = 0; i < data.length; i++) {
        if (data[i].login === username && data[i].password === password) {
          user = data[i];
          dispatch(addUser(user));
          return;
        }
      }
      alert("No such user!");
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
        <h1>Sign In</h1>
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
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
