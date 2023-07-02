import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ProfSems from "./pages/professor/semesters";
import ProfCourses from "./pages/professor/courses";
import ProfCourseStudents from "./pages/professor/students.js";
import StuHome from "./pages/student/Home";
import StuSems from "./pages/student/Semesters";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/prof-sems" element={<ProfSems />} />
        <Route path="/prof-sem-courses" element={<ProfCourses />} />
        <Route path="/prof-course-students" element={<ProfCourseStudents />} />
        <Route path="/stu-home" element={<StuHome />} />
        <Route path="/stu-sems" element={<StuSems />} />

        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
