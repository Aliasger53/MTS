import React from "react";
import "./side__Socials.css";
import { contact__list } from "../Data__structure";

const Side__Socials = () => {
  return (
    <div className="header__socials">
      {contact__list.map(({ href, icon }) => (
        <a href={href} className="header__socials-link" target="_black">
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Side__Socials;
