import React from 'react';
import './Support.css';

const Support = () => {
  return (
    <div className="support-page">
      <div className="support-hero">
        <div className="support-hero-content">
          <h1 className="support-title">Become Part of the Contact</h1>
          <p className="support-subtitle">Support the Frumefni Project</p>
          <p className="support-tagline">Representing Human Connection at the 2026 Iceland Eclipse</p>
        </div>
      </div>

      <section className="support-section">
        <div className="container">
          <div className="support-intro">
            <p>
              In August 2026, Frumefni: The Elemental Contact has been invited to participate in 
              The Portal at Iceland Eclipse, an international innovation residency and gathering 
              of artists, researchers, and creators from around the world.
            </p>
            <p>
              Frumefni will represent a pioneering intersection of performance art, human sensory 
              research, and environmental immersion—exploring the relationship between the human 
              body, the Earth, and cosmic phenomena during one of the rarest celestial events 
              observable from Earth: a total solar eclipse.
            </p>
            <p>
              This residency provides a unique opportunity to conduct live experiential research 
              and artistic expression within one of the planet's most geologically and energetically 
              significant environments.
            </p>
          </div>

          <div className="support-content-block">
            <h2 className="support-heading">The Mission</h2>
            <p>
              Frumefni seeks to deepen understanding of human perception, embodiment, and connection 
              through direct engagement with elemental environments.
            </p>
            <p>The project will contribute:</p>
            <ul className="support-list">
              <li>A structured ceremonial performance aligned with eclipse totality</li>
              <li>Qualitative sensory research on human experience during cosmic events</li>
              <li>Documentation and synthesis to support future interdisciplinary exploration</li>
              <li>A framework for future artistic, scientific, and cultural initiatives</li>
            </ul>
            <p>
              The project's outcomes will be shared openly, contributing to broader cultural and 
              intellectual discourse.
            </p>
          </div>

          <div className="support-content-block">
            <h2 className="support-heading">Why Support Matters</h2>
            <p>
              Participation in the residency requires international travel, specialized preparation, 
              and on-site research and documentation.
            </p>
            <p>Support from sponsors and aligned partners enables:</p>
            <ul className="support-list">
              <li>Travel and transportation to Iceland</li>
              <li>Residency and accommodation expenses</li>
              <li>Research documentation and archival production</li>
              <li>Equipment and logistical preparation</li>
              <li>Preservation and sharing of the project's findings</li>
            </ul>
            <p>
              Your support directly enables the realization of a project that bridges art, science, 
              and human experience.
            </p>
          </div>

          <div className="support-content-block">
            <h2 className="support-heading">What Sponsors Help Make Possible</h2>
            <p>By supporting Frumefni, you contribute to:</p>
            <ul className="support-list">
              <li>Advancement of interdisciplinary artistic and research work</li>
              <li>Cultural exploration and documentation of a rare astronomical event</li>
              <li>Expansion of human understanding of perception and environment</li>
              <li>Creation of publicly shared insights and artistic contributions</li>
            </ul>
            <p>
              Sponsors become part of a project that exists at the intersection of human curiosity, 
              natural forces, and creative exploration.
            </p>
          </div>

          <div className="support-content-block">
            <h2 className="support-heading">Recognition and Acknowledgment</h2>
            <p>Sponsors may be acknowledged through:</p>
            <ul className="support-list">
              <li>Project website recognition</li>
              <li>Research and documentation credits</li>
              <li>Project publications and reports</li>
              <li>Future exhibitions and presentations</li>
            </ul>
            <p>
              Supporters become part of the permanent historical record of the project.
            </p>
          </div>

          <div className="support-content-block contact-block">
            <h2 className="support-heading">How to Support</h2>
            <p>
              If you or your organization would like to support Frumefni, please reach out directly:
            </p>
            <div className="contact-info-block">
              <p className="contact-name">Michael Brandon Lane</p>
              <p className="contact-role">Project Lead, Frumefni</p>
              <p className="contact-email">
                <a href="mailto:brandon@frumefni.world">brandon@frumefni.world</a>
              </p>
              <p className="contact-website">
                <a href="https://www.frumefni.world" target="_blank" rel="noopener noreferrer">
                  www.frumefni.world
                </a>
              </p>
            </div>

            <div className="support-buttons">
              <a 
                href="https://ko-fi.com/frumefni" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="support-button kofi"
              >
                Support via Ko-fi
              </a>
              <a 
                href="https://buy.stripe.com/aFa9AU5zfdPPc5r7ss" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="support-button stripe"
              >
                Support via Stripe
              </a>
            </div>
          </div>

          <div className="closing-statement">
            <p>
              Frumefni is not simply an event. It is an exploration of human presence within the 
              larger natural and cosmic systems we inhabit.
            </p>
            <p className="closing-emphasis">
              Your support helps make this exploration possible.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
