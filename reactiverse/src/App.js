import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header.jsx";
import About from "./pages/About.jsx";
import ContactUs from "./pages/Contact-us.jsx";
import Footer from "./components/Footer/Footer.jsx";
import HandleSignInBtn from "./components/Signup/Signup.jsx";
import SignUp from "./pages/SignUp/Sign-up.jsx";

function App() {
  console.log("hello");
  return (
    <div className="App">
      <BrowserRouter>
        <HandleSignInBtn />
        <Header />
        <Routes>
          <Route path="/" />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
