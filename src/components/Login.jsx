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
    const {uname,password}=user;
    if (!uname || !password) {
      alert("Please enter user details");
    }
    if (uname == "admin") {
      if (password == "admin123") {
        alert("Login Successfully");
        navigate("/roomlist");
      } else {
        alert("Password wrong");
      }
    } else {
      alert("Invalid User name and password");
    }
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <form
              action=""
              method="post"
              className="card p-4 mt-5"
              onSubmit={handleSubmit}
            >
              <h2 className="text-center">Login</h2>
              <div className="mb-3">
                <label htmlFor="uname" className="form-lable mb-1">
                  User Name
                </label>
                <input
                  type="text"
                  name="uname"
                  value={user.uname || ""}
                  onChange={handleChange}
                  id="uname"
                  className="form-control rounded-pill"
                  placeholder="Enter User Name"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="password" className="form-label mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={user.password || ""}
                  onChange={handleChange}
                  id="password"
                  className="form-control rounded-pill"
                  placeholder="Enter Password"
                />
              </div>
              <div className="mb-3 text-center">
                <button
                  type="submit"
                  className="btn btn-dark w-50 rounded-pill"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
