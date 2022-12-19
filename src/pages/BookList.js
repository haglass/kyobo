import React from "react";
import { Link, Outlet, useMatch } from "react-router-dom";

const BookList = (props) => {
  const pathMatch = useMatch("/books/:id");
  let pathMatchId = -1;
  if (pathMatch) {
    pathMatchId = pathMatch.params.id ? parseInt(pathMatch.params.id, 10) : -1;
  }

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
          {item.bdiTitle}({item.biDisPrice})
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

export default BookList;
