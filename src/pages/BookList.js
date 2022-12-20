import React, { useEffect, useState } from "react";
import {
  Link,
  Outlet,
  useMatch,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const BookList = (props) => {
  const pathMatch = useMatch("/books/:id");
  let pathMatchId = -1;
  if (pathMatch) {
    pathMatchId = pathMatch.params.id ? parseInt(pathMatch.params.id, 10) : -1;
  }

  const list = props.books.map((item) => {
    console.log(item);

    return (
      <li
        key={item.id}
        className={
          item.id === pathMatchId
            ? "list-group-item list-group-item-secondary"
            : "list-group-item"
        }
      >
        <Link to={`/books/${item.id}`} style={{ textDecoration: "none" }}>
          <div className="list-inner">
            <img src={item.bdiImage} alt="book-img" />
            <div className="list-txt">
              <p>{item.bdiTitle}</p>
              <p>
                <span className="discount">{item.biDiscount * 100}%</span>
                <span className="disprice">{item.biDisPrice}원</span>
                <span className="price">{item.biPrice}원</span>
              </p>
            </div>
          </div>
        </Link>
      </li>
    );
  });
  let [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const navigate = useNavigate;
  useEffect(() => {
    const strPage = searchParams.get("page");
    setPage(parseInt(strPage !== null ? strPage : "1"));
  }, [searchParams]);
  const goPrev = () => {
    if (page > 1) {
      navigate(window.location.pathname + "?page=" + (page - 1));
    }
  };
  const goNext = () => {
    navigate(window.location.pathname + "?page=" + (page + 1));
  };
  return (
    <div className="card card-body">
      <h2>BookList</h2>
      <ul className="list-group text-center ">{list}</ul>
      <div>
        <div className="m-2">현재 페이지 : {page}</div>
        <button className="btn btn-success m-2" onClick={goPrev}>
          Prev
        </button>
        <button className="btn btn-success m-2" onClick={goNext}>
          Next
        </button>
      </div>
      <Outlet />
    </div>
  );
};

export default BookList;
