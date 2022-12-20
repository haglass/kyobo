import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const Show = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [biTitle, setBiTitle] = useState("");
  const [bdiSubTitle, setBdiSubTitle] = useState("");
  const [bdiImage, setBdiImage] = useState("");
  const [bimgUri, setBimgUri] = useState("");
  const [bwName, setBwName] = useState("");
  const [bpName, setBpName] = useState("");
  const [bdiRegDt, setBdiRegDt] = useState("");
  const [bdiShow, setBdiShow] = useState("");
  useEffect(() => {
    const id = params.id ? parseInt(params.id, 10) : 0;
    const book = props.books.find((item) => item.biSeq === id);
    if (book) {
      console.log(book);
      setBimgUri(book.bimgUri ? book.bimgUri : "No Image");
      setBiTitle(book.biTitle ? book.biTitle : "No Title");
      setBdiSubTitle(book.biSubTitle ? book.biSubTitle : "No Title");
      setBdiImage(book.biImage ? book.biImage : "No Image");
      setBwName(book.bwName ? book.bwName : "No Writer");
      setBpName(book.bpName ? book.bpName : "No Publisher");
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
            <span className="float-end badge rounded-pill bg-success">X</span>
          </Link>
          <span className="title">{biTitle}</span>
          <br />
        </div>
        <div className="show">
          <div>
            <p className="title">{bdiSubTitle}</p>
            <img
              className="show-img"
              src={`http://192.168.0.154:9999/image/${bimgUri}`}
              alt="book_img"
            />
            <div className="show-name">
              {bwName}
              <br />
              {bpName}/{bdiRegDt}
            </div>

            <p className="book-info">{bdiShow}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
