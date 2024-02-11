import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <React.Fragment>
      <div className="w-full bg-black">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </React.Fragment>
  );
};

export default App;
