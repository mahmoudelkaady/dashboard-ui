import React from "react";

export default function OnOff({ status, title, img, iff, color }) {
  return (
    <>
      <div className="d-flex flex-column text-primary p-2 white rounded-4">
        <div className="d-flex container-lg justify-content-between">
          <span className={`fw-bold fs-4 text-${color}`}>{status}</span>
          <div
            className={`state w-50  p-1 bg-${color} rounded-pill d-flex justify-content-${iff} `}
          >
            <div className="w-50 bg-light  h-100 rounded-pill "></div>
          </div>
        </div>
        <div className="my-2">{img}</div>
        <p className="fw-bold">{title}</p>
      </div>
    </>
  );
}
