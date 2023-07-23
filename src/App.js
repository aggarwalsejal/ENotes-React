import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router,
Routes,
Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import NoteState from './context/notes/NoteState';
import { Alert } from './components/Alert';


function App() {
  return (
    <>
    <NoteState>
    <Router>
      <Navbar /> 
      <Alert />
      <div className='container'>
      <Routes>
        <Route exact
              path="/"
              element={
                <Home /> }></Route>
      </Routes>
      <Routes>
        <Route exact path="/about" element={<About /> }></Route>
      </Routes>
      <Routes>
        <Route exact path="/login" element={<Login /> }></Route>
      </Routes>
      </div>
    </Router>
    </NoteState>
    </>
  );
}

export default App;