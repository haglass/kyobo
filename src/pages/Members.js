import React from "react";
import { useNavigate } from "react-router";

const Members = (props) => {
  const navigate = useNavigate();
  const goHome = () => {
    if (window.confirm("홈으로 이동하시겠습니까?")) {
      navigate("/", { state: { from: "/member" } });
    }
  };

  // 이미지 사이즈
  const imgSize = { with: 90, height: 80 };
  const list = props.members.map((item, index) => {
    return (
      <div className="col-6 col-md-4 col-lg-3" key={index}>
        <img
          src={item.photo}
          className="img-thumbnail"
          alt={item.name}
          style={imgSize}
        />
        <br />
        <h6>{item.name}</h6>
        <br />
        <br />
      </div>
    );
  });

  return (
    <div className="card card-body">
      <h2>Members</h2>
      <div className="container">
        <div className="row">{list}</div>
        <button className="btn btn-promary" onClick={goHome}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Members;
