import React from "react";
import "./resources__home.css";
import { resource__data } from "../../Data__structure";

const Resources__home = () => {
  return (
    <div>
      <ul className="recources__icon">
        {resource__data.map(({ icon, name2 }) => (
          <li>
            <a href="#" className="recources__list">
              {icon}
              <span className="recources__name">{name2}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources__home;
