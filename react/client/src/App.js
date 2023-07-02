import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ProfSems from "./pages/professor/semesters";
import ProfCourses from "./pages/professor/courses";
import ProfCourseStudents from "./pages/professor/students.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/prof-sems" element={<ProfSems />} />
        <Route path="/prof-sem-courses" element={<ProfCourses />} />
        <Route path="/prof-course-students" element={<ProfCourseStudents />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
