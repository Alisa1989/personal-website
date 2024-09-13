import { Routes, Route, BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import { LandingPage } from "./pages/landing";
import { Notes } from "./pages/notes";
import { Odin } from "./pages/odin";

function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/odin" element={<Odin />} />
      </Routes>
    </Router>
  );
}

export default App;
