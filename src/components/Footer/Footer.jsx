import React from "react";
import "./footer.css";
import { contact__list } from "../Data__structure";

const Footer = () => {
  return (
    <>
      <footer>
        <div class="foot">
          <div class="about__col">
            <ul>
              <div id="about">
                <li>
                  <h4>ABOUT</h4>
                </li>
                <li>
                  <a href="#">Company Profile</a>
                </li>
                <li>
                  <a href="#">Industries Served</a>
                </li>
              </div>
            </ul>
          </div>
          <div id="resources" className="resources__col">
            <ul>
              <li>
                <h4>RESOURCES</h4>
              </li>
              <li>
                <a href="#">Product Catalogs</a>
              </li>
              <li>
                <a href="#">Certificates</a>
              </li>
            </ul>
          </div>
          <div class="contact" id="contact">
            <h4>CONTACT US</h4>
            <ul>
              {contact__list.map(({ href, icon, text }) => (
                <li>
                  <a href={href}>
                    {icon} {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div class="address">
            <img src="../Image/Template/address.png" alt="Fax" />
            Shop No.02, Bhanu Co-op CHS, Khopat, Thane(W)-400601.
          </div>
        </div>
        <div class="foot policy">
          <ul>
            <li>
              <a href="#">Privacy Statement</a>
            </li>
            <li>
              <a href="#">Tearms of Use</a>
            </li>
            <li>
              <a href="#">Anti-Counterfeiting Statement</a>
            </li>
            <li>
              <a href="#">Site Map</a>
            </li>
          </ul>
        </div>
        <ul class="foot final">
          {" "}
          Copyright &copy 2022 MTS. All rights reserved
        </ul>
      </footer>
    </>
  );
};

export default Footer;
