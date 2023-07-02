import React, { useState, useEffect } from "react";
import "./../../styles/professor/semesters.css";
import { Link } from "react-router-dom";

const ListOfSemestersPage = () => {
  const semesters_sample = [
    { id: 1, name: "Fall 2023" },
    { id: 2, name: "Spring 2024" },
    { id: 3, name: "Summer 2024" },
    { id: 4, name: "Fall 2024" },
    { id: 4, name: "Fall 2024" },
    { id: 4, name: "Fall 2024" },
    { id: 4, name: "Fall 2024" },
  ];
  const [semesters, setSemesters] = useState([]);

  useEffect(() => {
    // Simulating API call to fetch the list of semesters
    const fetchSemesters = async () => {
      try {
        // Replace the following code with your actual API call to fetch semesters
        const response = await fetch("https://api.example.com/semesters");
        const data = await response.json();
        setSemesters(data);
      } catch (error) {
        console.error("Error fetching semesters:", error);
      }
    };

    fetchSemesters();
  }, []);

  return (
    <div className="page-container">
      <div className="top-bar">
        <h1>List of Semesters</h1>
      </div>
      <div className="content-container">
        <div className="side-bar">
          <ul>
            <li>LIST</li>
          </ul>
        </div>
        <div className="semester-list">
          <h2 className="semester-list-title">List of Semesters</h2>
          <div className="semester-list-line"></div>
          {semesters_sample.map((semester) => (
            <Link
              to={`/semester/${semester.id}`} // todo: paths should be updated
              key={semester.id}
              className="semester-card"
            >
              <h2>{semester.name}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListOfSemestersPage;
