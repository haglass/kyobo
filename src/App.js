import React, { useEffect, useState } from "react";

// axios API
import instance from "./api/axios";
import requests from "./api/request";
import Home from "./pages/Home";
import Header from "./components/Header";
import Members from "./pages/Members";
import BookList from "./pages/BookList";
import Player from "./pages/Player";
import PlayerIndex from "./pages/PlayerIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // 멤버 목록 데이터
  // useState는 useState가 변경되면 실행되는 Hook이다
  // useState()를 실행한면 []리던된다
  // 배열은 [state, state업데이트함수]돌려받는다
  // 배열은 [getter, setter ]돌려받는다
  // useState(초기값): 초기값이라 함은 state의 초기값
  const [members, setMembers] = useState([]);
  const [bmembers, setBmembers] = useState([]);
  // 플레이 리스트 ATSTE
  // state props가 바꿔야 함
  const [books, setBooks] = useState([]);
  // 외부데이터가지고 오기
  const fetchData = async () => {
    // 멤버목록 가져오기
    const resultMember = await instance.get(requests.fetchMember);
    setMembers(resultMember.data);
    //백엔드 멤버목록
    const resultBmember = await instance.get(requests.fetchBmember);
    setBmembers(resultBmember.data);
    console.log(resultBmember);
    // 책목록 가져오기
    const resultBook = await instance.get(requests.fetchBook);
    setBooks(resultBook.data);
    // setSongs();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/members"
            element={<Members members={members} bmembers={bmembers} />}
          />
          <Route path="/books" element={<BookList books={books} />}>
            <Route index element={<PlayerIndex />} />
            <Route path=":id" element={<Player books={books} />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
