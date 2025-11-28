import './Hero.css';

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Hi, I'm <span className="gradient-text">Your Name</span>
          </h1>
          <p className="hero-subtitle">
            Full Stack Developer | UI/UX Enthusiast | Problem Solver
          </p>
          <p className="hero-description">
            I craft elegant solutions to complex problems. Passionate about building
            user-centric applications that make a difference.
          </p>
          <div className="hero-buttons">
            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View My Work
            </button>
            <button
              className="secondary-btn"
              onClick={() => document.getElementById('resume').scrollIntoView({ behavior: 'smooth' })}
            >
              Download Resume
            </button>
          </div>
        </div>
        <div className="hero-image">
          <div className="profile-placeholder">
            <svg viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="90" fill="var(--color-card-bg)" />
              <circle cx="100" cy="80" r="30" fill="var(--color-link)" />
              <path d="M 50 150 Q 100 120 150 150" fill="var(--color-link)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
