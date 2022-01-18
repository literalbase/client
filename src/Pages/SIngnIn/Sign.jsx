import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./signin.css";

function Sign() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="wrapper">
      <div className="sign_in">
        <div className="sign_wrapper">
          <div className="signin_div">
            <input
              placeholder="username"
              value={name}
              onChange={(e) => setName}
            />
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword}
            />

            <button>Submit</button>
          </div>
          <div className="auth_question">
            <p>Do you have an account?</p>
            <Link className="link_button" to = '/SignUp'>
              <button>Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sign;
