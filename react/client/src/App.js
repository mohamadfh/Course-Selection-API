import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ProfSems from "./pages/professor/semesters";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/prof-sems" element={<ProfSems />} />

        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
