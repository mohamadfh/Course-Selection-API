import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/professor/semesters.css";

const courses_sample = [
  { id: 1, name: "Course 1", instructor: "Instructor 1", students: 20 },
  { id: 2, name: "Course 2", instructor: "Instructor 2", students: 15 },
  { id: 3, name: "Course 3", instructor: "Instructor 3", students: 25 },
  { id: 4, name: "Course 4", instructor: "Instructor 4", students: 18 },
  { id: 5, name: "Course 5", instructor: "Instructor 5", students: 22 },
  { id: 6, name: "Course 6", instructor: "Instructor 6", students: 17 },
];

const CourseList = () => {
  return (
    <div className="page-container">
      <div className="top-bar">
        <h1>Courses</h1>
      </div>
      <div className="content-container">
        <div className="side-bar">
          <ul>
            <a href="/prof-sems">مشاهده لیست ترم ها</a>
          </ul>
        </div>
        <div className="course-list">
          <div className="search-bar">
            <input type="text" placeholder="Search" />
            <div className="sort-switch">
              <span>Sort by:</span>
              <label>
                <input type="radio" name="sort" value="most" />
                Most Students
              </label>
              <label>
                <input type="radio" name="sort" value="least" />
                Least Students
              </label>
            </div>
          </div>
          <hr />
          <div className="course-tiles">
            {courses_sample.map((course) => (
              <Link to={`/courses/${course.id}`} key={course.id}>
                <div className="course-card">
                  <h2>{course.name}</h2>
                  <p>
                    <br></br>
                    <br></br>Instructor: {course.instructor}
                  </p>
                  <p>
                    <br></br>
                    <br></br>Students: {course.students}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseList;
