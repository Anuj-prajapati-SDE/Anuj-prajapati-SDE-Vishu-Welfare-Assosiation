import { useRef, useEffect, useState } from 'react';
import AboutBg from '../../assets/images/testing.jpg';

const HeroSection = ({ Tittle, Heading, Banner }) => {
  const lineRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [hypotenuseData, setHypotenuseData] = useState({ length: 0, angle: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const calculateHypotenuse = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const length = Math.sqrt(width ** 2 + height ** 2);
      const angle = Math.atan2(height, width) * (180 / Math.PI);
      setHypotenuseData({ length, angle });
      setIsMobile(width < 768);
    };

    calculateHypotenuse();
    window.addEventListener('resize', calculateHypotenuse);

    // Initial animation
    const timer = setTimeout(() => {
      if (textRef.current) {
        textRef.current.style.opacity = '1';
        textRef.current.style.transform = 'translateY(0)';
      }
    }, 300);

    return () => {
      window.removeEventListener('resize', calculateHypotenuse);
      clearTimeout(timer);
    };
  }, []);

  const startAnimation = () => {
    if (lineRef.current) {
      lineRef.current.style.transition = 'all 2.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      lineRef.current.style.width = isMobile ? '100%' : '80%';
      lineRef.current.style.boxShadow = '0 0 20px rgba(255, 165, 0, 0.4)';
    }
  };

  const resetAnimation = () => {
    if (lineRef.current) {
      lineRef.current.style.transition = 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
      lineRef.current.style.width = '0%';
      lineRef.current.style.boxShadow = '0 0 10px rgba(255, 165, 0, 0.2)';
    }
  };

  const styles = {
    container: { 
      height: '100vh',
      width: '100%',
      backgroundImage: `linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 165, 0, 0.08) 100%), url(${Banner || AboutBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      backgroundRepeat: 'no-repeat',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(44, 62, 80, 0.1) 100%)',
      zIndex: 1,
      transition: 'all 0.6s ease',
    },
    triangle: {
      width: 0,
      height: 0,
      borderLeft: '0 solid transparent',
      borderRight: '100vw solid transparent',
      borderTop: '100vh solid rgba(255, 255, 255, 0.84)',
      position: 'absolute',
      bottom: 0,
      left: 0,
      zIndex: 2,
      filter: 'drop-shadow(0 -6px 15px rgba(0, 0, 0, 0.05))',
      transition: 'all 0.6s ease',
    },
    line: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      height: isMobile ? '4px' : '6px',
      width: '0%',
      background: 'linear-gradient(90deg, #ff8c00 0%, #ffa500 100%)',
      transformOrigin: 'left center',
      transform: `rotate(-${hypotenuseData.angle}deg)`,
      pointerEvents: 'none',
      zIndex: 3,
      boxShadow: '0 0 10px rgba(255, 165, 0, 0.2)',
      borderRadius: '3px',
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    }, 
    textContainer: {
      position: 'absolute',
      left: isMobile ? '1rem' : 'clamp(2rem, 5vw, 8rem)',
      top: isMobile ? '50%' : '15%',
      transform: isMobile ? 'translateY(-50%)' : 'translateY(0)',
      zIndex: 4,
      maxWidth: isMobile ? 'calc(100% - 2rem)' : 'min(90vw, 900px)',
      opacity: 0,
      transition: 'all 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
    },
    title: {
      fontSize: 'clamp(1.8rem, 4.5vw, 5rem)',
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      fontWeight: '900',   
      marginBottom: 'clamp(0.8rem, 4vh, 0.2rem)',
      lineHeight: '1.1',
      background: 'linear-gradient(135deg, #2c3e50 0%, #ff8c00 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      filter: 'drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.1))',
      letterSpacing: '-0.02em',
      textRendering: 'optimizeLegibility',
    },
    heading: {
      fontSize: 'clamp(0.5rem, 1.2vw, 1.8rem)',
      fontFamily: "'Inter', 'Segoe UI', system-ui, sans-serif",
      fontWeight: '400',
      color: '#2c3e50',
      lineHeight: '1.6',
      maxWidth: isMobile ? '65%' : '600px',
      marginBottom: isMobile ? '1.5rem' : '2rem',
      textShadow: '1px 1px 2px rgba(255, 255, 255, 0.5)',
      letterSpacing: '0.01em',
    }
  };

  const keyframes = `
    @keyframes smoothFadeIn {
      from {
        opacity: 0;
        transform: translateY(50px) scale(0.95);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes floatAnimation {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    @media (max-width: 1200px) {
      .text-container {
        max-width: 80% !important;
      }
    }

    @media (max-width: 768px) {
      .text-container {
        left: 1rem !important;
        max-width: calc(100% - 2rem) !important;
      }
    }

    @media (max-width: 480px) {
      .text-container {
        top: 20% !important;
        transform: translateY(-50%) !important;
      }
      .title {
        font-size: 2rem !important;
      }
      .heading {
        font-size: 1rem !important;
      }
    }

    @media (orientation: landscape) and (max-height: 500px) {
      .text-container {
        top: 60% !important;
      }
      .title {
        margin-bottom: 0.5rem !important;
      }
      .heading {
        margin-bottom: 0.5rem !important;
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div
        ref={containerRef}
        style={styles.container}
        onMouseEnter={startAnimation}
        onMouseLeave={resetAnimation}
      >
        <div style={styles.overlay} />
        
        <div style={styles.triangle} /> 
        
        <div ref={lineRef} style={styles.line} />
        
        <div ref={textRef} style={styles.textContainer} className="text-container">
          <h1 style={styles.title} className="title">{Tittle}</h1>
          <p style={styles.heading} className="heading">{Heading}</p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
