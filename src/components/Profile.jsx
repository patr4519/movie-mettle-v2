import React, { useState } from 'react';

const Profile = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="profile">
      {isLoggedIn ? (
        <div className="profile-info">
          <h1>Welcome, {username}!</h1>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Login</h1>
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
          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  );
};

export default Profile;
