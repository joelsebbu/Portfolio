import './Hero.css';
import portfolioData from '../data/portfolioData';

function Hero() {
  const { personalInfo, hero } = portfolioData;

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            {hero.greeting} <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <p className="hero-subtitle">
            {personalInfo.title}
          </p>
          <p className="hero-description">
            {personalInfo.tagline}
          </p>
          <div className="hero-buttons">
            <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              {hero.cta.primary}
            </button>
            <button
              className="secondary-btn"
              onClick={() => document.getElementById('resume').scrollIntoView({ behavior: 'smooth' })}
            >
              {hero.cta.secondary}
            </button>
          </div>
        </div>
        <div className="hero-image">
          {personalInfo.profileImage ? (
            <img
              src={personalInfo.profileImage}
              alt={`${personalInfo.name} - Profile`}
              className="profile-photo"
            />
          ) : (
            <div className="profile-placeholder">
              <svg viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="90" fill="var(--color-card-bg)" />
                <circle cx="100" cy="80" r="30" fill="var(--color-link)" />
                <path d="M 50 150 Q 100 120 150 150" fill="var(--color-link)" />
              </svg>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
