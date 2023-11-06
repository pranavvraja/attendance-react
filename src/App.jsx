import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Timetable from "./pages/timetable";
import Attendance from "./pages/attendance";
import Subjects from "./pages/subjects";
import Settings from "./pages/settings";
import NavMenu from "./components/navmenu";

function App() {
  return (
    <>
      <div>
        <div className="display: flex">
          <NavMenu />
          <h1 className="text-4xl font-mono m-4 text-center ">
            Attendance Tracker
          </h1>
        </div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
