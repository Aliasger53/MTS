import React from "react";
import "./navBar.css";
import { product__data } from "../Data__structure";
import { resource__data } from "../Data__structure";
import LOGO512 from "../../Assets/logo512.png";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light navbar__position">
        <a className="navbar-brand" href="#">
          <img src={LOGO512} alt="logo" className="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active dropdown">
              {/* <li className="nav-item dropdown"> */}
              <div className="down">
                <a
                  className="nav-link dropdown-toggle nav__service"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  PRODUCTS
                </a>
                <div
                  className="dropdown-menu drop__down product__down"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {product__data.map((list, index) => {
                    return (
                      <div className="menu__list">
                        <a
                          className="dropdown-item"
                          href={list.link}
                          key={index}
                        >
                          {list.name}
                          {list.items.map((sub__list, index) => {
                            return (
                              <div className="subMenu__list">
                                <a
                                  className="sub__menu"
                                  href={sub__list.link}
                                  key={index}
                                >
                                  {sub__list.name}
                                </a>
                              </div>
                            );
                          })}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <div className="down">
                <a
                  className="nav-link dropdown-toggle nav__service"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  RESOURCES
                </a>
                <div
                  className="dropdown-menu drop__down recource__down"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  {resource__data.map(({ name, link }) => (
                    <a className="dropdown-item" href={link}>
                      {name}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                OUR CLIENTS
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
