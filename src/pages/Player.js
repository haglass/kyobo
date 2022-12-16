import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import YouTube from "react-youtube";

const Player = (props) => {
  // URI 파라메터 처리
  const params = useParams();
  // 강제화면전환
  const navigate = useNavigate();
  // state 데이터
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  // 데이터가 존재하는지 useEffect()
  useEffect(() => {
    // params 객체의 속성은 문자열이므로
    const id = params.id ? parseInt(params.id, 10) : 0;
    // 아이디에 해당하는 객체를 찾음.
    const book = props.books.find((item) => item.id === id);
    if (book) {
      setTitle(book.title ? book.title : "No Title");
      setLink(book.youtube_link ? book.youtube_link : "");
    } else {
      // 강제이동
      navigate("/books");
    }
  });

  return (
    <div className="modal">
      <div className="box">
        <div className="heading">
            <Link to="/books" className="menu">
            <span className="float-start badge bg-secondary pointer">X</span>
            </Link>
          <span className="title">{title}</span>
        </div>
        <div className="player">
          <div>
            <YouTube
              videoId={link}
              opts={{
                width: "320",
                height: "240",
                playerVars: { autoplay: 1 },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
