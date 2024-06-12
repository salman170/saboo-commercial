import React from "react";
import { MdOutlineMenu } from "react-icons/md";

const TopHeader = ({ open, setOpen }) => {
  return (
    <div className="flex items-center justify-between h-16 p-5 mt-1 rounded-lg bg-blue-50">
      <div className="flex items-center gap-2">
        <div onClick={()=>setOpen(!open)}>
          <MdOutlineMenu className="text-xl" />
        </div>
        <div>Home</div>
      </div>
      <div>Logout</div>
    </div>
  );
};

export default TopHeader;
