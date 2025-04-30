import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TestPage from "../pages/TestPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
