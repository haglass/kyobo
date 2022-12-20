import React from "react";
import { useLocation } from "react-router";

const Home = () => {
  const location = useLocation();
  const state = location.state;
  const from = state ? state.from : "";
  return (
    <div className="card card-body">
      <div className="body-txt">
        <h1 className="h1">교보문고 </h1>
        <h3 className="h2">미니 프로젝트</h3>
        <p className="p">
          <span>Front-end:</span> 하경미,이혜영,이효정
        </p>
        <p className="p-b">
          <span>Back-end:</span> 우현주,유지은,차경준,김성민,차대군
        </p>
        {from !== "" ? <h4>state.from {from} </h4> : ""}
      </div>
      <div className="card card-f"></div>
    </div>
    
  );
};

export default Home;
