import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import "./Hooks.scss";
import UseState from "./UseState/UseState";

const Hooks = () => {


  return (
    <>
      <div className="hooks">
        <h1>Table of content</h1>
        <ul>
          <li>
            <Link to="/use-state">UseState</Link>
          </li>
          <li>
            <Link to="/use-effect">UseEffect</Link>
          </li>
          <li>
            <Link to="/use-ref">UseRef</Link>
          </li>
          <li>
            <Link to="/use-callback">UseCallback</Link>
          </li>
          <li>
            <Link to="/use-context">UseContext</Link>
          </li>
          <li>
            <Link to="/use-demo">UseMemo</Link>
          </li>
          <li>
            <Link to="/use-reducer">UseReducer</Link>
          </li>
        </ul>
        <Link to="">
          <p>Some Hook rules </p>
        </Link>
      </div>
    </>
  );
};

export default Hooks;

export const HookRoutes = () => {
    <Routes>
      <Route path="/use-state" element={<UseState />} />
      {/* <Route path="/use-effect" element={<UseEffect />} />
        <Route path="/use-ref" element={<UseRef />} />
        <Route path="/use-callback" element={<UseCallback />} />
        <Route path="/use-context" element={<UseContext />} /> */}
      <Route />
    </Routes>;
  };
