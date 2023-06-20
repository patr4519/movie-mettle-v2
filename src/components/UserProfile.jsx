import React from 'react';

const UserProfile = ({ user }) => {
  const { id, login, created, favorites } = user;

  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="profile-details">
        <div className="detail">
          <span className="label">ID:</span>
          <span className="value">{id}</span>
        </div>
        <div className="detail">
          <span className="label">Login:</span>
          <span className="value">{login}</span>
        </div>
        <div className="detail">
          <span className="label">Created:</span>
          <span className="value">{new Date(created).toLocaleString()}</span>
        </div>
        <div className="detail">
          <span className="label">Favorites:</span>
          <span className="value">{favorites.length}</span>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
