// StudentHome.js

import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/student/home.css";

const semesters_sample = [
  { id: 1, name: "Semester 1" },
  { id: 2, name: "Semester 2" },
  { id: 3, name: "Semester 3" },
  // Add more semesters as needed
];

const courses_sample = [
  { id: 1, name: "Course 1" },
  { id: 2, name: "Course 2" },
  { id: 3, name: "Course 3" },
  // Add more courses as needed
];

const StudentHome = () => {
  return (
    <div className="page-container">
      <div className="top-bar">
        <h1>Student Home</h1>
      </div>
      <div className="content-container">
        <div className="side-bar">
          <ul>
            <li>مشاهده لیست ترم ها</li>
          </ul>
        </div>
        <div className="home-content">
          <h2>Last Visited Semesters</h2>
          <div className="semester-cards">
            {semesters_sample.map((semester) => (
              <Link to={`/semester/${semester.id}`} key={semester.id}>
                <div className="semester-card">
                  <h3>{semester.name}</h3>
                </div>
              </Link>
            ))}
          </div>
          <h2>Last Visited Courses</h2>
          <div className="course-cards">
            {courses_sample.map((course) => (
              <Link to={`/course/${course.id}`} key={course.id}>
                <div className="course-card">
                  <h3>{course.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentHome;
