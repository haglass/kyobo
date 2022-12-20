import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const BookDetail = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [bdiTitle, setBdiTitle] = useState("");
  const [bdiWriter, setBdiWriter] = useState("");
  const [bdiImage, setBdiImage] = useState("");

  useEffect(() => {
    const result = props.books.find((item) => {
      return item.id === parseInt(id ? id : "", 10);
    });
    if (result) {
      setBdiTitle(result.bdiTitle ? result.bdiTitle : "No Title");
      setBdiWriter(result.bdiWriter ? result.bdiWriter : "No Writer");
      setBdiImage(result.bdiImage ? result.bdiImage : "No Image");
    } else {
      navigate("/books");
    }
  }, []);

  return (
    <div className="mt-5">
      <h2>{bdiTitle}</h2>
      <p>Original Writer : {bdiWriter} </p>
      <p>
        <img src={bdiImage} alt="book_img"></img>
      </p>

      <Link to="/books">Return Books List</Link>
    </div>
  );
};

export default BookDetail;
