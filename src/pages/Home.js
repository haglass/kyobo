import React from "react";
import { useLocation } from "react-router";

const Home = () => {
  const location = useLocation();

  return (
    <div className="card card-body">
      <h2>교보문고 미니 프로젝트</h2>
      <p>Front-end: 하경미,이혜영,이효정</p>
      <p>Back-end: 우현주,유지은,차경준,김성민,차대군</p>
    </div>
  );
};

export default Home;
