import { Route, HashRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/layout/footer";
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
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={3500}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover={false}
          theme="light"
        />
      </div>
    </Router>
  );
}
