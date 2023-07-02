import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ProfSems from "./pages/professor/semesters";
import ProfCourses from "./pages/professor/courses";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/prof-sems" element={<ProfSems />} />
        <Route path="/prof-courses" element={<ProfCourses />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
