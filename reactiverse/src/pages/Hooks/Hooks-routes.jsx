import { Routes, Route } from "react-router-dom";
import UseState from "../Hooks/UseState/UseState.jsx";
import UseEffect from "../Hooks/UseEffect/UseEffect.jsx";
import Useref from "./Useref/Useref.jsx";
import Usememo from "./Usememo/Usememo.jsx";
export const HookRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/hooks/use-state" element={<UseState />} />;
        <Route path="/hooks/use-effect" element={<UseEffect />} />;
        <Route path="/hooks/use-ref" element={<Useref />} />;
        <Route path="/hooks/use-memo" element={<Usememo />} />;
      </Routes>
    </>
  );
};

export default HookRoutes;
