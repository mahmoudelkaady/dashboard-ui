import React from "react";
import home from "../../imgs/sidebarr/noun_Home_1998078.svg";
import icon from "../../imgs/sidebarr/Group 30 Copy 6.svg";
import icon1 from "../../imgs/sidebarr/Group 30 Copy 7.svg";
import icon2 from "../../imgs/sidebarr/Group 30 Copy 8.svg";
import icon3 from "../../imgs/sidebarr/Group 30 Copy 9.svg";
import icon4 from "../../imgs/sidebarr/Group 30 Copy 10.svg";
import icon5 from "../../imgs/sidebarr/Group 72.svg";
import icon6 from "../../imgs/sidebarr/Group 30 Copy 5.svg";
export default function Sidebar() {
  return (
    <>
      <div className="d-flex  flex-column py-1 sideBar rounded-4  h-100">
        <div className="icons d-flex flex-column pt-2 h-75 m-auto mt-0   ">
          <img className=" m-auto" src={home} alt="" />
          <div className="mt-5   w-75 sellected rounded-start-5">
            <img className=" m-auto" src={icon5} alt="" />
          </div>
          <img className=" m-auto" src={icon} alt="" />
          <img className=" m-auto" src={icon1} alt="" />
          <img className=" m-auto" src={icon2} alt="" />
          <img className=" m-auto" src={icon3} alt="" />
          <img className=" m-auto" src={icon4} alt="" />
        </div>
        <div className="icon mt-2"></div>
        <img className=" m-auto" src={icon6} alt="" />
      </div>
    </>
  );
}
