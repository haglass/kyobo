import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const BookDetail = (props) => {
  // useprams()
  // URI에서 전송된 파라메터를 객체로 읷는다.
  // 리던된 결과 비구조화 한다.
  // value 는 문자열로 온다

  const { id } = useParams();
  //usenavigate강제로 화면이동
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [musician, setMusician] = useState("");
  const [link, setLink] = useState("");
  const YOUTUBE_LINK = "https://m.youtube.com/watch?v=";

  //  혹시 아이디를 이상한 값으로 전달했다면
  useEffect(() => {
    // props.songs 배열레서 useParams 의 id를 비교

    const result = props.books.find((item) => {
      // 목록의 아이디는 숫자이다.'
      // useParams()결과의 아이디는 문자열리다.
      return item.id === parseInt(id ? id : "", 10);
    });
    if (result) {
      console.log(result);
      setTitle(result.title ? result.title : "No Title");
      setMusician(result.musician ? result.musician : "No Musician");
      setLink(result.youtube_link ? YOUTUBE_LINK + result.youtube_link : "");
    } else {
      navigate("/books");
    }
  }, []);

  return (
    <div className="mt-5">
      <h2>{title}</h2>
      <p>Original Musician : {musician} </p>
      <p>
        <a href={link} target="_blank">
          View Youtube
        </a>
      </p>
      <Link to="/books">Return Song List</Link>
    </div>
  );
};

export default BookDetail;
