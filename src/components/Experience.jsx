import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title">The 4-Day Journey</h2>
        <p className="section-subtitle">
          A transformative progression from preparation to synthesis
        </p>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="day-badge">Days 1-3</div>
              <h3 className="timeline-title">Innri Náttúra</h3>
              <p className="timeline-subtitle">Inner Nature Workshop Series</p>
              <p className="timeline-description">
                Begin your journey with preparatory workshops designed to ground you in 
                intention and awareness. Through breathwork, consent practices, and elemental 
                connection exercises, you'll prepare mind and body for the profound experience ahead.
              </p>
              <ul className="timeline-highlights">
                <li>Breathwork and grounding techniques</li>
                <li>Consent and community practices</li>
                <li>Introduction to Icelandic elemental wisdom</li>
                <li>Physical and mental preparation</li>
              </ul>
              <div className="deliverable">
                <strong>Deliverable:</strong> Workshop Handbook for future facilitators
              </div>
            </div>
          </div>

          <div className="timeline-item eclipse">
            <div className="timeline-dot eclipse-dot"></div>
            <div className="timeline-content highlight">
              <div className="day-badge eclipse-badge">August 12, 2026</div>
              <h3 className="timeline-title">Jarðtenging Augnablik</h3>
              <p className="timeline-subtitle">The Earth-Connection Moment</p>
              <p className="timeline-description">
                The pinnacle of the experience. As the moon crosses the sun and darkness 
                descends upon Iceland, participate in a transformative ceremony that 
                transcends traditional boundaries. Connect with the ancient basalt, feel 
                the geothermal energy, and experience totality in its most primal form.
              </p>
              <div className="ritual-elements">
                <div className="element">
                  <span className="element-icon">🌍</span>
                  <span className="element-name">Earth Contact</span>
                </div>
                <div className="element">
                  <span className="element-icon">🌑</span>
                  <span className="element-name">Eclipse Totality</span>
                </div>
                <div className="element">
                  <span className="element-icon">🤝</span>
                  <span className="element-name">Community Unity</span>
                </div>
              </div>
              <div className="ritual-space">
                <h4>The Ritual Space</h4>
                <ul>
                  <li><strong>Volcanic Ring:</strong> Natural rock barriers create sacred privacy</li>
                  <li><strong>Black Sand & Basalt:</strong> Grounding medium for elemental connection</li>
                  <li><strong>The Horizon:</strong> Facing the path of totality</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="day-badge">Post-Eclipse</div>
              <h3 className="timeline-title">Samsöfnun</h3>
              <p className="timeline-subtitle">Data Collection & Gathering</p>
              <p className="timeline-description">
                Following the ceremony, participants engage in reflective practices to capture 
                the sensory and transformative data of the experience. Through anonymous feedback 
                journals, we collect invaluable insights on non-visual eclipse experiences and 
                human transformation.
              </p>
              <ul className="timeline-highlights">
                <li>Anonymous sensory feedback collection</li>
                <li>Guided reflection sessions</li>
                <li>Community sharing circles</li>
                <li>Integration practices</li>
              </ul>
              <div className="deliverable">
                <strong>Deliverable:</strong> Anonymous Feedback Journal entries
              </div>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="day-badge">Post-Event</div>
              <h3 className="timeline-title">Synthesis</h3>
              <p className="timeline-subtitle">Post-Event Analysis</p>
              <p className="timeline-description">
                The culmination of the research and experiential components. A comprehensive 
                synthesis report provides qualitative insights on elemental contact, non-visual 
                eclipse experiences, and the transformative power of intentional ceremony.
              </p>
              <div className="deliverable">
                <strong>Deliverable:</strong> Post-Event Synthesis Report with qualitative insights
              </div>
            </div>
          </div>
        </div>

        <div className="differentiator">
          <h3 className="differentiator-title">Why Frumefni is Different</h3>
          <p className="differentiator-text">
            This is not a typical eclipse viewing. Frumefni transforms a celestial event 
            into an intentional rite of passage—a personal, primal, and collective performance 
            that honors both ancient wisdom and modern understanding. It's where science meets 
            spirit, where individual transformation meets community connection, and where the 
            cosmic and terrestrial converge in a singular, unforgettable moment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
