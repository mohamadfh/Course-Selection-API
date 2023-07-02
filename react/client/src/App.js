import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/loginpage" element={<LoginPage />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
