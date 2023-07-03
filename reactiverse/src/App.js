import React from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/header.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/Contact-us.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SignUp from "./pages/SignUp/Sign-up.jsx";
import Home from "./pages/Home/Home.jsx";
import Hooks from "./pages/Hooks/Hooks.jsx";
import HookRoutes from "./pages/Hooks/Hooks-routes.jsx";
import { useState, useEffect, useContext } from "react";
import Login from "./pages/Login/Login.jsx";
import { AuthProvider } from "./pages/Login/Logincontext.jsx";
import { AuthContext } from "./pages/Login/Logincontext.jsx";

import { CheckAuthExpiry } from "./utils/check-auth/CheckAuth.jsx";
import { BASE_URL } from "./utils/base-url/BASE_URL.jsx";
import ScrollComponent from "./components/Scroll-comp/Scroll-comp.jsx";

function App() {
  const [data, setData] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/sign-up`)
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  console.log(data);

  function createUser() {
    axios
      .post(`${BASE_URL}/sign-up`, {
        username: "tehrd v eem",
        password: "12ddvsv34",
        email: "tehreemfazili522@gmail.com",
      })
      .then((response) => {
        console.log(response);
        setUser(response.user);
      });
  }

  console.log(user);
  return (
    <AuthProvider>
      <div className="App">
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
          <ScrollComponent />
          <HookRoutes />
          <div>
            {/* {data.map((item) => {
              return (
                <>
                  <p>{item.title}</p>
                  <p>{item.id}</p>
                </>
              );
            })} */}
            <button onClick={createUser}>Create Post</button>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
