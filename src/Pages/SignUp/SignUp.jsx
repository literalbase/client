import React from "react";
import "./signup.css"


function SignUp() {
  return (
    <div className="wrapper">
    <div className="sign_up">
      <div className="sign_wrapper">
        <div className="auth_div">
          <input placeholder="username" />
          <input placeholder=" your email"/>
          <input type="password" placeholder="password" />
          <button>Submit</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignUp;
