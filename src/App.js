import "./App.css";
import Nav from "./components/Nav";
import Users from "./components/Users";
import Articles from "./components/Articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./components/Article";
import { useState } from "react";
import { UserContext } from "./contexts/UserContext";
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState({});

  return (
    <>
      <BrowserRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <div className="App">
            <Header />
            <Nav />
            <Routes>
              <Route path="/" element={<Articles />} />
              <Route path="/:topic" element={<Articles />} />
              <Route path="/articles/:article_id" element={<Article />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </UserContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
