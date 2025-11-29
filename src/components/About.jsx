import './About.css';
import portfolioData from '../data/portfolioData';

function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <div className="about-stats">
          {about.stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
