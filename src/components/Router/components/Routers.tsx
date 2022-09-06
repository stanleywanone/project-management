import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "../../Auth/components/Auth";
import { Projects } from "../../Projects/components/Projects";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Navigate to="/auth/signin" />} />
        <Route path="/auth/signin" element={<Auth />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
