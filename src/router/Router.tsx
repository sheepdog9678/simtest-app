import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import TestPage from "../pages/TestPage";
import ResultPage from "../pages/ResultPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<TestPage />} />
        <Route path="/result/:mbti" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
