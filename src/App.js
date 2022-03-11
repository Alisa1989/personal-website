import {Routes, Route, BrowserRouter as Router} from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>

    <div className="App">
      <Routes>
        <p>Home</p>
        <p>About Me</p>
        <p>Projects</p>
        <p>Resume</p>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
