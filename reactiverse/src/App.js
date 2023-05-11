import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/header.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/Contact-us.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignUp from "./pages/SignUp/Sign-up.jsx";
import Home from "./pages/Home/Home.jsx";
import Hooks, { HookRoutes } from "./pages/Hooks/Hooks.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route />
        </Routes>
        <HookRoutes/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
