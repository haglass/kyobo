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
  const [members, setMembers] = useState([
    {
      name: "하경미",
      photo: "photos/cute.jpg",
      mail: "haglass75@gmail.com",
    },
    {
      name: "이혜영",
      photo: "photos/catsmile.png",
      mail: "cocotree221@gmail.com",
    },
    {
      name: "이효정",
      photo: "photos/cryingcat.jpg",
      mail: "dhfldhs0707@gmail.com",
    },
  ]);
  const [bmembers, setBmembers] = useState([
    {
      name: "우현주",
      photo: "photos/tablecat.jpg",
      mail: "woohyeonju507@gmail.com",
    },
    {
      name: "차대군",
      photo: "photos/tablecat.jpg",
      mail: "credit102@naver.com",
    },
    {
      name: "유지은",
      photo: "photos/politecat.jpg",
      mail: "yuje0002@gmail.com",
    },
    {
      name: "차경준",
      photo: "photos/tablecat.jpg",
      mail: "rudwns0401@gmail.com",
    },
    {
      name: "김성민",
      photo: "photos/tablecat.jpg",
      mail: "wpfktmwkddls123@gmail.com",
    },
  ]);
  const [books, setBooks] = useState([]);
  const fetchData = async () => {
    // const resultMember = await instance.get(requests.fetchMember);
    // setMembers(resultMember.data);

    //백엔드 멤버목록
    // const resultBmember = await instance.get(requests.fetchBmember);
    // setBmembers(resultBmember.data);
    // console.log(resultBmember);
    // 책목록 가져오기

    const params = {
      page: 0,
    };
    const resultBook = await instance.get(requests.fetchBook, { params });
    setBooks(resultBook.data.list);
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
          <Route
            path="/members"
            element={<Members members={members} bmembers={bmembers} />}
          />
          <Route path="/books" element={<BookList books={books} />}>
            <Route path=":id" element={<Show books={books} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
