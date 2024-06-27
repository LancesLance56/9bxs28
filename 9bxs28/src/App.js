// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Assignments from './components/Assignments';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Welcome to 9B St. Peter Canisius</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
              <li><Link to="/assignments">Assignments</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main>
          <Route path="/" exact component={() => (
            <section id="home">
              <h2>Home</h2>
              <p>Welcome to our class website! Here you will find all the information you need.</p>
            </section>
          )} />
          <Route path="/about" component={() => (
            <section id="about">
              <h2>About</h2>
              <p>This website is made in vanilla HTML and the important data is stored in JSON. I will try my best to make an update where anyone can add events and tasks!</p>
            </section>
          )} />
          <Route path="/schedule" component={() => (
            <section id="schedule">
              <h2>Schedule</h2>
              <p>Schedule details...</p>
            </section>
          )} />
          <Route path="/assignments" component={Assignments} />
          <Route path="/resources" component={() => (
            <section id="resources">
              <h2>Resources</h2>
              <p>Useful resources for the class...</p>
            </section>
          )} />
          <Route path="/contact" component={() => (
            <section id="contact">
              <h2>Contact</h2>
              <p>Contact information...</p>
            </section>
          )} />
        </main>

        <footer>
          <p>&copy; 2024 Not A Real Copyright</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;

