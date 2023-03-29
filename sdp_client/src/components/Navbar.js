import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import "./Navbarcss.css";
const Navbar = () => {
  let location = useLocation();
  let history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.push("/user/login");
  };
  return (
    <>
    <div className="bg-image"></div>
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
          <ul className="navbar-links">
            <li className="navbar-dropdown">
              <Link
                className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="navbar-dropdown">
              <a href="#">User</a>
              <div className="dropdown">
                {!localStorage.getItem("token") ? (
                  <div>
                    <Link
                      className={`nav-link ${location.pathname === "/" ? "active" : ""
                        }`}
                      aria-current="page"
                      to="/User/Login"
                    >
                      Login
                    </Link>
                    <Link
                      className={`nav-link ${location.pathname === "/" ? "active" : ""
                        }`}
                      aria-current="page"
                      to="/User/Signup"
                    >
                      SignUp
                    </Link>
                  </div>
                ) : (
                  <Link onClick={handleLogout} className={`nav-link ${location.pathname === "/" ? "active" : ""
                    }`}>
                    Logout
                  </Link>
                )}
              </div>
            </li>

            <li className="navbar-dropdown">
              <a href="#">Hospital</a>
              <div className="dropdown">
                {!localStorage.getItem("token") ? (
                  <div>
                    <Link
                      className={`nav-link ${location.pathname === "/" ? "active" : ""
                        }`}
                      aria-current="page"
                      to="/Hospital/Login"
                    >
                      Login
                    </Link>
                    <Link
                      className={`nav-link ${location.pathname === "/" ? "active" : ""
                        }`}
                      aria-current="page"
                      to="/Hospital/SignUp"
                    >
                      SignUp
                    </Link>
                  </div>
                ) : (
                  <Link onClick={handleLogout} className={`nav-link ${location.pathname === "/" ? "active" : ""
                    }`}>
                    Logout
                  </Link>
                )}
              </div>
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

        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
