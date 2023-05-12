import React from "react"
import logo from '../../../public/logo.svg';
import "./NavLogin.css"
import { BoxArrowRight, Gear } from "react-bootstrap-icons";

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
                  <a className="nav-link" style={{marginLeft:"20em"}} aria-current="page" href="/dashboard">
                    Dashboard
                  </a>
                </li>
                <li className="nav-item mt-3 mx-3">
                  <a className="nav-link" href="/catalog">Course</a>
                </li>
                <li className="nav-item dropdown" style={{marginTop:"1em", marginLeft:"19em"}}>
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Account
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="/setting"><Gear/> Setting</a>
                    </li>
                    <li>
                      <a className="dropdown-item text-danger" href="/login"><BoxArrowRight/> Logout</a>
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