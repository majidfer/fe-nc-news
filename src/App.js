import "./App.css";
import Nav from "./components/Nav";
import Users from "./components/Users";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <h1>This is Northcoders News!</h1>
        </header>
        <Nav />
        <Routes>
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
