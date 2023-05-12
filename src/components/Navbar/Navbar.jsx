import React from "react"
import logo from '../../../public/logo.svg';

const Navbar = () => {
    return(
      <nav className="navbar navbar-expand-lg navbar fixed-top " style={{backgroundColor:"white"}}>
        <div className="container-fluid">
          <a className="navbar-brand active text-dark" href="#">
            <img
                className=" img img-fluid mx-auto d-block"
                src={logo}
                alt="Logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{color: "#606176", fontWeight:"bold"}}
                  href="/login"
                >
                  Sign In
                </a>
              </li>
              <li className="nav-item">
                <a 
                    className="nav-link active text-light rounded" 
                    style={{backgroundColor: "#44039B", fontWeight:"bold"}}
                    href="/register">
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar