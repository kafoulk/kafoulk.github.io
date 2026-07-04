import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }

    const glowCanvas = document.getElementById('glow-canvas');
    if (!glowCanvas) return;

    const handleMouseMove = (e: MouseEvent) => {
      glowCanvas.style.setProperty('--mouse-x', `${e.clientX}px`);
      glowCanvas.style.setProperty('--mouse-y', `${e.clientY}px`);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        glowCanvas.classList.add('active');
        glowCanvas.style.setProperty('--mouse-x', `${e.touches[0].clientX}px`);
        glowCanvas.style.setProperty('--mouse-y', `${e.touches[0].clientY}px`);
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        glowCanvas.style.setProperty('--mouse-x', `${e.touches[0].clientX}px`);
        glowCanvas.style.setProperty('--mouse-y', `${e.touches[0].clientY}px`);
      }
    };

    const handleTouchEnd = () => {
      glowCanvas.classList.remove('active');
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;