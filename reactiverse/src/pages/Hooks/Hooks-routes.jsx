import { Routes, Route } from "react-router-dom";
import UseState from "../Hooks/UseState/UseState.jsx";
import UseEffect from "../Hooks/UseEffect/UseEffect.jsx";
export const HookRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/hooks/use-state" element={<UseState />} />;
        <Route path="/hooks/use-effect" element={<UseEffect />} />;
      </Routes>
    </>
  );
};

export default HookRoutes;
