import React, { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Enhanced animated wireframe grid with particles
    const drawGrid = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 60;
      const offsetX = (time * 0.02) % gridSize;
      const offsetY = (time * 0.015) % gridSize;

      // Grid lines with purple glow
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#A259FF';
      ctx.strokeStyle = '#A259FF';
      ctx.lineWidth = 1;
      ctx.globalAlpha = 0.4;
      
      // Vertical lines
      for (let x = -offsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }

      // Horizontal lines
      for (let y = -offsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Enhanced glowing nodes with pulsing effect
      const pulse = 0.6 + 0.4 * Math.sin(time * 0.003);
      
      for (let i = 0; i < 15; i++) {
        const x = (canvas.width * (0.1 + (i * 0.06))) + 40 * Math.sin(time * 0.001 + i);
        const y = (canvas.height * (0.15 + (i * 0.05))) + 30 * Math.cos(time * 0.0015 + i);
        
        // Outer glow
        ctx.shadowBlur = 25 * pulse;
        ctx.shadowColor = '#A259FF';
        ctx.fillStyle = `rgba(162, 89, 255, ${0.8 * pulse})`;
        ctx.globalAlpha = 0.9 * pulse;
        
        // Draw outer circle
        ctx.beginPath();
        ctx.arc(x, y, 12 * pulse, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner bright core
        ctx.shadowBlur = 15 * pulse;
        ctx.fillStyle = `rgba(255, 255, 255, ${0.9 * pulse})`;
        ctx.globalAlpha = 0.8 * pulse;
        
        ctx.beginPath();
        ctx.arc(x, y, 4 * pulse, 0, Math.PI * 2);
        ctx.fill();
      }

      // Floating particles
      for (let i = 0; i < 8; i++) {
        const x = (canvas.width * (0.2 + (i * 0.1))) + 60 * Math.sin(time * 0.0008 + i * 2);
        const y = (canvas.height * (0.3 + (i * 0.08))) + 40 * Math.cos(time * 0.001 + i * 1.5);
        
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#872ff7';
        ctx.fillStyle = `rgba(135, 47, 247, ${0.6 + 0.4 * Math.sin(time * 0.002 + i)})`;
        ctx.globalAlpha = 0.7;
        
        ctx.beginPath();
        ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const animate = (time: number) => {
      drawGrid(time);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden" 
             style={{ background: 'radial-gradient(ellipse at center, #151522 0%, #0D0D1F 100%)' }}>
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-60"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,13,31,0.8)_80%)]"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
        <div className="floating-particle"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider mb-8 text-white relative font-['Space_Grotesk']">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#CCCCCC] to-white relative z-10 hero-glow">
              Igniting Tomorrow's
              <br />
              <span className="text-[#A259FF] drop-shadow-[0_0_20px_rgba(162,89,255,0.8)]">Innovators</span>
            </span>
          </h1>
        </div>
        
        <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-[#CCCCCC] mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            Empowering visionaries to transform ideas into reality.
            <br />
            Building the next generation of entrepreneurs and change-makers at 
            <span className="text-[#A259FF] font-semibold"> Agnel Polytechnic, Vashi</span>.
          </p>
        </div>
        
        <div className="fade-in-up flex flex-col sm:flex-row gap-6 justify-center items-center" style={{ animationDelay: '0.4s' }}>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="btn-primary px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300"
          >
            Discover Our Journey
          </button>
          <button 
            onClick={() => document.getElementById('vision-mission')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="btn-secondary px-10 py-4 text-lg font-semibold rounded-full transition-all duration-300"
          >
            Our Vision
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <span className="text-sm font-medium mb-2 font-['Space_Grotesk']">Explore More</span>
        <button
          onClick={scrollToNext}
          className="text-[#A259FF] hover:text-white transition-colors duration-300"
          aria-label="Scroll to next section"
        >
          <ChevronDown size={28} />
        </button>
      </div>
    </section>
  );
};

export default Hero;