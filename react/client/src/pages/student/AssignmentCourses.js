import React from "react";
import { Link } from "react-router-dom";
import PACourseCard from "./PACourseCard";
import "./../../styles/professor/semesters.css";

const AssCourses = () => {
  const courses = [
    { id: 1, name: "Advanced Programming", instructor: "dr Vahidi" },
    { id: 2, name: "wev application development", instructor: "dr Razian" },
    { id: 3, name: "artificial intelligence", instructor: "de Abdoos" },
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
              <Link to="/stu-sems">مشاهده لیست ترم ها</Link>
            </li>
          </ul>
        </div>
        <div className="students-container">
          <h2>Courses</h2>
          <hr />
          <div className="search-container">
            <input type="text" placeholder="Search Course" />
          </div>
          <div className="students-list">
            {courses.map((student) => (
              <PACourseCard key={student.id} student={student} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssCourses;
