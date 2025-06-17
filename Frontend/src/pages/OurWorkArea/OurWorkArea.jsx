import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Educational from "../../assets/images/work/educational-livelihood.jpg";
import Food from "../../assets/images/work/food-donation.jpg"
import Health from "../../assets/images/work/health.jpg"
import Plantation from "../../assets/images/work/plantation-photo.jpg"
import HeroSection from '../../components/HeroSection/HeroSection'
import Banner from '../../assets/images/banners/banner_6.jpg'
const OurWorkArea = () => {
  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    display: 'flex', 
    justifyContent: 'center',
    padding: '2rem 1rem',
    backgroundColor: '#f8f9fa',
    backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
  };  

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    // Media queries handled through CSS-in-JS
    '@media (min-width: 768px)': {
      gridTemplateColumns: '1fr 1fr',
      gap: '2.5rem',
    },
    '@media (min-width: 1024px)': {
      gap: '3rem',
    },
  };

  const textBoxStyle = (bgColor, isEven = false) => ({
    backgroundColor: bgColor,
    padding: '2rem',
    borderRadius: '15px',
    color: 'white',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '300px',
    transition: 'all 0.3s ease',
    transform: 'translateY(0)',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    // Mobile-first approach
    order: isEven ? 1 : 2,
    // Tablet and desktop
    '@media (min-width: 768px)': {
      order: 'initial',
      minHeight: '350px',
    },
    // Hover effects
    ':hover': {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
    },
    // Add subtle animation
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      transition: 'left 0.5s',
    },
    ':hover::before': {
      left: '100%',
    },
  });

  const imgBoxStyle = (imgUrl, isEven = false) => ({
    backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${imgUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '300px',
    borderRadius: '15px',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    position: 'relative',
    overflow: 'hidden',
    // Mobile-first approach
    order: isEven ? 2 : 1,
    // Responsive heights
    '@media (min-width: 480px)': {
      minHeight: '320px',
    },
    '@media (min-width: 768px)': {
      order: 'initial',
      minHeight: '350px',
    },
    '@media (min-width: 1024px)': {
      minHeight: '400px',
    },
    // Hover effects
    ':hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
    },
    // Add overlay for better text readability if needed
    '::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.1)',
      transition: 'background 0.3s ease',
    },
    ':hover::after': {
      background: 'rgba(0,0,0,0.05)',
    },
  });

  const headingStyle = (color) => ({
    fontSize: 'clamp(1.4rem, 4vw, 2rem)',
    marginBottom: '1rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: color,
    textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
    letterSpacing: '1px',
    lineHeight: '1.2',
    // Responsive adjustments
    '@media (min-width: 768px)': {
      fontSize: 'clamp(1.6rem, 3vw, 2.2rem)',
    },
  });

  const paragraphStyle = {
    fontFamily: 'Be Vietnam Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
    lineHeight: '1.7',
    margin: '0',
    textAlign: 'justify',
    // Better text rendering
    fontOpticalSizing: 'auto',
    textRendering: 'optimizeLegibility',
    // Responsive adjustments
    '@media (min-width: 768px)': {
      fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
      lineHeight: '1.8',
      textAlign: 'center',
    },
  };

  // Work items data for better maintainability
  const workItems = [
    {
      id: 1,
      image: Educational,
      bgColor: 'linear-gradient(135deg, #ff9935 0%, #ff7f35 100%)',
      headingColor: '#0e2c53',
      title: 'Education & Livelihood',
      description: 'We believe education opens doors and livelihood sustains freedom. Vishu Foundation ensures individuals—especially children, youth, women, and economically weaker sections—have the tools they need to learn, grow, and become self-reliant.'
    },
    {
      id: 2,
      image: Plantation,
      bgColor: 'linear-gradient(135deg, #0e2c53 0%, #1a3a6b 100%)',
      headingColor: '#ffd700',
      title: 'Plantation & Environment',
      description: 'Vishu Foundation promotes environmental responsibility through tree plantations, waste management, rainwater harvesting, and school programs to instill eco-awareness from an early age.'
    },
    {
      id: 3,
      image: Health,
      bgColor: 'linear-gradient(135deg, #ff9935 0%, #ff7f35 100%)',
      headingColor: '#0e2c53',
      title: 'Healthcare & Hygiene',
      description: 'We provide free medical camps, mobile units for rural health, first-aid training, clean water stations, and hygiene campaigns to improve community well-being across India.'
    },
    {
      id: 4,
      image: Food,
      bgColor: 'linear-gradient(135deg, #0e2c53 0%, #1a3a6b 100%)',
      headingColor: '#ffd700',
      title: 'Food Distribution',
      description: 'Combating hunger through meal drives, ration kits, cooked meal collaborations, and nutrition awareness programs to support underprivileged communities.'
    }
  ];

  return (
    <div>
      <Navbar />
      <HeroSection 
        Tittle={"Our Work Areas"} 
        Heading={"We work across diverse sectors including education, healthcare, women and child welfare, rural development, environmental sustainability, and disaster relief—creating lasting impact through grassroots action and community-driven solutions."} 
        Banner={`${Banner}`} 
      />
      
      <div style={containerStyle}>
        <div style={gridStyle}>
          {workItems.map((item, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <React.Fragment key={item.id}>
                {/* Image Box */}
                <div 
                  style={imgBoxStyle(item.image, isEven)}
                  role="img"
                  aria-label={`${item.title} work area illustration`}
                />
                
                {/* Text Box */}
                <div style={{
                  ...textBoxStyle(item.bgColor, isEven),
                  background: item.bgColor,
                }}>
                  <h3 style={headingStyle(item.headingColor)}>
                    {item.title}
                  </h3>
                  <p style={paragraphStyle}>
                    {item.description}
                  </p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
      
      <Footer />
      
      {/* Add responsive CSS styles */}
      <style jsx>{`
        @media (max-width: 767px) {
          .work-container {
            padding: 1.5rem 0.5rem;
          }
        }
        
        @media (min-width: 768px) and (max-width: 1023px) {
          .work-container {
            padding: 2.5rem 1rem;
          }
        }
        
        @media (min-width: 1024px) {
          .work-container {
            padding: 3rem 1rem;
          }
        }
        
        /* Smooth scrolling for better UX */
        html {
          scroll-behavior: smooth;
        }
        
        /* Loading animation */
        .work-item {
          animation: fadeInUp 0.6s ease-out;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Focus styles for accessibility */
        .work-item:focus {
          outline: 3px solid #ff9935;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
};

export default OurWorkArea;