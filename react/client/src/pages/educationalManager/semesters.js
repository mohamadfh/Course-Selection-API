import React from "react";
import { Link } from "react-router-dom";
import "./../../styles/professor/semesters.css";

const Assignments = () => {
  const courses = [
    { id: 1, name: "Fall 2023" },
    { id: 2, name: "Spring 2024" },
    { id: 3, name: "Summer 2024" },
    { id: 4, name: "Fall 2024" },
    { id: 4, name: "Fall 2024" },
    { id: 4, name: "Fall 2024" },
    { id: 4, name: "Fall 2024" },
  ];

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
          <div className="students-list">
            {courses.map((semester) => (
              <div>
                <Link
                  // to={`/semester/${semester.id}`} // todo: paths should be updated
                  to={"/prof-sem-courses"}
                  key={semester.id}
                  className="semester-card"
                >
                  <h2>{semester.name}</h2>
                  <div className="button-container">
                    <button className="approve-button">edit</button>
                    <button className="reject-button">delete</button>
                  </div>
                </Link>
              </div>
            ))}
            ,
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
