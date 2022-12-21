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
    // console.log(item);
    return (
      <li
        key={item.biSeq}
        className={
          item.id === pathMatchId
            ? "list-group-item list-group-item-secondary"
            : "list-group-item"
        }
      >
        <Link to={`/books/${item.biSeq}`} style={{ textDecoration: "none" }}>
          <div className="list-inner">
            <img
              src={`http://192.168.0.154:9999/image/${item.bimgUri}`}
              alt="book-img"
            />
            <div className="list-txt">
              <p>{item.biTitle}</p>
              <p>
                <span className="discount">{item.disCount}%</span>
                <span className="disprice">{item.disCountPrice}원</span>
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
  const navigate = useNavigate();
  useEffect(() => {
    const strPage = searchParams.get("page");
    setPage(parseInt(strPage !== null ? strPage : "1"));
  }, [searchParams]);

  const goPrev = () => {
    props.pageChangePrev();
    if (page > 1) {
      navigate(window.location.pathname + "?page=" + (page - 1));
    }
  };
  const goNext = () => {
    props.pageChangeNext();
    if (page < 10) {
      navigate(window.location.pathname + "?page=" + (page + 1));
    }
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
