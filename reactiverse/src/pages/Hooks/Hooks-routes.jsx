import { Routes, Route } from "react-router-dom";
import UseState from "../Hooks/UseState/UseState.jsx";
export const HookRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/hooks/use-state" element={<UseState />} />;
      </Routes>
    </>
  );
};

export default HookRoutes;
