import React from "react";
import { LogIn } from "./LogIn";
import { SignUp } from "./SignUp";

export const AuthorizationForm = () => {
  const [toggle, setToggle] = React.useState("up");

  return (
    <div className="autorize-form">
      <div>Join MovieMettle</div>
      <h2>First, let's create your user account</h2>
      {toggle === "in" && <LogIn />}
      {toggle === "up" && <SignUp />}
      <div>
        Already have an account?{" "}
        <span onClick={() => setToggle("in")}>Sign in</span>
      </div>
    </div>
  );
};
