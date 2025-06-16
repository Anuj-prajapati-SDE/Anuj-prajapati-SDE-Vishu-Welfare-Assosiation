import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import HeroSection from '../../components/HeroSection/HeroSection'
import Banner from '../../assets/images/banners/banner_7.jpg'

const Careers = () => {
  const [activeTab, setActiveTab] = useState('openings');
  const [selectedJob, setSelectedJob] = useState(null);

  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#ffffff',
  };

  // Hero Stats Section
  const statsContainerStyle = {
    backgroundColor: 'linear-gradient(135deg, #0e2c53 0%, #1a3a6b 100%)',
    background: 'linear-gradient(135deg, #0e2c53 0%, #1a3a6b 100%)',
    padding: '4rem 1rem',
    color: 'white',
    textAlign: 'center',
  };

  const statsGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  };

  const statItemStyle = {
    padding: '1.5rem',
    borderRadius: '10px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'translateY(-5px)',
    },
  };

  // Values Section with Cards
  const valuesContainerStyle = {
    padding: '5rem 1rem',
    backgroundColor: '#f8f9fa',
  };

  const valuesGridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1400px',
    margin: '0 auto',
  };

  const valueCardStyle = (bgColor, textColor) => ({
    background: bgColor,
    padding: '3rem 2rem',
    borderRadius: '20px',
    textAlign: 'center',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    color: textColor,
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-10px) scale(1.02)',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    },
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, transparent 100%)',
      opacity: 0,
      transition: 'opacity 0.3s ease',
    },
    ':hover::before': {
      opacity: 1,
    },
  });

  // Timeline Section
  const timelineContainerStyle = {
    padding: '5rem 1rem',
    backgroundColor: 'white',
    position: 'relative',
  };

  const timelineStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    position: 'relative',
    '::before': {
      content: '""',
      position: 'absolute',
      left: '50%',
      top: 0,
      bottom: 0,
      width: '4px',
      background: '#ff9935',
      transform: 'translateX(-50%)',
    },
  };

  const timelineItemStyle = (isLeft) => ({
    display: 'flex',
    alignItems: 'center',
    marginBottom: '3rem',
    position: 'relative',
    flexDirection: isLeft ? 'row' : 'row-reverse',
    '@media (max-width: 768px)': {
      flexDirection: 'column',
      textAlign: 'center',
    },
  });

  const timelineContentStyle = (bgColor) => ({
    backgroundColor: bgColor,
    padding: '2rem',
    borderRadius: '15px',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
    width: '45%',
    position: 'relative',
    '@media (max-width: 768px)': {
      width: '90%',
    },
  });

  const timelineDotStyle = {
    width: '20px',
    height: '20px',
    backgroundColor: '#ff9935',
    borderRadius: '50%',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 2,
    border: '4px solid white',
    boxShadow: '0 0 0 4px #ff9935',
  };

  // Jobs Section with Modern Cards
  const jobsContainerStyle = {
    padding: '5rem 1rem',
    backgroundColor: '#f8f9fa',
  };

  const jobCardStyle = {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '2.5rem',
    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.3s ease',
    border: '1px solid #e8e8e8',
    position: 'relative',
    overflow: 'hidden',
    cursor: 'pointer',
    ':hover': {
      transform: 'translateY(-8px)',
      boxShadow: '0 15px 40px rgba(0, 0, 0, 0.15)',
    },
    '::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #ff9935, #0e2c53)',
    },
  };

  const modalStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '1rem',
  };

  const modalContentStyle = {
    backgroundColor: 'white',
    borderRadius: '20px',
    padding: '3rem',
    maxWidth: '600px',
    width: '100%',
    maxHeight: '80vh',
    overflowY: 'auto',
    position: 'relative',
  };

  // Data
  const stats = [
    { number: '500+', label: 'Team Members' },
    { number: '50+', label: 'Open Positions' },
    { number: '25+', label: 'Locations' },
    { number: '98%', label: 'Employee Satisfaction' },
  ];

  const values = [
    {
      icon: '🎯',
      title: 'Purpose-Driven',
      description: 'Every role contributes directly to our mission of creating positive social impact and transforming communities.',
      bgColor: 'linear-gradient(135deg, #ff9935 0%, #ffb366 100%)',
      textColor: 'white',
    },
    {
      icon: '🌱',
      title: 'Growth Mindset',
      description: 'We invest in your professional development with mentorship, training, and opportunities to lead meaningful projects.',
      bgColor: 'linear-gradient(135deg, #0e2c53 0%, #2a4a7a 100%)',
      textColor: 'white',
    },
    {
      icon: '🤝',
      title: 'Collaborative Spirit',
      description: 'Work in cross-functional teams where diverse perspectives drive innovation and creative problem-solving.',
      bgColor: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
      textColor: '#0e2c53',
    },
    {
      icon: '⚡',
      title: 'Innovation First',
      description: 'Embrace cutting-edge approaches to social challenges and be part of pioneering solutions that scale impact.',
      bgColor: 'linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)',
      textColor: '#0e2c53',
    },
  ];

  const journeySteps = [
    {
      step: '01',
      title: 'Application',
      description: 'Submit your application through our streamlined process.',
      bgColor: '#ff9935',
    },
    {
      step: '02',
      title: 'Screening',
      description: 'Initial review and phone/video screening with our HR team.',
      bgColor: '#0e2c53',
    },
    {
      step: '03',
      title: 'Interview',
      description: 'In-depth interviews with team leads and potential colleagues.',
      bgColor: '#ff9935',
    },
    {
      step: '04',
      title: 'Welcome',
      description: 'Comprehensive onboarding and integration into our mission.',
      bgColor: '#0e2c53',
    },
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Program Manager',
      department: 'Programs',
      location: 'Delhi, India',
      type: 'Full-time',
      experience: '5-7 years',
      salary: '₹8-12 LPA',
      description: 'Lead large-scale education and healthcare programs across multiple states. Drive strategy, manage budgets, and ensure program effectiveness.',
      skills: ['Program Management', 'Strategy Planning', 'Budget Management', 'Team Leadership'],
      requirements: [
        'Master\'s degree in relevant field',
        '5+ years in program management',
        'Experience in social sector',
        'Strong analytical and communication skills'
      ],
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
      experience: '3-5 years',
      salary: '₹6-10 LPA',
      description: 'Design intuitive digital experiences for our platform that connects donors, volunteers, and beneficiaries.',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      requirements: [
        'Bachelor\'s in Design or related field',
        'Portfolio showcasing UX/UI work',
        'Experience with design tools',
        'Understanding of accessibility principles'
      ],
    },
    {
      id: 3,
      title: 'Data Analyst',
      department: 'Impact & Analytics',
      location: 'Mumbai, India',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹5-8 LPA',
      description: 'Analyze program data to measure impact, create insights, and support evidence-based decision making.',
      skills: ['Python/R', 'SQL', 'Data Visualization', 'Statistical Analysis'],
      requirements: [
        'Degree in Statistics, Math, or related field',
        'Experience with data analysis tools',
        'Strong problem-solving skills',
        'Interest in social impact measurement'
      ],
    },
    
  ];

  const renderJobModal = () => {
    if (!selectedJob) return null;

    return (
      <div style={modalStyle} onClick={() => setSelectedJob(null)}>
        <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
          <button 
            onClick={() => setSelectedJob(null)}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: '#666',
            }}
          >
            ✕
          </button>
          
          <h2 style={{ color: '#0e2c53', marginBottom: '1rem' }}>{selectedJob.title}</h2>
          <div style={{ marginBottom: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.9rem', color: '#666' }}>
            <span>🏢 {selectedJob.department}</span>
            <span>📍 {selectedJob.location}</span>
            <span>⏰ {selectedJob.type}</span>
            <span>💰 {selectedJob.salary}</span>
          </div>
          
          <p style={{ lineHeight: '1.6', marginBottom: '2rem', color: '#333' }}>{selectedJob.description}</p>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#0e2c53', marginBottom: '1rem' }}>Required Skills</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {selectedJob.skills.map((skill, index) => (
                <span key={index} style={{
                  backgroundColor: '#ff9935',
                  color: 'white',
                  padding: '0.3rem 0.8rem',
                  borderRadius: '15px',
                  fontSize: '0.8rem',
                }}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ color: '#0e2c53', marginBottom: '1rem' }}>Requirements</h3>
            <ul style={{ paddingLeft: '1.2rem', color: '#666' }}>
              {selectedJob.requirements.map((req, index) => (
                <li key={index} style={{ marginBottom: '0.5rem' }}>{req}</li>
              ))}
            </ul>
          </div>
          
          <button style={{
            backgroundColor: '#ff9935',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '25px',
            border: 'none',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            width: '100%',
            transition: 'all 0.3s ease',
          }}>
            Apply for this Position
          </button>
        </div>
      </div>
    );
  };

  return (
    <div style={containerStyle}>
      <Navbar />
      <HeroSection 
        Tittle={"Shape the Future with Us"} 
        Heading={"Join our diverse team of changemakers, innovators, and passionate individuals who are redefining what it means to create lasting social impact through technology and community engagement."} 
        Banner={`${Banner}`} 
      />
      
      {/* Stats Section */}
      <div style={statsContainerStyle}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '3rem', fontWeight: '700', color:"#fff" }}>
            Join Our Growing Community
          </h2>
          <div style={statsGridStyle}>
            {stats.map((stat, index) => (
              <div key={index} style={statItemStyle}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: '700', color: '#ffd700' }}>
                  {stat.number}
                </div>
                <div style={{ fontSize: '1.1rem', marginTop: '0.5rem' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div style={valuesContainerStyle}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            color: '#0e2c53', 
            marginBottom: '3rem',
            fontWeight: '700',
          }}>
            Why Choose Us?
          </h2>
          <div style={valuesGridStyle}>
            {values.map((value, index) => (
              <div key={index} style={valueCardStyle(value.bgColor, value.textColor)}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{value.icon}</div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: value.textColor }}>
                  {value.title}
                </h3>
                <p style={{ fontSize: '1rem', lineHeight: '1.6', opacity: '0.9' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div style={timelineContainerStyle}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            color: '#0e2c53', 
            marginBottom: '4rem',
            fontWeight: '700',
          }}>
            Your Journey with Us
          </h2>
          <div style={{ position: 'relative' }}>
            {/* Timeline Line */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '4px',
              background: 'linear-gradient(to bottom, #ff9935, #0e2c53)',
              transform: 'translateX(-50%)',
              '@media (max-width: 768px)': {
                display: 'none',
              },
            }} />
            
            {journeySteps.map((step, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '4rem',
                position: 'relative',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                '@media (max-width: 768px)': {
                  flexDirection: 'column',
                  textAlign: 'center',
                },
              }}>
                {/* Timeline Dot */}
                <div style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '60px',
                  height: '60px',
                  backgroundColor: step.bgColor,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  fontSize: '1.2rem',
                  border: '4px solid white',
                  boxShadow: '0 0 0 4px rgba(0,0,0,0.1)',
                  zIndex: 2,
                  '@media (max-width: 768px)': {
                    position: 'relative',
                    left: 'auto',
                    top: 'auto',
                    transform: 'none',
                    marginBottom: '1rem',
                  },
                }}>
                  {step.step}
                </div>
                
                {/* Content */}
                <div style={{
                  backgroundColor: 'white',
                  padding: '2rem',
                  borderRadius: '15px',
                  boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
                  width: '40%',
                  marginLeft: index % 2 === 0 ? 0 : 'auto',
                  marginRight: index % 2 === 0 ? 'auto' : 0,
                  '@media (max-width: 768px)': {
                    width: '80%',
                    margin: '0 auto',
                  },
                }}>
                  <h3 style={{ color: '#0e2c53', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                    {step.title}
                  </h3>
                  <p style={{ color: '#666', lineHeight: '1.6' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Jobs Section */}
      <div style={jobsContainerStyle}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            textAlign: 'center', 
            fontSize: 'clamp(2rem, 5vw, 3rem)', 
            color: '#0e2c53', 
            marginBottom: '3rem',
            fontWeight: '700',
          }}>
            Open Positions
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
            gap: '2rem' 
          }}>
            {jobOpenings.map((job) => (
              <div 
                key={job.id} 
                style={jobCardStyle}
                onClick={() => setSelectedJob(job)}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                  <h3 style={{ color: '#0e2c53', fontSize: '1.3rem', fontWeight: '700' }}>
                    {job.title}
                  </h3>
                  <span style={{
                    backgroundColor: '#ff9935',
                    color: 'white',
                    padding: '0.3rem 0.8rem',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                  }}>
                    {job.type}
                  </span>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '1rem', 
                  marginBottom: '1rem',
                  fontSize: '0.9rem',
                  color: '#666',
                }}>
                  <span>🏢 {job.department}</span>
                  <span>📍 {job.location}</span>
                  <span>💰 {job.salary}</span>
                </div>
                
                <p style={{ 
                  color: '#333', 
                  lineHeight: '1.6', 
                  marginBottom: '1.5rem',
                  fontSize: '0.95rem',
                }}>
                  {job.description}
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {job.skills.slice(0, 3).map((skill, index) => (
                    <span key={index} style={{
                      backgroundColor: '#f0f0f0',
                      color: '#666',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '10px',
                      fontSize: '0.8rem',
                    }}>
                      {skill}
                    </span>
                  ))}
                  {job.skills.length > 3 && (
                    <span style={{ color: '#666', fontSize: '0.8rem' }}>
                      +{job.skills.length - 3} more
                    </span>
                  )}
                </div>
                
                <button style={{
                  backgroundColor: 'transparent',
                  color: '#ff9935',
                  border: '2px solid #ff9935',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '25px',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  width: '100%',
                  ':hover': {
                    backgroundColor: '#ff9935',
                    color: 'white',
                  },
                }}>
                  View Details & Apply
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        background: 'linear-gradient(135deg, #0e2c53 0%, #1a3a6b 100%)',
        padding: '5rem 1rem',
        textAlign: 'center',
        color: 'white',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem', fontWeight: '700', color: '#ff9935' }}>
            Don't See Your Role?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9', lineHeight: '1.6' }}>
            We're always looking for talented individuals who share our passion for social impact. 
            Send us your resume and let's explore how you can contribute to our mission.
          </p>
          <button style={{
            backgroundColor: '#ff9935',
            color: 'white',
            padding: '1rem 3rem',
            borderRadius: '30px',
            border: 'none',
            fontSize: '1.1rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            ':hover': {
              backgroundColor: '#e6822e',
              transform: 'translateY(-2px)',
            },
          }}>
            Send Us Your Resume
          </button>
        </div>
      </div>

      {renderJobModal()}
      <Footer />
      
      <style jsx>{`
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
        
        .career-item {
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
        }
        
        @media (max-width: 768px) {
          .timeline-line {
            display: none !important;
          }
          
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        button:focus {
          outline: 3px solid #ff9935;
          outline-offset: 2px;
        }
      `}</style>
    </div>
  );
};

export default Careers;