import React from "react";

function login() {
  return (
    <div>
        <div className="header">
          <h1>To-Do-List</h1>
          <h2>make your day better</h2>
        </div>
        <div className="login-box">
          <h2>Log in</h2>
          <input type="email" placeholder="Enter email" className = "email"/>
          <input type="password" placeholder="Enter password" className="password"/>
          <button className="btn-login">Log in</button>
          <h3>OR</h3>
          <button className="btn-other"><i class="fab fa-google"></i> Continue with Google</button>
          <button className="btn-other"><i class="fab fa-microsoft"></i> Continue with Microsoft</button>
          <button className="btn-other"><i class="fab fa-apple"></i> Continue with Apple</button>
          <div className="route">
            <a href="">Can't log in?</a>
            <a href="">Already have an account?</a>
          </div>
        </div>
    </div>
  );
}

export default login;
