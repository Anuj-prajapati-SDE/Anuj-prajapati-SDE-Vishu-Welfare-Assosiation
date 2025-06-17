import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Banner from '../../assets/images/banners/banner_5.jpg';
import { useInView } from 'react-intersection-observer';
import './LeadershipPage.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import ashish from "../../assets/images/teams/ashish.jpg"
import ankit from "../../assets/images/teams/ankit.jpg"
import deepanshi from "../../assets/images/teams/deepanshi.jpg"

import binit from "../../assets/images/teams/binit.jpg"
import anand from "../../assets/images/teams/anand.jpg"
import avnish from "../../assets/images/leaders/avnish.jpg"

const LeaderShipPage = () => {


  const [introRef, introInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [executiveRef, executiveInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });



  // Executive team data
  const executiveTeam = [
    {
      name: "Ankit Gupta",
      position: "Founder & CEO",
      image: `${ankit}`,
      bio: "With over 20 + years of experience in non-profit leadership, Ankit Gupta has led transformative social initiatives across India. As the visionary Founder and CEO, he drives the organization’s mission and strategic direction with unwavering commitment and purpose.",
     
    },
    {
      name: "Avnish Yadav",
      position: "Founder & CEO",
      image: `${avnish}`,
      bio: "With over 20 + years of experience in non-profit leadership, Avnish Yadav has led transformative social initiatives across India. As the visionary Founder and CEO, he drives the organization’s mission and strategic direction with unwavering commitment and purpose.",
     
    },
    {
      name: "Binit Kumar",
      position: "Head CSR & Skilling",
      image: `${binit}`,
      bio: "With 15 Year of extensive experience in corporate social responsibility and skills development, Binit Kumar has played a pivotal role in driving impactful initiatives. As the Head of CSR & Skilling, he leads strategic programs that empower communities and foster sustainable growth.",
     
    },
    {
      name: "Anand Pandey",
      position: "Head Corporate Relations",
      image:`${anand}`,
      bio: "With over 12 years of expertise in corporate relations and strategic partnerships, Anand Pandey has successfully navigated the intersection of business and social impact. As Head of Corporate Relations, he builds meaningful collaborations that enhance corporate engagement and drive sustainable initiatives.",
     
    },
    {
      name: "Deepanshi Jain",
      position: "Head of Human Resources",
      image: `${deepanshi}`,
      bio: "Deepanshi Jain is a dynamic leader dedicated to fostering a positive and inclusive workplace culture. As the Head of Human Resources, she leads strategic initiatives that enhance employee engagement, organizational growth, and talent development.",
     
    },
    {
      name: "Ashish Mishra",
      position: "Technical Lead",
      image: `${ashish}`,
      bio: "As a skilled Technical Lead, Ashish Mishra drives innovation and efficiency in software development. He leads teams in delivering high-quality technical solutions, fostering collaboration, and implementing cutting-edge technologies to optimize performance and scalability.",
     
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