import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";

const Show = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const [bdiTitle, setBdiTitle] = useState("");
  useEffect(() => {
    const id = params.id ? parseInt(params.id, 10) : 0;
    const book = props.books.find((item) => item.id === id);
    if (book) {
      setBdiTitle(book.bdiTitle ? book.bdiTitle : "No Title");
    } else {
      navigate("/books");
    }
  }, []);

  return (
    <div className="modal">
      <div className="box">
        <div className="heading">
          <Link to="/books" className="menu">
            <span className="float-start badge bg-secondary pointer">X</span>
          </Link>
          <span className="title">{bdiTitle}</span>
        </div>
        <div className="show">
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Show;
