import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
const Navbar = () => {
  let location = useLocation();
  let history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/user/login");
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          ALYF
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/hospital/Login"
              >
                Hospital
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : ""
                }`}
                aria-current="page"
                to="/admin/Home/"
              >
                Admin
              </Link>
            </li> */}

            {/* <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                aria-current="page"
                to="/about"
              >
                About
              </Link>
            </li> */}
          </ul>
          {!localStorage.getItem("token") ? (
            <div>
              <Link
                className="btn btn-primary mx-2"
                to="/user/login"
                role="button"
              >
                Login
              </Link>
              <Link
                className="btn btn-primary mx-2"
                to="/user/signup"
                role="button"
              >
                Signup
              </Link>
            </div>
          ) : (
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
