import './Experience.css';
import portfolioData from '../data/portfolioData';

function Experience() {
  const experiences = portfolioData.experience;

  return (
    <section id="experience" className="experience">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="timeline-header">
                <h3>{exp.title}</h3>
                <span className="timeline-period">{exp.period}</span>
              </div>
              <h4 className="company-name">{exp.company}</h4>
              <p className="timeline-description">{exp.description}</p>
              <ul className="timeline-highlights">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
