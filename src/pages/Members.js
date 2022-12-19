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
  const imgSize = { with: 200, height: 200 };
  const list = props.members.map((item, index) => {
    return (
      // 반복문에서는  key 속성이 있어야하며, unique 값
      <div className="col-md-4" key={index}>
        <img
          src={item.photo}
          className="img-thumbnail"
          alt={item.name}
          style={imgSize}
        />
        <br />
        <h6>{item.name}</h6>
        <p>{item.mail} </p>
        <br />
        <br />
      </div>
    );
  });
  const Blist = props.bmembers.map((item, index) => {
    return (
      <div className="col-md-4" key={index}>
        {" "}
        <img
          src={item.photo}
          className="img-thumbnail"
          alt={item.name}
          style={imgSize}
        />
        <br />
        <h6>{item.name}</h6>
        <p>{item.mail} </p>
        <br />
        <br />{" "}
      </div>
    );
  });

  return (
    <div className="card card-body">
      <h2>Members</h2>
      <div className="container">
        <h3>Front</h3>
        <div className="row">{list}</div>
        <h3>Backend</h3>
        <div className="row">{Blist}</div>
        <button className="btn btn-primary" onClick={goHome}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default Members;
