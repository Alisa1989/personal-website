import {BrowserRouter as Router} from "react-router-dom";

import './App.css';

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portofolio";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar/>
        <Home/>
        <AboutMe/>
        <Portfolio/>
        <Resume/>
    </div>
    </Router>
  );
}

export default App;
