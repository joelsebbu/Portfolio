import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Experience.css';

function Experience() {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

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

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, '--x', 'px');
    setY.current = gsap.quickSetter(el, '--y', 'px');
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: 0.45,
      ease: 'power3.out',
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true
    });
  };

  const handleMove = e => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: 0.6,
      overwrite: true
    });
  };

  const handleCardMove = e => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section id="experience" className="experience">
      <h2>Work Experience</h2>
      <div
        ref={rootRef}
        className="timeline"
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
      >
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div
              className="timeline-content chroma-card"
              onMouseMove={handleCardMove}
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
          </div>
        ))}
        <div className="chroma-overlay" />
        <div ref={fadeRef} className="chroma-fade" />
      </div>
    </section>
  );
}

export default Experience;
