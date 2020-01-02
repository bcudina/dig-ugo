import React from "react";
import logo from "./../images/logo/promolink1.png";
//import logo from "../images/logo/promolink1.png";

import { Link } from "react-router-dom";

/* function */

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <a className="navbar-brand ml-5" href="#">
        <img src={logo} alt="logo" style={{ width: "35px" }} />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className="fas fa-bars" style={{ color: "#fff" }} />
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {/*----------------------------------------------------------- */}

        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <Link className="nav-link text-white text-uppercase ml-5" to="/">
              Home&nbsp;
              <i className="fas fa-home" />
              <span className="sr-only">(current)</span>
            </Link>
          </li>

          {/*----------------------------------------------------------- */}
          <div class="dropdown">
            <button
              class="btn btn-active dropdown-toggle ml-5 text-white text-uppercase"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              REKLAME
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <Link class="dropdown-item text-uppercase" to="/slobodnepozicije">
                slobodne pozicije
              </Link>
              <Link class="dropdown-item text-uppercase" to="/news">
                reklame-vrste
              </Link>
              <Link class="dropdown-item text-uppercase" to="/faq">
                FAQ
              </Link>
            </div>
          </div>
          {/*----------------------------------------------------------- */}

          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="/portfolio"
            >
              portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link text-white text-uppercase ml-5"
              to="/contacts"
            >
              contact us
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0 ">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary  my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
