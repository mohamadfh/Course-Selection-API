import React from "react";
import "./../../styles/professor/semesters.css";
import { Link } from "react-router-dom";

const SemesterDetails = () => {
  return (
    <div className="page-container">
      <div className="top-bar">
        <h1>Semester Details</h1>
      </div>
      <div className="det-content-container">
        <div className="side-bar">
          <ul>
            <li>
              <Link to="/stu-sems">مشاهده لیست ترم ها</Link>
            </li>
          </ul>
        </div>
        <div className="det-container">
          <Link to={"/page1"}>
            <div className="square">مشاهده پیش ثبت نام ها</div>
          </Link>
          <Link to={"/page2"}>
            <div className="square">
              ممشاهده لیست دروس ارائه شده برای پیش ثبت نام
            </div>
          </Link>
          <Link to={"/page3"}>
            <div className="square">
              مشاهده لیست دروس ارائه شده برای ثبت نام
            </div>
          </Link>
          <Link to={"/page4"}>
            <div className="square">مشاهده درس های ثبت نام شده</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SemesterDetails;
