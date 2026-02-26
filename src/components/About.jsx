import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="stars-background"></div>
      <div className="container">
        <h2 className="section-title">The Elemental Contact</h2>
        <p className="section-subtitle">
          A pioneering fusion of radical wellness, performance art, and ethnographic research
        </p>

        <div className="about-intro">
          <p>
            Frumefni is a transformative 4-day experience set against the backdrop of the 
            August 12, 2026 Total Solar Eclipse in Iceland. This event transcends traditional 
            boundaries by creating a profound connection with the Icelandic terrain and cosmic 
            phenomena, delivering an unforgettable journey of human transformation.
          </p>
        </div>

        <div className="pillars-container">
          <div className="pillar-card connect">
            <div className="pillar-icon">
              <div className="icon-circle">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="30" cy="50" r="8" fill="currentColor" />
                  <circle cx="70" cy="50" r="8" fill="currentColor" />
                  <path d="M 30 50 Q 50 30, 70 50" stroke="currentColor" strokeWidth="3" fill="none" />
                  <path d="M 30 50 Q 50 70, 70 50" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
              </div>
            </div>
            <h3 className="pillar-title">CONNECT</h3>
            <p className="pillar-description">
              Foster radical self-acceptance and community bonds through intentionality, 
              breathwork, and consent. Experience the power of collective human connection.
            </p>
            <div className="pillar-focus">Self • Community • Ber Tenging</div>
          </div>

          <div className="pillar-card explore">
            <div className="pillar-icon">
              <div className="icon-circle">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="3" fill="none" />
                  <circle cx="50" cy="25" r="4" fill="currentColor" />
                  <circle cx="75" cy="50" r="4" fill="currentColor" />
                  <circle cx="50" cy="75" r="4" fill="currentColor" />
                  <circle cx="25" cy="50" r="4" fill="currentColor" />
                </svg>
              </div>
            </div>
            <h3 className="pillar-title">EXPLORE</h3>
            <p className="pillar-description">
              Interact with Iceland's ancient lava, basalt formations, and geothermal energy 
              through direct skin-to-soil grounding and elemental immersion.
            </p>
            <div className="pillar-focus">Earth • Lava • Basalt • Jarðtenging</div>
          </div>

          <div className="pillar-card learn">
            <div className="pillar-icon">
              <div className="icon-circle">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="20" fill="currentColor" />
                  <path d="M 50 15 L 50 25" stroke="currentColor" strokeWidth="3" />
                  <path d="M 50 75 L 50 85" stroke="currentColor" strokeWidth="3" />
                  <path d="M 15 50 L 25 50" stroke="currentColor" strokeWidth="3" />
                  <path d="M 75 50 L 85 50" stroke="currentColor" strokeWidth="3" />
                  <path d="M 25 25 L 32 32" stroke="currentColor" strokeWidth="3" />
                  <path d="M 68 68 L 75 75" stroke="currentColor" strokeWidth="3" />
                  <path d="M 75 25 L 68 32" stroke="currentColor" strokeWidth="3" />
                  <path d="M 32 68 L 25 75" stroke="currentColor" strokeWidth="3" />
                </svg>
              </div>
            </div>
            <h3 className="pillar-title">LEARN</h3>
            <p className="pillar-description">
              Experience the profound sensory responses elicited by eclipse totality, 
              cosmic shadow, and the transformative silence of celestial alignment.
            </p>
            <div className="pillar-focus">Cosmos • Eclipse • Totality</div>
          </div>
        </div>

        <div className="confluence">
          <div className="confluence-symbol">
            <div className="symbol-ring"></div>
            <div className="symbol-center">⋅</div>
          </div>
          <h3 className="confluence-title">Jarðtenging Augnablik</h3>
          <p className="confluence-subtitle">The Confluence Moment</p>
          <p className="confluence-description">
            Where Earth, Cosmos, and Self converge in a pivotal moment of collective connection. 
            The human body serves as the central conduit, bridging ancient elemental forces 
            with cosmic phenomena in a transformative experience of unity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
