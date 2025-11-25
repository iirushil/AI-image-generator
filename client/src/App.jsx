import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar.jsx";
import Result from "./page/result.jsx";
import Buycredit from "./page/buycredit.jsx";
import Home from "./page/home.jsx";
import Footer from "./component/footer.jsx";

const App = () => {
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-pink-50">
      
        <Navbar />
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
