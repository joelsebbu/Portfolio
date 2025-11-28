import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a passionate developer with a keen eye for design and a love for clean,
            efficient code. With years of experience in web development, I specialize in
            building modern, responsive applications that deliver exceptional user experiences.
          </p>
          <p>
            My journey in tech started with curiosity and evolved into a career where I get
            to solve complex problems daily. I believe in continuous learning and staying
            updated with the latest technologies and best practices.
          </p>
          <p>
            When I'm not coding, you'll find me exploring new technologies, contributing to
            open source, or sharing knowledge with the developer community.
          </p>
        </div>
        <div className="about-stats">
          <div className="stat-card">
            <h3>5+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat-card">
            <h3>50+</h3>
            <p>Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3>30+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
