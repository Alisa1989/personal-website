import {Routes, Route, BrowserRouter as Router} from "react-router-dom";

import './App.css';

import Home from "./components/Home";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <Router>

    <div className="App">
      {/* <Routes> */}
        <Home/>
        <AboutMe/>
        <p>Projects</p>
        <p>Resume</p>
      {/* </Routes> */}
    </div>
    </Router>
  );
}

export default App;
