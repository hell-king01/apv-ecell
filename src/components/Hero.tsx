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

    // Animated wireframe grid
    const drawGrid = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 50;
      const offsetX = (time * 0.02) % gridSize;
      const offsetY = (time * 0.01) % gridSize;

      ctx.strokeStyle = '#2F0654';
      ctx.lineWidth = 0.5;
      ctx.globalAlpha = 0.3;

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

      // Add some glowing nodes
      ctx.fillStyle = '#2F0654';
      ctx.globalAlpha = 0.6 + 0.4 * Math.sin(time * 0.003);
      
      for (let i = 0; i < 8; i++) {
        const x = (canvas.width * (0.1 + (i * 0.1))) + 20 * Math.sin(time * 0.002 + i);
        const y = (canvas.height * (0.2 + (i * 0.08))) + 15 * Math.cos(time * 0.003 + i);
        
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0D0D]">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'radial-gradient(ellipse at center, #1a1a1a 0%, #0D0D0D 70%)' }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider mb-6 text-white hero-glow">
          Igniting Tomorrow's
          <br />
          <span className="text-[#2F0654]">Innovators</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Empowering visionaries to transform ideas into reality.
          <br />
          Building the next generation of entrepreneurs and change-makers.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="btn-primary px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Join the E-Cell
          </button>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="btn-secondary px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Our Journey
          </button>
        </div>
      </div>
      
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-[#2F0654] hover:text-white transition-colors duration-300 animate-bounce"
        aria-label="Scroll to next section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;