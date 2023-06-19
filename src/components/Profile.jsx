import React, { useState } from "react";
import { SignUp } from "./SignUp";
import { LogIn } from "./LogIn";

const Profile = () => {
  

  return (
    <div className="profile">
      <SignUp />
      <LogIn />
    </div>
  );
};

export default Profile;
