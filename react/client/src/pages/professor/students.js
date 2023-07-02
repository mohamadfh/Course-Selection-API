import React from "react";
import { Link } from "react-router-dom";
import StudentCard from "./StudentCard";
import "./../../styles/professor/semesters.css";

const StudentsInCourse = () => {
  const students = [
    { id: 1, name: "John Doe", email: "johndoe@example.com" },
    { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
    { id: 3, name: "Mike Johnson", email: "mikejohnson@example.com" },
    // Add more students here
  ];

  return (
    <div className="page-container">
      <div className="top-bar">
        <h1>Students in Course</h1>
      </div>
      <div className="content-container">
        <div className="side-bar">
          <ul>
            <li>
              <Link to="/prof-sems">مشاهده لیست ترم ها</Link>
            </li>
          </ul>
        </div>
        <div className="students-container">
          <h2>Courses</h2>
          <hr />
          <div className="search-container">
            <input type="text" placeholder="Search students" />
            <label>
              Sort by:
              <select>
                <option value="most-students">Most Students</option>
                <option value="least-students">Least Students</option>
              </select>
            </label>
          </div>
          <div className="students-list">
            {students.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentsInCourse;
