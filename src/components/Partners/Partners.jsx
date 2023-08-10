import React from "react";
import "./partners.css";
export default function Partners({ img, perm, title }) {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <img src={img} alt="" />
        <p className="title m-0">{title}</p>
        <p className="permision m-0">{perm}</p>
      </div>
    </>
  );
}
