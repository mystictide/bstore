import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Header from "./components/layout/header";
import BookDetails from "./pages/bookDetails";
import Home from "./pages/home";

export default function App() {
  return (
    <Router>
      <div className="main-container">
        <Header />
        <Routes basename="/bstore">
          <Route path="/:k?" element={<Home />} />
          <Route path="/details/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
