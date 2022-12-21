import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="card bg-light">
      <div className="card-heding">
        <img className="h-img" src="logo_img.png" alt="logo_img" />
        <div className="row">
          <div className="col-12">
            {/* <link to="전환랄 URI" */}
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "btn menu btn-primary"
                  : "btn menu btn-success";
              }}
              to="/home"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "btn menu btn-primary"
                  : "btn menu btn-success";
              }}
              to="/books"
            >
              Books
            </NavLink>
            <NavLink
              className={({ isActive }) => {
                return isActive
                  ? "btn menu btn-primary"
                  : "btn menu btn-success";
              }}
              to="/members"
            >
              Members
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
