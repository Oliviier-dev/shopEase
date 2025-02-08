import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  const showNavbar =
    location.pathname !== "/login" && location.pathname !== "/signup";
  const showFooter =
    location.pathname !== "/login" && location.pathname !== "/signup";

  return (
    <div className="App">
      <ToastContainer />
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
