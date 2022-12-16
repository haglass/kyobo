import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="card bg-light">
      <div className="card-heding">
        <img className="h-img" src="img_logo_kyobo@2x.png"/>
        <div className="row">
          <div className="col-12">
            {/* <link to="전환랄 URI" */}
            <Link className="btn btn-success menu" to="/">
              Home
            </Link>
            <Link className="btn btn-success menu" to="/members">
              Members
            </Link>
            <Link className="btn btn-success menu" to="/books">
              Books
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
