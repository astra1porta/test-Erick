"use client";
import { useState } from "react";

export default function demoForm() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  function verify() {
    if (username === "") {
      return false;
    }
  }

  return (
    <div>
      <form
        method="POST"
        action="/demoForm"
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            username
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputusername1"
            aria-describedby="usernameHelp"
            value={username}
            onChange={setUsername}
          />
          <div id="usernameHelp" className="form-text">
            We'll never share your username with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            autoComplete="new-password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={setPassword}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
