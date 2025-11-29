import './Experience.css';

function ExperienceCard({ exp }) {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      className="timeline-content"
      onMouseMove={handleMouseMove}
    >
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
  );
}

function Experience() {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Company Inc.',
      period: '2022 - Present',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and driving technical decisions.',
      highlights: [
        'Architected and deployed microservices handling 1M+ requests daily',
        'Reduced application load time by 40% through optimization',
        'Led team of 5 developers in agile environment'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client-facing applications. Collaborated with design and product teams to deliver high-quality solutions.',
      highlights: [
        'Built responsive web applications serving 100K+ users',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Integrated third-party APIs and payment systems'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Ventures',
      period: '2019 - 2020',
      description: 'Contributed to frontend and backend development. Learned industry best practices and modern development workflows.',
      highlights: [
        'Developed reusable UI components in React',
        'Participated in code reviews and testing',
        'Collaborated with cross-functional teams'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <h2>Work Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <ExperienceCard exp={exp} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
