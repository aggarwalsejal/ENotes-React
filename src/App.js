import Navbar from "./components/Navbar";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
import NoteState from "./context/notes/NoteState";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />

          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/about" element={<About />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/login" element={<Login />}></Route>
            </Routes>
            <Routes>
              <Route exact path="/signup" element={<Signup />}></Route>
            </Routes>
          </div>
        </Router>
      </NoteState>
      <ToastContainer />
    </>
  );
}

export default App;
