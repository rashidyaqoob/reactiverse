import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./pages/About";
import ContactUs from "./pages/Contact-us";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route path="/about" element={<About />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
