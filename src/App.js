// src/App.js
import React, { useEffect, useState } from 'react';
import { database, ref, get, child } from './firebase';
import './App.css';
import './components/Assignments.css';

// Assuming you have the following components
import Home from './components/Home';
import About from './components/About';
import Schedule from './components/Schedule';
import Assignments from './components/Assignments';
import Resources from './components/Resources';
import Contact from './components/Contact';


const App = () => {
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

  return (
    <div className="App">
      <header>
        <h1>Welcome to 9B St. Peter Canisius</h1>
        <nav>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#schedule">Schedule</a></li>
            <li><a href="#assignments">Assignments</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
          <Home />
          <About />
          <Schedule />
        <section id="assignments">
          <Assignments assignments={assignments} />
        </section>
          <Resources />
          <Contact />
      </main>

      <footer>
        <p>&copy; 2024 Not A Real Copyright</p>
      </footer>
    </div>
  );
};

export default App;