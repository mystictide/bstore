import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
