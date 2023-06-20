import React, { useState } from "react";
import { SignUp } from "./SignUp";
import { LogIn } from "./LogIn";
import { useSelector } from "react-redux";
import { selectUser } from "../features/api/userSlice";
import UserProfile from "./UserProfile";

const Profile = () => {
  const user = useSelector(selectUser);

  if (user) return (<UserProfile user={user}/>)

  return (
    <div className="profile">
      <SignUp />
      <LogIn />
    </div>
  );
};

export default Profile;
