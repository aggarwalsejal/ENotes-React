import React from "react";

function Login() {
  return (
    <div>
      <form>
        <div className="mb-3 mt-5">
          <label htmlFor="email" className="form-label">
            <strong>Email address</strong>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3 mt-5">
          <label htmlFor="password" className="form-label">
            <strong>Password</strong>
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
          />
          <div id="emailHelp" className="form-text">
            Enter your password here to complete the Login process
          </div>
        </div>
        <div className="text-center mt-5">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
