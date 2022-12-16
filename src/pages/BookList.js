import React from "react";
import { Link, Outlet, useMatch } from "react-router-dom";

const SongList = (props) => {
  // 경로의 패턴을 비교한다.
  const pathMatch = useMatch("/books/:id");
  let pathMatchId = -1;
  if (pathMatch) {
    pathMatchId = pathMatch.params.id ? parseInt(pathMatch.params.id, 10) : -1;
  }
  // pathMatch.params   : 파라메터  {id: '7'}
  // pathMatch.pathname : 요청경로 "/songs/7"
  // pathMatch.pathnameBase : 주소창 "/songs/7"
  // pathMatch.pattern     : 패턴을 출력 {}
  // console.log(pathMatch);

  const list = props.books.map((item) => {
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
          {item.title} ({item.musician})
          <span className="float-end badge bg-secondary">
            <i className="fa fa-play"></i>
          </span>
        </Link>
      </li>
    );
  });
  return (
    <div className="card card-body">
      <h2>BookList</h2>
      <ul className="list-group">{list}</ul>
      <Outlet />
    </div>
  );
};

export default SongList;