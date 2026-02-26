import React from 'react';
import './Culture.css';

const Culture = () => {
  return (
    <section id="culture" className="culture section">
      <div className="aurora-effect"></div>
      <div className="container">
        <h2 className="section-title">Cultural Significance</h2>
        <p className="section-subtitle">
          Honoring ancient wisdom in a modern context
        </p>

        <div className="culture-content">
          <div className="culture-text">
            <h3>Eclipses in Icelandic Culture</h3>
            <p>
              In Icelandic tradition, solar eclipses have long been viewed as powerful 
              moments when the veil between worlds grows thin. The ancient Norse peoples 
              saw eclipses as times of transformation, when Sköll, the celestial wolf, 
              momentarily catches the sun in its eternal chase across the sky.
            </p>
            <p>
              These moments were treated with reverence and respect, recognized as opportunities 
              for profound connection with the cosmos and the earth. Frumefni honors this 
              tradition by creating an intentional space for modern participants to experience 
              that same sense of cosmic wonder and terrestrial connection.
            </p>
          </div>

          <div className="culture-cards">
            <div className="culture-card">
              <div className="card-icon">🐺</div>
              <h4>Sköll & Hati</h4>
              <p>
                In Norse mythology, two wolves eternally chase the sun and moon. During an 
                eclipse, they briefly catch their prey, creating a moment of cosmic transformation.
              </p>
            </div>

            <div className="culture-card">
              <div className="card-icon">🌋</div>
              <h4>Land of Fire & Ice</h4>
              <p>
                Iceland's unique geological landscape—where volcanic fire meets glacial ice—
                provides the perfect setting for experiencing elemental contact.
              </p>
            </div>

            <div className="culture-card">
              <div className="card-icon">✨</div>
              <h4>Northern Lights Tradition</h4>
              <p>
                Just as Icelanders have long gathered to witness the aurora borealis, we 
                gather to witness the sun's corona during totality—a celestial light show 
                of a different kind.
              </p>
            </div>
          </div>

          <div className="iceland-info">
            <h3>The Perfect Location</h3>
            <div className="info-grid">
              <div className="info-item">
                <div className="info-label">Duration of Totality</div>
                <div className="info-value">2 minutes 18 seconds</div>
              </div>
              <div className="info-item">
                <div className="info-label">Eclipse Path</div>
                <div className="info-value">Across Iceland</div>
              </div>
              <div className="info-item">
                <div className="info-label">Optimal Viewing</div>
                <div className="info-value">Black Sand Beaches</div>
              </div>
              <div className="info-item">
                <div className="info-label">Temperature</div>
                <div className="info-value">12-15°C (54-59°F)</div>
              </div>
            </div>
          </div>

          <div className="icelandic-terms">
            <h3>Icelandic Terms</h3>
            <div className="terms-list">
              <div className="term">
                <span className="term-word">Frumefni</span>
                <span className="term-meaning">Elements / Elemental Substances</span>
              </div>
              <div className="term">
                <span className="term-word">Jarðtenging</span>
                <span className="term-meaning">Earth Connection / Grounding</span>
              </div>
              <div className="term">
                <span className="term-word">Augnablik</span>
                <span className="term-meaning">Moment / Instant (literally "blink of an eye")</span>
              </div>
              <div className="term">
                <span className="term-word">Innri Náttúra</span>
                <span className="term-meaning">Inner Nature</span>
              </div>
              <div className="term">
                <span className="term-word">Samsöfnun</span>
                <span className="term-meaning">Collection / Gathering</span>
              </div>
              <div className="term">
                <span className="term-word">Ber Tenging</span>
                <span className="term-meaning">Bare Connection / Direct Contact</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;
