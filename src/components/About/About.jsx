import "./About.css";
import React from "react";
import authorImage from "../../assets/profile.png";

function About() {
  return (
    <section className="about">
      <div className="about__image-container">
        <img src={authorImage} alt="Author" className="about__image" />
      </div>
      <div className="about__info">
        <h2 className="about__title">About the author</h2>
        <p className="about__paragraph">
          Hi, my name is Glen, and I am a Junior Software Engineer with a
          passion for building full-stack applications. I have hands-on
          experience with JavaScript, React, Node.js, Express, MongoDB, and SQL.
          On the frontend, I enjoy creating clean and responsive interfaces
          using HTML, CSS, Tailwind, Vite, and React. On the backend, I work
          with Node.js, Express, and REST APIs to develop reliable server-side
          applications. I also use tools like Git, GitHub, and Postman to
          support my development workflow. I am always eager to learn new
          technologies, grow my skills, and contribute to meaningful projects.
        </p>
        <p className="about__paragraph">
          Through my work at TripleTen, I learned how to deliver solutions that
          meet real user needs while working under project deadlines. I gained
          experience not only in building web pages and applications from
          scratch, but also in testing and troubleshooting to ensure quality and
          performance. I can help customers by developing applications that are
          intuitive, reliable, and designed to grow with their business.
        </p>
      </div>
    </section>
  );
}

export default About;
