import React from "react";
import { CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";

const Sidebar = ({ open }) => {
  return (
    <div className="flex flex-col w-full h-screen max-w-md gap-6 p-5 bg-blue-100 border-r ">
      <div className="">
        <Link to="/">
          {open ? (
            <div className="flex"> <CiUser />      Dashboard    </div>   ) : (    <CiUser />
          )}
        </Link>{" "}
      </div>

      <div className="">
        <Link to="/user">Users</Link>{" "}
      </div>
      <div className="">
        <Link to="/amount">Amount</Link>{" "}
      </div>
    </div>
  );
};

export default Sidebar;
