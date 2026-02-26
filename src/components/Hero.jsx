import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eclipseDate = new Date('2026-08-12T18:45:00Z'); // Approximate totality time in Iceland
      const now = new Date();
      const difference = eclipseDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hero">
      <div className="hero-video-container">
        <video 
          className="hero-video" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="https://res.cloudinary.com/dksj2niho/video/upload/Revealing_Solar_Corona_With_Human_Figure_ym9kql.mp4" type="video/mp4" />
          {/* Fallback animated gradient background */}
        </video>
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-logo">
          <div className="eclipse-icon">
            <div className="sun"></div>
            <div className="moon"></div>
          </div>
        </div>
        
        <h1 className="hero-title">FRUMEFNI</h1>
        <p className="hero-subtitle">The Elemental Contact</p>
        <p className="hero-tagline">A Transformative Eclipse Experience in Iceland</p>
        
        <div className="countdown">
          <div className="countdown-label">Totality Countdown</div>
          <div className="countdown-timer">
            <div className="countdown-item">
              <div className="countdown-value">{timeLeft.days}</div>
              <div className="countdown-unit">Days</div>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <div className="countdown-value">{String(timeLeft.hours).padStart(2, '0')}</div>
              <div className="countdown-unit">Hours</div>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <div className="countdown-value">{String(timeLeft.minutes).padStart(2, '0')}</div>
              <div className="countdown-unit">Minutes</div>
            </div>
            <div className="countdown-separator">:</div>
            <div className="countdown-item">
              <div className="countdown-value">{String(timeLeft.seconds).padStart(2, '0')}</div>
              <div className="countdown-unit">Seconds</div>
            </div>
          </div>
          <div className="countdown-date">August 12, 2026 • Iceland</div>
        </div>

        <div className="hero-pillars">
          <div className="pillar">CONNECT</div>
          <div className="pillar-dot">⋅</div>
          <div className="pillar">EXPLORE</div>
          <div className="pillar-dot">⋅</div>
          <div className="pillar">LEARN</div>
        </div>

        <div className="hero-cta">
          <a href="#about" className="cta-button primary">Discover the Experience</a>
          <Link to="/support" className="cta-button secondary">Become Part of the Contact</Link>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </div>
  );
};

export default Hero;
