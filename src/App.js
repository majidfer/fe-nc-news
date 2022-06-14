import "./App.css";
import Nav from "./components/Nav";
import Users from "./components/Users";
import Articles from "./components/Articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>This is Northcoders News by Feri!</h1>
        </header>
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/:topic" element={<Articles />} />
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
