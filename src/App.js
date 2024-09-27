import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './mobile.css'
import Login from "./page/Login";
import Home from "./page/Home";
import Discover from "./page/Discover";
import PlayStation from "./page/PlayStation";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/discover" element={<Discover/>} />
        <Route path="/playstation" element={<PlayStation/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
