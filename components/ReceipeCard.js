import React from "react";
import { Communication } from "../script";
import { Link } from "react-router";
export function ReceipeCard({ sep }) {
  return (
    <>
      <section className="productCard">
        <img className="productImage" src={sep.image}></img>
        <h2 className="productTitle">{sep.name}</h2>
         <Link to={'/receipe'} className="productBtn">
          <i className="fa-solid fa-utensils"></i>Order Now
        </Link>
      </section>
    </>
  );
}


