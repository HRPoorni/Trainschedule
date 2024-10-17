import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigationBar/nav_bar";
import HomePage from "./pages/home_page";
import "./index.css";
import Schedules from "./components/trainReschedule/schedules";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedules" element={<Schedules />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
