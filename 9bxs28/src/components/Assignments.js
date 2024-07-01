// src/components/Assignments.js
import React, { useState, useEffect } from 'react';
import { database, ref, get, child } from '../firebase';
import './Assignments.css'; // Import the styles for the assignments

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, 'assignments')).then((snapshot) => {
      if (snapshot.exists()) {
        const assignmentsData = [];
        snapshot.forEach((childSnapshot) => {
          assignmentsData.push(childSnapshot.val());
        });
        setAssignments(assignmentsData);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  const toggleDescription = (index) => {
    setAssignments((prevAssignments) =>
      prevAssignments.map((assignment, i) => {
        if (i === index) {
          return {
            ...assignment,
            expanded: !assignment.expanded,
          };
        }
        return assignment;
      })
    );
  };

  return (
    <div className="assignments-container">
      <h2>Assignments</h2>
      <ul className="card-container">
        {assignments.map((assignment, index) => (
          <li key={index} className="card">
            <h3>{assignment.title}</h3>
            <p className={`card-content ${assignment.expanded ? 'expanded' : ''}`}>
              {assignment.description}
            </p>
            <p className="card-deadline"><strong>Due Date:</strong> {assignment.due_date}</p>
            <button
              className="show-more-btn"
              onClick={() => toggleDescription(index)}
            >
              {assignment.expanded ? 'Show Less' : 'Show More'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignments;
