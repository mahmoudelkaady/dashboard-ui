import React from "react";
import "./onOffRight.css";
export default function OnOffRight({ color, img, title }) {
  return (
    <>
      <div className={`text-white p-3  rounded-4 ${color} `}>
        <div className="d-flex row  mb-2">
          <div className="col-6">{img}</div>
          <div className="col-6 d-flex justify-content-end align-items-center">
            <span className="me-2">ON</span>
            <div
              className={`state w-50 h-50  p-1 bg-light rounded-pill d-flex justify-content-end `}
            >
              <div className={`w-50   ${color}  h-100 rounded-pill `}></div>
            </div>
          </div>
        </div>
        <p className="fw-bold m-0">{title}</p>
      </div>
    </>
  );
}
