import React, { useEffect, useRef } from 'react';

const SolarCoronaBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let time = 0;
    
    // CONFIGURATION: Solar Corona Parameters
    const PARTICLE_COUNT = 80;
    const CONNECTION_RADIUS = 180;
    const MOUSE_RADIUS = 250;
    const BASE_VELOCITY = 0.3;
    const PULSE_SPEED = 0.02;

    // Resize handling
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Mouse tracking
    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    window.addEventListener('mouseout', () => {
      mouse.x = null;
      mouse.y = null;
    });

    // Plasma Particle Class
    class PlasmaParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * BASE_VELOCITY;
        this.vy = (Math.random() - 0.5) * BASE_VELOCITY;
        this.size = Math.random() * 3 + 1;
        this.baseSize = this.size;
        this.energy = Math.random();
        this.pulseOffset = Math.random() * Math.PI * 2;
        this.hue = 50 + Math.random() * 10; // 50-60 for light yellow to white range
      }

      update() {
        // Add flowing motion with sine wave
        const flowX = Math.sin(time * 0.001 + this.y * 0.01) * 0.5;
        const flowY = Math.cos(time * 0.001 + this.x * 0.01) * 0.5;
        
        this.x += this.vx + flowX;
        this.y += this.vy + flowY;

        // Pulsing effect
        const pulse = Math.sin(time * PULSE_SPEED + this.pulseOffset) * 0.5 + 0.5;
        this.size = this.baseSize * (0.7 + pulse * 0.6);
        this.energy = 0.5 + pulse * 0.5;

        // Boundary wrapping (corona flows around)
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        // Mouse Interaction (Attraction to create corona flares)
        if (mouse.x != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < MOUSE_RADIUS) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (MOUSE_RADIUS - distance) / MOUSE_RADIUS;
            const attractionX = forceDirectionX * force * 2;
            const attractionY = forceDirectionY * force * 2;

            this.x += attractionX; // Move toward mouse (create flare)
            this.y += attractionY;
          }
        }
      }

      draw() {
        // Create glowing corona effect with gradients
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 3
        );
        
        gradient.addColorStop(0, `hsla(${this.hue}, 100%, 70%, ${this.energy * 0.15})`);
        gradient.addColorStop(0.5, `hsla(${this.hue}, 100%, 65%, ${this.energy * 0.08})`);
        gradient.addColorStop(1, `hsla(${this.hue}, 80%, 60%, 0)`);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 80%, ${this.energy * 0.3})`;
        ctx.fill();
      }
    }

    // Initialize System
    const init = () => {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new PlasmaParticle());
      }
    };

    // The Animation Loop
    const animate = () => {
      // Create trailing effect for plasma flow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time++;
      
      // Update and Draw Particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Draw Plasma Arcs (Corona connections)
      connectPlasma();
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Draw arcing plasma connections
    const connectPlasma = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_RADIUS) {
            let opacity = 1 - (distance / CONNECTION_RADIUS);
            
            // Create arcing effect with quadratic curve
            const midX = (particles[a].x + particles[b].x) / 2;
            const midY = (particles[a].y + particles[b].y) / 2;
            const arcOffset = Math.sin(time * 0.05 + a + b) * 20;
            
            // Gradient for plasma arc
            const gradient = ctx.createLinearGradient(
              particles[a].x, particles[a].y,
              particles[b].x, particles[b].y
            );
            
            const hue1 = 55;
            const hue2 = 58;
            
            gradient.addColorStop(0, `hsla(${hue1}, 100%, 70%, ${opacity * 0.08})`);
            gradient.addColorStop(0.5, `hsla(56, 100%, 75%, ${opacity * 0.12})`);
            gradient.addColorStop(1, `hsla(${hue2}, 100%, 70%, ${opacity * 0.08})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = opacity * 2;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.quadraticCurveTo(
              midX + arcOffset,
              midY + arcOffset,
              particles[b].x,
              particles[b].y
            );
            ctx.stroke();
            
            // Add glow effect to arcs
            ctx.strokeStyle = `hsla(55, 100%, 80%, ${opacity * 0.05})`;
            ctx.lineWidth = opacity * 4;
            ctx.stroke();
          }
        }
      }
    };

    init();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', () => {});
      window.removeEventListener('mouseout', () => {});
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default SolarCoronaBackground;
