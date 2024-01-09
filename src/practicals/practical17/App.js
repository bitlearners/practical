// App.js
import React, { useState } from "react";
import "./Style.css";

const App = () => {
  return (
    <div>
      <header className="main-header">
        <h2>My Portfolio</h2>
      </header>

      <div className="image-content-container">
        <div className="image-container">
          <img
            src="https://avatars.githubusercontent.com/u/81581862?v=4"
            alt="Side Image"
          />
        </div>
        <div className="content-container">
          <h1>Abhishek Parate </h1>
            <h2>Web Developer Portfolio</h2>
          <p>
            Greetings! I'm Abhishek Parate, a dedicated web developer with a
            passion for creating seamless digital experiences. I specialize in
            both front-end and back-end technologies, crafting responsive and
            scalable web applications.
          </p>
        </div>
      </div>
   

      <div className="about-container">
        <div className="about-section">
          <h2>About Us</h2>
          
            <p>
            I find joy in translating creative concepts into functional and
            visually appealing websites. My expertise includes HTML5, CSS3, and
            JavaScript, coupled with proficiency in modern frameworks such as
            React, Angular, and Vue.js. On the server side, I am well-versed in
            technologies like Node.js and Express.js.
            </p>
          
        </div>

        <div className="skills-section">
          <h2>Projects</h2>
          <div className="projects-section">
          
          <div className="project-card">
            <h3>Project 1</h3>
            <p>
              Description of Project 1 goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>
              Description of Project 2 goes here. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
        </div>
      </div>
     


      <div className="projects-skills-container">
      <div className="skills-section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node.js</li>
            <li>SQL</li>
          </ul>
        </div>

        <div className="skills-section">
        <h2>Contact</h2>
           <p>
           I'm always open to collaboration and eager to take on new challenges. If you have a project in mind, or if you just want to connect, feel free to reach out to me at abhishekparate404@gmail.com
            </p>
        </div>

       
      </div>

      <footer className="main-footer">
        <p>© Copyright 2023 by Abhishek Parate</p>
      </footer>

    </div>
  );
};

export default App;
