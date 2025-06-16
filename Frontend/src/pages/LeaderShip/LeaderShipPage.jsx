import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../assets/images/banners/banner_5.jpg';
import { useInView } from 'react-intersection-observer';
import './LeadershipPage.css';
import HeroSection from '../../components/HeroSection/HeroSection';

const LeaderShipPage = () => {
  // Animation for elements when they come into view
  const [headerRef, headerInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [introRef, introInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [executiveRef, executiveInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [advisoryRef, advisoryInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [joinRef, joinInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Executive team data
  const executiveTeam = [
    {
      name: "Ajay Verma",
      position: "President & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "With over 15 years of experience in non-profit leadership, Ajay has led transformative social initiatives across India. His vision drives our strategic direction.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      name: "Priya Sharma",
      position: "Director of Programs",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Priya oversees all program development and implementation, ensuring our initiatives create meaningful and measurable impact in communities.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      name: "Rahul Sinha",
      position: "Chief Financial Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "As CFO, Rahul ensures financial transparency and optimal resource utilization, allowing us to maximize our impact with available resources.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      name: "Neha Kapoor",
      position: "Director of Partnerships",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Neha builds strategic relationships with organizations, government bodies, and corporate partners to enhance our collective social impact.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      name: "Vikram Singh",
      position: "Director of Operations",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Vikram ensures that our day-to-day operations run smoothly, implementing systems that allow us to deliver consistently excellent service.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    },
    {
      name: "Meera Patel",
      position: "Head of Communications",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Meera leads our communications strategy, ensuring our message reaches those who need our services and those who can help support our mission.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "#"
      }
    }
  ];

  // Advisory board data
  const advisoryBoard = [
    {
      name: "Dr. Ramesh Kumar",
      position: "Public Health Advisor",
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Dr. Kumar brings expertise in public health policy and implementation, guiding our healthcare initiatives."
    },
    {
      name: "Anita Desai",
      position: "Education Specialist",
      image: "https://images.unsplash.com/photo-1544717305-996b815c338c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "With 20+ years in education reform, Anita advises on our educational programs and policy advocacy."
    },
    {
      name: "Rajiv Mehta",
      position: "Corporate Sustainability Expert",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Rajiv helps bridge our work with corporate social responsibility initiatives and sustainable development goals."
    },
    {
      name: "Sunita Rao",
      position: "Women Empowerment Advocate",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      bio: "Sunita guides our women-focused initiatives, ensuring they create genuine pathways to empowerment."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="leadership-page">
       

        <HeroSection Tittle={"Our Leadership Team"} Heading={"Meet the passionate leaders and visionaries behind Vishu Welfare Association—individuals who guide our mission, shape impactful strategies, and inspire every step we take toward building stronger, more compassionate communities across India."} Banner={`${Banner}`} ></HeroSection>
        {/* Introduction Section */}
        <section className="leadership-intro-section" ref={introRef}>
          <Container>
            <Row className="justify-content-center" >
              <Col lg={10}>
                <motion.div 
             className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={introInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                 <span className="section-subheading" >The Minds Behind the Mission</span>
                 <h2 className="team-heading">Visionary Leadership</h2>
                  
                  <p className="intro-text">
                    At Vishu Welfare Association, our leadership team brings together decades of combined experience in social development, corporate management, public policy, and grassroots activism. This diverse expertise enables us to approach complex social challenges with innovative, sustainable solutions.
                  </p>
                  <p className="intro-text">
                    Our leaders are united by a shared commitment to transparency, ethical governance, and community-centered decision making. They ensure that every initiative we undertake aligns with our core mission of creating an equitable society where every individual has the opportunity to thrive.
                  </p>
                  <div className="intro-highlight">
                    "Leadership is not about being in charge. It is about taking care of those in your charge."
                  </div>
                  <p className="intro-text">
                    Beyond their professional roles, our leadership team members are actively involved in the communities we serve—listening, learning, and collaborating with stakeholders to ensure our work remains relevant, impactful, and responsive to evolving needs.
                  </p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Executive Team Section */}
        <section className="executive-team-section" ref={executiveRef}>
          <Container>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={executiveInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <span className="section-subheading">Strategic Minds Behind the Movement</span>
              <h2 className="team-heading">Executive Team</h2>
              <p className="team-subheading" style={{ marginBottom: '2rem' }}>
                Our executive team brings together diverse expertise and a shared commitment to driving sustainable social change through innovative approaches.
              </p>
            </motion.div>
            
            <Row>
              {executiveTeam.map((member, index) => (
                <Col lg={4} md={6} key={index}>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={executiveInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                    className="executive-card"
                    style={{marginTop:"2rem"}}
                  >
                    <div className="executive-card-image">
                      <img src={member.image} alt={member.name} />
                      <div className="executive-card-overlay"></div>
                      <div className="executive-card-social">
                        <a href={member.social.linkedin} className="social-icon">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href={member.social.twitter} className="social-icon">
                          <i className="fab fa-twitter"></i>
                        </a>
                        <a href={member.social.email} className="social-icon">
                          <i className="far fa-envelope"></i>
                        </a>
                      </div>
                    </div>
                    <div className="executive-card-content">
                      <h3 className="executive-card-name">{member.name}</h3>
                      <span className="executive-card-position">{member.position}</span>
                      <div className="executive-card-divider"></div>
                      <p className="executive-card-bio">{member.bio}</p>
                    </div>
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
};

export default LeaderShipPage;