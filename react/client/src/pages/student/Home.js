import React from "react";
import "./../../styles/student/home.css";
import { Link } from "react-router-dom";

const Page = () => {
  const semesters = [
    { id: 1, name: "Semester 1", link: "/semester/1" },
    { id: 2, name: "Semester 2", link: "/semester/2" },
    { id: 3, name: "Semester 3", link: "/semester/3" },
    { id: 4, name: "Semester 4", link: "/semester/4" },
  ];

  const courses = [
    { id: 1, name: "Course A", link: "/course/1" },
    { id: 2, name: "Course B", link: "/course/2" },
    { id: 3, name: "Course C", link: "/course/3" },
    { id: 4, name: "Course D", link: "/course/4" },
  ];

  return (
    <div className="page-container">
      <div className="top-bar">
        <h1>Courses</h1>
      </div>
      <div>
        <div className="stu-side-bar">
          <a href="/stu-sems">مشاهده لیست ترم ها</a>
        </div>

        <div className="stu-content">
          <div className="stu-section">
            <h2>Recently Semesters</h2>
            <div className="stu-card-container">
              {semesters.map((semester) => (
                <Link
                  // to={`/semester/${semester.id}`} // todo: paths should be updated
                  to={"/prof-sem-courses"} /// todo
                  key={semester.id}
                  className="semester-card"
                >
                  <h2>{semester.name}</h2>
                </Link>
              ))}
            </div>
          </div>
          <div className="stu-section">
            <h2>Recently Courses</h2>
            <div className="stu-card-container">
              {courses.map((course) => (
                //   <Link to={`/courses/${course.id}`} key={course.id}>
                <Link to={"/prof-course-students"}>
                  <div className="stu-course-card">
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
    </div>
  );
};

export default Page;
