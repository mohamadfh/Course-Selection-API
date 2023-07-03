import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../../styles/professor/semesters.css";

const SemEdit = () => {
  const [semesterName, setSemesterName] = useState("");
  const [selectedProfessor, setSelectedProfessor] = useState("");
  const [selectedStudent, setSelectedStudent] = useState("");

  // Sample data
  const professors = [
    { id: 1, name: "Professor 1" },
    { id: 2, name: "Professor 2" },
    { id: 3, name: "Professor 3" },
  ];

  const students = [
    { id: 1, name: "Student 1" },
    { id: 2, name: "Student 2" },
    { id: 3, name: "Student 3" },
  ];

  const handleSemesterNameChange = (e) => {
    setSemesterName(e.target.value);
  };

  const handleProfessorChange = (e) => {
    setSelectedProfessor(e.target.value);
  };

  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
  };

  const handleSave = () => {
    // Implement your save logic here
    console.log("Semester Name:", semesterName);
    console.log("Selected Professor:", selectedProfessor);
    console.log("Selected Student:", selectedStudent);
  };

  return (
    <div className="page-container">
      <div className="top-bar">
        <h1>مشاهده لیست ترم ها</h1>
      </div>
      <div className="content-container">
        <div className="side-bar">
          <ul>
            <li>
              <Link to="/edu-sems">مشاهده لیست ترم ها</Link>
            </li>
          </ul>
        </div>
        <div className="students-container">
          <h2>ترم ها</h2>
          <hr />
          <div className="edu-sem-edit-main">
            <div>
              <label htmlFor="semester-name">نام ترم:</label>
              <input
                type="text"
                id="semester-name"
                value={semesterName}
                onChange={handleSemesterNameChange}
              />
            </div>
            <div>
              <label htmlFor="professor">انتخاب استاد:</label>
              <select
                id="professor"
                value={selectedProfessor}
                onChange={handleProfessorChange}
              >
                <option value="">انتخاب کنید</option>
                {professors.map((professor) => (
                  <option key={professor.id} value={professor.name}>
                    {professor.name}
                  </option>
                ))}
              </select>
              <button className="edu-butt">add</button>
              <button className="edu-butt">upload excel</button>
            </div>
            <div className="height"></div>
            <div>
              <label htmlFor="student">انتخاب دانشجو:</label>
              <select
                id="student"
                value={selectedStudent}
                onChange={handleStudentChange}
              >
                <option value="">انتخاب کنید</option>
                {students.map((student) => (
                  <option key={student.id} value={student.name}>
                    {student.name}
                  </option>
                ))}
              </select>
              <button className="edu-butt">add</button>
              <button className="edu-butt">upload excel</button>
            </div>
            <div className="height"></div>

            <button onClick={handleSave}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemEdit;
