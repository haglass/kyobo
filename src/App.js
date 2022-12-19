import React, { useEffect, useState } from "react";

// axios API
import instance from "./api/axios";
import requests from "./api/request";

import Home from "./pages/Home";
import Header from "./components/Header";
import Members from "./pages/Members";
import BookList from "./pages/BookList";
import Show from "./pages/Show";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const [members, setMembers] = useState([]);
  const [books, setBooks] = useState([]);
  const fetchData = async () => {
    const resultMember = await instance.get(requests.fetchMember);
    setMembers(resultMember.data);
    const resultBook = await instance.get(requests.fetchBook);
    setBooks(resultBook.data[0].list);
    setBooks(resultBook.data[1].list);
    setBooks(resultBook.data[2].list);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>

          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />

          <Route path="/members" element={<Members members={members} />} />
          <Route path="/books" element={<BookList books={books} />}>
            <Route path=":id" element={<Show books={books} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
