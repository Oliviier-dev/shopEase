import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import NotFoundPage from "./components/NotFound";
import SingleProduct from "./components/SingleProduct";

function App() {
  const location = useLocation();
  const showNavbar =
    location.pathname !== "/login" && location.pathname !== "/signup";
  const showFooter =
    location.pathname !== "/login" && location.pathname !== "/signup";

  return (
    <div className="App font-lato">
      <ToastContainer />
      {showNavbar && (
        <div className="bg-[#2f6889] bg-cover bg-center bg-no-repeat relative z-30">
          <Navbar />
        </div>
      )}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
