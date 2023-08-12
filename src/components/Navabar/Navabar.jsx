import React from "react";
import { Link } from "react-router-dom";
import sittings from "../../imgs/navbar/settings.svg";
import pill from "../../imgs/navbar/pill.svg";
import person from "../../imgs/navbar/pic.svg";
import down from "../../imgs/navbar/down.svg";
export default function Navabar() {
  return (
    <>
      <nav className="navbar w-100 navbar-expand-lg d-flex justify-content-between  bg-body-tertiary">
        <form
          className="d-flex position-relative align-items-center  w-50"
          role="search"
        >
          <span className=" position-absolute ms-1  ">
            <i className="fa-solid fa-magnifying-glass "></i>
          </span>
          <input
            className="form-control search  ps-4 me-2 bg-body-tertiary rounded-4"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>
        <div>
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
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link>
                  <img src={sittings} alt="" />
                </Link>
              </li>
              <li className="nav-item">
                <Link>
                  <img src={pill} alt="" />
                </Link>
              </li>
              <div className="d-flex align-items-center mx-2">
                <li className="nav-item">
                  <Link>
                    <img src={person} alt="" />
                  </Link>
                  <span className="mx-2"> Scarlett</span>
                  <Link>
                    <img src={down} alt="" />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
