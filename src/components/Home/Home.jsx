import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Navabar from "../Navabar/Navabar";
import LeftSide from "./../../LeftSide/LeftSide";
import Rightside from "../rightside/Rightside";

export default function Home() {
  return (
    <>
      <div className="row   ">
        <div className="col-1 ">
          <Sidebar />
        </div>
        <div className="content pt-2">
          <Navabar />
          <div className="row">
            <div className="col-7">
              <LeftSide />
            </div>
            <div className="col-5">
              <Rightside />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
