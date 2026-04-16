import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { uname, password } = user;

    if (!uname || !password) {
      alert("Please enter user details");
      return;
    }

    if (uname === "admin" && password === "admin123") {
      alert("Login Successfully");
      navigate("/roomlist");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: "linear-gradient(to right, #141e30, #243b55)",
      }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{ width: "350px", borderRadius: "15px" }}
      >
        <h3 className="text-center mb-4 text-dark fw-bold">🏨 Login</h3>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>
            <input
              type="text"
              name="uname"
              value={user.uname||''}
              onChange={handleChange}
              className="form-control rounded-pill"
              placeholder="Enter username"
            />
          </div>

          {/* Password */}
          <div className="mb-3 position-relative">
            <label className="form-label fw-semibold">Password</label>
            <input
              type='password'
              name="password"
              value={user.password||''}
              onChange={handleChange}
              className="form-control rounded-pill pe-5"
              placeholder="Enter password"
            />
          </div>
          <div className="text-center mt-4">
            <button className="btn btn-dark rounded-pill w-100">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
