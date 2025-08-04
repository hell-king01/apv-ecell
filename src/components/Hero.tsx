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

    // Enhanced animated wireframe grid with glow
    const drawGrid = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 60;
      const offsetX = (time * 0.03) % gridSize;
      const offsetY = (time * 0.015) % gridSize;

      // Outer glow for grid lines with white stroke
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#2F0654';
      ctx.strokeStyle = '#2F0654';
      // Function to draw grid lines
      const drawGridLines = (color: string, width: number, alpha: number) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.globalAlpha = alpha;
        
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
      };

      // Draw white stroke first
      drawGridLines('white', 2, 0.3);
      
      // Then draw purple glow
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#2F0654';
      drawGridLines('rgba(47, 6, 84, 0.9)', 1.5, 0.6);
      ctx.shadowBlur = 0;

      // Enhanced glowing nodes with pulsing effect
      const pulse = 0.6 + 0.4 * Math.sin(time * 0.005);
      
      for (let i = 0; i < 12; i++) {
        const x = (canvas.width * (0.1 + (i * 0.07))) + 30 * Math.sin(time * 0.0015 + i);
        const y = (canvas.height * (0.15 + (i * 0.06))) + 25 * Math.cos(time * 0.002 + i);
        
        // White stroke for outer circle
        ctx.shadowBlur = 0;
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.8 * pulse;
        
        // Draw white stroke
        ctx.beginPath();
        ctx.arc(x, y, 10 * pulse, 0, Math.PI * 2);
        ctx.stroke();
        
        // Outer glow
        ctx.shadowBlur = 20 * pulse;
        ctx.shadowColor = '#2F0654';
        ctx.fillStyle = 'rgba(47, 6, 84, 0.9)';
        
        // Draw outer circle
        ctx.beginPath();
        ctx.arc(x, y, 8 * pulse, 0, Math.PI * 2);
        ctx.fill();
        
        // Inner glow with white stroke
        ctx.shadowBlur = 30 * pulse;
        ctx.fillStyle = '#2F0654';
        ctx.globalAlpha = 0.9 * pulse;
        
        // Draw inner white stroke
        ctx.strokeStyle = 'white';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(x, y, 5 * pulse, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw inner circle
        ctx.beginPath();
        ctx.arc(x, y, 3 * pulse, 0, Math.PI * 2);
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
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-[#0D0D0D] via-[#0A0A0A] to-[#0D0D0D]"></div>
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-50"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(13,13,13,0.9)_80%)]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider mb-6 text-white relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 relative z-10">
            Igniting Tomorrow's
            <br />
            <span className="text-[#2F0654] drop-shadow-[0_0_8px_rgba(47,6,132,0.8)]">Innovators</span>
          </span>
          <span className="absolute inset-0 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 opacity-20 blur-2xl">
            Igniting Tomorrow's
            <br />
            Innovators
          </span>
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