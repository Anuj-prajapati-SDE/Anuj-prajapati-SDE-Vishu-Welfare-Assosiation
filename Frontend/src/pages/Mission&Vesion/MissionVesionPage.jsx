import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useInView } from 'react-intersection-observer';
import VisionImg from '../../assets/images/gallery/44.jpg'
import Banner from '../../assets/images/banners/banner_4.jpg'
import MissionImg from '../../assets/images/gallery/27.jpg'
import './MissionVisionPage.css';
import HeroSection from '../../components/HeroSection/HeroSection';

export const MissionVesionPage = () => {
  // Animation for elements when they come into view
  const [headerRef, headerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [missionRef, missionInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [visionRef, visionInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [valuesRef, valuesInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [goalsRef, goalsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Core values data
  const coreValues = [
    {
      icon: 'fas fa-hand-holding-heart',
      title: 'Compassion',
      description: 'We approach our work with empathy and understanding, recognizing the dignity and worth of every individual.'
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'Integrity',
      description: 'We uphold the highest standards of accountability, transparency, and ethical conduct in all our actions.'
    },
    {
      icon: 'fas fa-users',
      title: 'Inclusivity',
      description: 'We serve all communities without discrimination, ensuring equitable access to resources and opportunities.'
    },
    {
      icon: 'fas fa-seedling',
      title: 'Sustainability',
      description: 'We develop long-term solutions that create lasting positive impact for communities and the environment.'
    }
  ];

  // Mission pillars
  const missionPillars = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Education',
      description: 'Educating the underserved, from young children to adults, through schools, coaching centers, and literacy initiatives.'
    },
    {
      icon: 'fas fa-heartbeat',
      title: 'Healthcare',
      description: 'Providing accessible healthcare through charitable hospitals, mobile medical units, and public health awareness campaigns.'
    },
    {
      icon: 'fas fa-hands-helping',
      title: 'Empowerment',
      description: 'Uplifting women and children by offering shelter, vocational training, and protective services that foster independence.'
    },
    {
      icon: 'fas fa-leaf',
      title: 'Sustainable Development',
      description: 'Promoting green technologies, water conservation, afforestation, and self-employment in agriculture and handicrafts.'
    },
    {
      icon: 'fas fa-child',
      title: 'Youth Engagement',
      description: 'Nurturing young talents through sports, leadership, and cultural exchange programs for nation-building.'
    },
    {
      icon: 'fas fa-hands',
      title: 'Disaster Response',
      description: 'Offering immediate relief and long-term rehabilitation to those affected by natural disasters and emergencies.'
    }
  ];

  // Strategic goals
  const strategicGoals = [
    {
      number: '01',
      title: 'Reach 100,000 beneficiaries',
      timeline: 'By 2026',
      description: 'Scale our programs to impact one hundred thousand lives across India through our various initiatives.'
    },
    {
      number: '02',
      title: 'Establish 15 education centers',
      timeline: 'By 2027',
      description: 'Create sustainable learning environments in underserved communities to empower through education.'
    },
    {
      number: '03',
      title: 'Partner with 50 organizations',
      timeline: 'Ongoing',
      description: 'Build strategic collaborations with other NGOs, governmental bodies, and corporate partners for greater impact.'
    },
    {
      number: '04',
      title: 'Achieve carbon neutrality',
      timeline: 'By 2028',
      description: 'Implement sustainable practices across all our operations and offset our carbon footprint.'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="mission-vision-page">
        {/* Hero Banner Section */}
         <HeroSection Tittle={"Mission & Vision"} Heading={"Our guiding principles drive every step of our work at Vishu Welfare Association. Rooted in compassion, equity, and community empowerment, they shape how we serve and support those in need. These values guide us toward building a future where sustainable development and human dignity go hand in hand—creating lasting change across communities in India."} Banner={`${Banner}`}/>

        {/* Mission Section */}
        <section className="mission-section" ref={missionRef}>
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={missionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="mission-image"
                >
                  <img src={MissionImg} alt="Our Mission" />
                  <div className="mission-image-shape"></div>
                </motion.div>
              </Col>
              <Col lg={7}>
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={missionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="mission-content"
                >
                  <h2 className="section-heading">Our Mission</h2>
              
                  <p className="mission-intro">
                    At <strong>Vishu Welfare Association</strong>, our mission is to empower marginalized 
                    and vulnerable communities by enabling access to basic human rights—education, 
                    healthcare, livelihood, safety, and dignity.
                  </p>
                  <p className="mission-subtext">
                    We are committed to driving holistic and inclusive development through 
                    sustainable initiatives that create lasting impact.
                  </p>
                  
                  <div className="pillars-wrapper">
                    <Row>
                      {missionPillars.map((pillar, index) => (
                        <Col md={6} key={index}>
                          <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={missionInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                            className="mission-pillar"
                          >
                            <div className="pillar-icon">
                              <i className={pillar.icon}></i>
                            </div>
                            <div className="pillar-content">
                              <h3>{pillar.title}</h3>
                              <p>{pillar.description}</p>
                            </div>
                          </motion.div>
                        </Col>
                      ))}
                    </Row>
                  </div> 
           
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Vision Section */}
        <section className="vision-section" ref={visionRef}>
          <Container>
            <Row className="align-items-center">
              <Col lg={7} className="order-lg-1 order-2">
                <motion.div 
                  initial={{ opacity: 0, x: -30 }}
                  animate={visionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="vision-content"
                >
                  <h2 className="section-heading">Our Vision</h2>
                
                  
                  
                  
                  <p className="vision-description">
                    We envision an India where every child has access to quality education, 
                    every person has healthcare within reach, women and marginalized communities 
                    are empowered, and sustainable development uplifts rural areas.
                  </p>
                  
                  <div className="vision-highlights">
                    <div className="vision-highlight">
                      <div className="highlight-icon">
                        <i className="fas fa-lightbulb"></i>
                      </div>
                      <div className="highlight-content">
                        <h4>Innovation</h4>
                        <p>Pioneering creative solutions to complex social challenges</p>
                      </div>
                    </div>
                    
                    <div className="vision-highlight">
                      <div className="highlight-icon">
                        <i className="fas fa-handshake"></i>
                      </div>
                      <div className="highlight-content">
                        <h4>Collaboration</h4>
                        <p>Building partnerships that amplify our collective impact</p>
                      </div>
                    </div>
                    
                    <div className="vision-highlight">
                      <div className="highlight-icon">
                        <i className="fas fa-chart-line"></i>
                      </div>
                      <div className="highlight-content">
                        <h4>Sustainability</h4>
                        <p>Creating lasting change through self-sustaining initiatives</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Col>
              <Col lg={5} className="order-lg-2 order-1">
                <motion.div 
                  initial={{ opacity: 0, x: 30 }}
                  animate={visionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="vision-image"
                >
                  <img src={VisionImg} alt="Our Vision" />
                  <div className="vision-image-shape"></div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Core Values Section */}
        <section className="core-values-section" ref={valuesRef}>
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="section-heading">Our Core Values</h2>
                  <div className="section-underline mx-auto"></div>
                  <p className="values-intro">
                    These fundamental principles guide our actions, decisions, and relationships 
                    as we work toward fulfilling our mission and vision.
                  </p>
                </motion.div>
              </Col>
            </Row>
            
            <Row className="values-row">
              {coreValues.map((value, index) => (
                <Col lg={3} md={6} key={index}>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    className="value-card"
                  >
                    <div className="value-icon">
                      <i className={value.icon}></i>
                    </div>
                    <h3>{value.title}</h3>
                    <p>{value.description}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

      </div>
      <Footer />
    </>
  );
}
