import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navabar from "../Navabar/Navabar";
import LeftSide from "./../../LeftSide/LeftSide";
import Rightside from "../rightside/Rightside";

export default function Home() {
  return (
    <>
      <div className="row  m-0 ">
        <div className=" col-lg-1 side ">
          <Sidebar />
        </div>
        <div className="col-lg-11  p-0 ">
          <div className="content pt-2 ">
            <div className=" px-4">
              <Navabar />
            </div>
            <div className="row  w-100 m-auto">
              <div className="col-lg-7">
                <LeftSide />
              </div>
              <div className="col-lg-5">
                <Rightside />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
