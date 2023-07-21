import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router,
Routes,
Route } from 'react-router-dom';

import About from './components/About';
import Home from './components/Home';


function App() {
  return (
    <>
    <Router>
      <Navbar /> 
      
      <Routes>
        <Route exact
              path="/"
              element={
                <Home /> }></Route>
      </Routes>
      <Routes>
        <Route exact path="/about" element={<About /> }></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;