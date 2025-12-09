import React from "react";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar.jsx";
import Result from "./page/result.jsx";
import Buycredit from "./page/buycredit.jsx";
import Home from "./page/home.jsx";
import Footer from "./component/footer.jsx";
import Login from "./component/login.jsx";
import { AppContext } from "./context/appcontext.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  const {showLogin} = useContext(AppContext)
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-pink-50">
      <ToastContainer />
      <Navbar />
      {showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<Buycredit />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
