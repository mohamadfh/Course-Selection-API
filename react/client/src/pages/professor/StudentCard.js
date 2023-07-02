import React from "react";

const StudentCard = ({ student }) => {
  return (
    <div className="student-card">
      <h2>{student.name}</h2>
      <p>{student.email}</p>
      <div className="button-container">
        <button className="approve-button">Approve</button>
        <button className="reject-button">Reject</button>
      </div>
    </div>
  );
};

export default StudentCard;
