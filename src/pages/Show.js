import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const Show = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [bdiTitle, setBdiTitle] = useState("");
  const [bdiSubTitle, setBdiSubTitle] = useState("");
  const [bdiImage, setBdiImage] = useState("");
  const [bdiWriter, setBdiWriter] = useState("");
  const [bdiPublisher, setBdiPublisher] = useState("");
  const [bdiRegDt, setBdiRegDt] = useState("");
  const [bdiShow, setBdiShow] = useState("");
  useEffect(() => {
    const id = params.id ? parseInt(params.id, 10) : 0;
    const book = props.books.find((item) => item.id === id);
    if (book) {
      setBdiTitle(book.bdiTitle ? book.bdiTitle : "No Title");
      setBdiSubTitle(book.bdiSubTitle ? book.bdiSubTitle : "No Title");
      setBdiImage(book.bdiImage ? book.bdiImage : "No Image");
      setBdiWriter(book.bdiWriter ? book.bdiWriter : "No Writer");
      setBdiPublisher(book.bdiPublisher ? book.bdiPublisher : "No Publisher");
      setBdiRegDt(book.bdiRegDt ? book.bdiRegDt : "No Date");
      setBdiShow(book.bdiShow ? book.bdiShow : "No Infomation");
    } else {
      navigate("/books");
    }
  }, []);

  return (
    <div className="modal">
      <div className="box">
        <div className="heading">
          <Link to="/books" className="menu">
            <span className="float-end badge bg-secondary pointer">X</span>
          </Link>
          <span className="title">{bdiTitle}</span>
          <br />
        </div>
        <div className="show">
          <div>
            <p className="title">{bdiSubTitle}</p>
            <img src="http://localhost:3000/photos/Image1.jpg" alt="book_img" />
            <p>{bdiWriter}</p>
            <p>{bdiPublisher}</p>
            <p>{bdiRegDt}</p>
            <p className="book-info">{bdiShow}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
