import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/header.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/Contact-us.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignUp from "./pages/SignUp/Sign-up.jsx";
import Home from "./pages/Home/Home.jsx";
import Hooks from "./pages/Hooks/Hooks.jsx";
import HookRoutes from "./pages/Hooks/Hooks-routes.jsx";
import { useState, useEffect } from "react";
import Login from "./pages/Login/Login.jsx";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);
  return (
    <div className="App">
      <h1>{message}</h1>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/outfit" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <HookRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
