import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import TopHeader from "./TopHeader";
import DashMain from "./DashMain";
import UserMain from "./UserMain";
import AmountRate from "./AmountRateMain";
import { useNavigate } from "react-router-dom";

const PanelSection = () => {
  const path = window.location.pathname;
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!sessionStorage.getItem("email")) {
      //navigate to login
      navigate("/");
    }
  }, []);
  return (
    <div className="flex gap-2">
     
        <div className={`${open?"w-[300px]":"w-[100px]"}`}>
          <Sidebar open={open} />
        </div>
     
      <div className={`${open ? "w-[80%]" : "w-full"}`}>
        <TopHeader open={open} setOpen={setOpen} />
        <div className="mt-2">
          {path === "/" && <DashMain />}
          {path === "/user" && <UserMain />}
          {path === "/amount" && <AmountRate />}
          {/* {path === "/" ? (
            <DashMain />
          ) : path === "/user" ? (
            <UserMain />
          ) : (
            <AmountRate />
          )} */}
        </div>
      </div>
    </div>
  );
};

export default PanelSection;
