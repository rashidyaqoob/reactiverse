import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import About from "./pages/About";
import ContactUs from "./pages/Contact-us";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
