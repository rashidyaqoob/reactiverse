import { Link, Route, Routes } from "react-router-dom";
import "./Hooks.scss";

const Hooks = () => {
  return (
    <>
      <div className="hooks">
        <h1>Table of content</h1>
        <ul className="hooks-list">
          <li className="hooks-list__item">
            <Link to="/hooks/use-state" className="hooks-list__item-link">
              UseState
            </Link>
          </li>
          <li className="hooks-list__item">
            <Link to="/hooks/use-effect" className="hooks-list__item-link">
              UseEffect
            </Link>
          </li>
          <li className="hooks-list__item">
            <Link to="/hooks/use-ref" className="hooks-list__item-link">
              UseRef
            </Link>
          </li>
          <li className="hooks-list__item">
            <Link to="/hooks/use-callback" className="hooks-list__item-link">
              UseCallback
            </Link>
          </li>
          <li className="hooks-list__item">
            <Link to="/hooks/use-context" className="hooks-list__item-link">
              UseContext
            </Link>
          </li>
          <li>
            <Link to="/hooks/use-memo" className="hooks-list__item-link">
              UseMemo
            </Link>
          </li>
          <li className="hooks-list__item">
            <Link to="/hooks/use-reducer" className="hooks-list__item-link">
              UseReducer
            </Link>
          </li>
          <li className="hooks-list__item">
            <Link to="/hooks/use-custom" className="hooks-list__item-link">
              Usecustom
            </Link>
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
