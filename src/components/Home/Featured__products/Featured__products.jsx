import React from "react";
import "./featured__products.css";
import { featured__products } from "../../Data__structure";

const Featured__products = () => {
  return (
    <>
      <div class="container text-center">
        <div class="row featured__row">
          {featured__products.map(
            ({ featured__img, featured__name, featured__link }) => (
              <div class="col featured__col">
                <a href={featured__link} target="_blank">
                  <ul className="featured__list">
                    <li>
                      <img src={featured__img} alt={featured__name} />
                    </li>
                    <li className="featured__name">{featured__name}</li>
                  </ul>
                </a>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Featured__products;
