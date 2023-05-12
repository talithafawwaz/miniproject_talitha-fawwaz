import React from "react"
import logo from '../../../public/logo.svg';
import "./NavLogin.css"
import { BoxArrowRight, Gear } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const NavLogin = () => {

    return(
      <div className="navLogin">
        <nav className="navbar navbar-expand-lg navbar fixed-top w-100" style={{backgroundColor:"white"}}>
          <div className="container">
            <a className="navbar-brand active text-dark" href="/dashboard">
              <img src={logo} alt="Logo"/>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <ul className="navbar-nav">
                <li className="nav-item mt-3 mx-3">
                  <Link className="nav-link" style={{marginLeft:"20em"}} aria-current="page" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item mt-3 mx-3">
                  <Link className="nav-link" to="/catalog">Course</Link>
                </li>
                <li className="nav-item dropdown" style={{marginTop:"1em", marginLeft:"19em"}}>
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Account
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/setting"><Gear/> Setting</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item text-danger" to="/login"><BoxArrowRight/> Logout</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default NavLogin