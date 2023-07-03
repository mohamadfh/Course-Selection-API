import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ProfSems from "./pages/professor/semesters";
import ProfCourses from "./pages/professor/courses";
import ProfCourseStudents from "./pages/professor/students.js";
import StuHome from "./pages/student/Home";
import StuSems from "./pages/student/Semesters";
import SemDetails from "./pages/student/SemDetails";
import PACourses from "./pages/student/preAssignmentCourses";
import PAssignments from "./pages/student/PreAssignments";
import AssignmentCourses from "./pages/student/AssignmentCourses";
import Assignments from "./pages/student/Assignments";

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
        <Route path="/stu-sem-details" element={<SemDetails />} />
        <Route path="/pre-assignment-courses" element={<PACourses />} />
        <Route path="/pre-assignments" element={<PAssignments />} />
        <Route path="/assignment-courses" element={<AssignmentCourses />} />
        <Route path="/assignments" element={<Assignments />} />
      </Routes>
    </Router>
  );
}

export default App;
