import React from "react";

const semesterCard = ({ student }) => {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>
      <p>{student.instructor}</p>
      <div className="button-container">
        <button className="approve-button">more information</button>
        <button className="reject-button">cancel</button>
      </div>
    </div>
  );
};

export default semesterCard;
