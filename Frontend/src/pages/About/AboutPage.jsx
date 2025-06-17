import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import HeroSection from "../../components/HeroSection/HeroSection";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Who_We_Are_Img from '../../assets/images/gallery/23.jpg'
import Banner_img from '../../assets/images/banners/banner_2.jpg';
import { useInView } from "react-intersection-observer";
import Ankit from "../../assets/images/leaders/ankit.jpg";
import Binit from "../../assets/images/leaders/binit.jpg"
import Avnish from "../../assets/images/leaders/avnish.jpg"
import Anand from "../../assets/images/leaders/anand.jpg"

import "./AboutPage.css";

const AboutPage = () => {
  // Animation for elements when they come into view
  const [missionRef, missionInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
 
  const [historyRef, historyInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [valuesRef, valuesInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [teamRef, teamInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [impactRef, impactInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [awardsRef, awardsInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [ctaRef, ctaInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // Timeline data
  const timelineData = [
    {
      year: "2010",
      title: "Our Beginning",
      text: "Vishu Welfare Association was established by a group of passionate individuals committed to making a difference in underserved communities across India."
    },
    {
      year: "2013",
      title: "First Education Initiative",
      text: "Launched our first education program, reaching over 500 children in rural areas with access to quality learning materials and dedicated teachers."
    },
    {
      year: "2015",
      title: "Healthcare Outreach",
      text: "Established mobile medical clinics that brought essential healthcare services to remote villages, providing care to thousands of individuals."
    },
    {
      year: "2018",
      title: "Women Empowerment Center",
      text: "Opened a dedicated center for women's skill development and entrepreneurship training, empowering hundreds of women to achieve financial independence."
    },
    {
      year: "2020",
      title: "COVID-19 Relief Work",
      text: "Mobilized rapid response teams to provide essential supplies, medical support, and livelihood assistance during the pandemic."
    },
    {
      year: "2023",
      title: "National Expansion",
      text: "Expanded operations to 15 states across India, partnering with over 50 organizations to maximize our collective impact."
    }
  ];

  // Core values data
  const valuesData = [
    {
      icon: "fas fa-heart",
      title: "Education & Skill Development",
      text: "Operating schools, colleges, vocational and coaching centers, especially for economically weaker sections, women, and children."
    },
    {
      icon: "fas fa-balance-scale",
      title: "	Women & Child Welfare",
      text: "Supporting widows, orphans, and women through training programs, self-employment schemes, crèches, and shelter homes."
    },
    {
      icon: "fas fa-users",
      title: "Healthcare & Hygiene",
      text: "Running charitable hospitals, health camps, old age homes, and wellness programs to improve public health and hygiene."
    },
    {
      icon: "fas fa-leaf",
      title: "Environmental Protection",
      text: "Promoting afforestation, social forestry, water conservation, and eco-awareness campaigns in both rural and urban communities."
    },
    {
      icon: "fas fa-leaf",
      title: "Rural Empowerment & Livelihood",
      text: "Providing training and employment opportunities in agriculture, handicrafts, animal husbandry, and cottage industries."
    },
    {
      icon: "fas fa-leaf",
      title: "	Youth & Cultural Development",
      text: "Encouraging sports, cultural activities, leadership programs, and national integration efforts among youth."
    }
  ];

  // Team data
 const teamData = [
    {
      name: "Ankit Gupta",
      position: "Founder & CEO",
      image: `${Ankit}`,
     
    },
    {
      name: "Awneesh Yadav",
      position: "Founder & CEO",
      image:`${Avnish}`,
     
    },
    {
      name: "Binit Kumar",
      position: "Head CSR & Skilling",
      image: `${Binit}`,
     
    },
    {
      name: "Anand Pandey",
      position: "Head Corporate Relations",
      image: `${Anand}`,
     
    }
  ];

  // Impact data
  const impactData = [
    {
      number: "100,000+",
      title: " Education & Literacy",
      text: "Supporting schools, vocational training, and adult education to empower minds and futures."
    },
    {
      number: "50+",
      title: "Healthcare & Hygiene",
      text: "Running health camps, charitable clinics, and awareness programs for better public health."
    },
    {
      number: "15",
      title: " Women & Child Welfare",
      text: "Promoting safety, skill development, and support systems for women, widows, and children."
    },
    {
      number: "500+",
      title: "Environment & Rural Development",
      text: "Encouraging afforestation, clean water access, and sustainable livelihoods in rural areas."
    }
  ];

  // Awards data
  const awardsData = [
    {
      icon: "fas fa-trophy",
      title: "Social Impact Award",
      organization: "National NGO Forum",
      year: "2022",
      description: "Recognized for outstanding contribution to education in rural areas."
    },
    {
      icon: "fas fa-star",
      title: "Excellence in Community Service",
      organization: "Chamber of Commerce",
      year: "2021",
      description: "Honored for our comprehensive COVID-19 relief initiatives."
    },
    {
      icon: "fas fa-award",
      title: "Women Empowerment Champion",
      organization: "Ministry of Social Justice",
      year: "2020",
      description: "Acknowledged for our innovative programs supporting women's financial independence."
    }
  ];

  return (
    <>
      <Navbar /> 
      <div className="about-page">
        {/* Hero section */}
        <HeroSection Tittle={'About Our Organization'} Heading={"Vishu Welfare Association is a registered non-profit organization based in Delhi, driven by a singular mission—to uplift lives and build stronger, self-reliant communities across India."}  Banner = {`${Banner_img}`}/>

        {/* Mission Section */}
        <section className="about-mission-section" ref={missionRef}>
          <Container>
            <Row className="align-items-center">
              <Col lg={5}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={missionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="mission-image"
                >
                  <img src={Who_We_Are_Img} alt="Our Mission" />
                  <div className="mission-image-shape"></div>
                </motion.div>
              </Col>
              <Col lg={7}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }} 
                  animate={missionInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <span className="section-subheading">Who We Are</span>
                  <h2 className="section-heading">Our Mission & Vision</h2>
                  <p className="mission-text">
                    At Vishu Welfare Association, our mission is to empower marginalized communities through sustainable development initiatives that address fundamental needs in education, healthcare, livelihood, and environmental sustainability.
                  </p>
                  <p className="mission-text">
                    We envision a society where every individual has equal access to opportunities, resources, and rights, enabling them to live with dignity and reach their full potential. Our approach combines grassroots engagement with strategic partnerships to create lasting positive change.
                  </p>
                  <div className="mission-highlight">
                    "Transforming lives, building communities, and creating sustainable futures through compassionate action and collaborative efforts."
                  </div>
                  <p className="mission-text">
                    Since our founding in 2010, we have worked tirelessly to implement programs that create meaningful impact. Our dedicated team of professionals and volunteers works closely with communities to develop solutions that are effective, culturally sensitive, and sustainable.
                  </p>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* History Timeline Section */}
        <section className="history-section" ref={historyRef}>
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center mb-5">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={historyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <span className="section-subheading">Our Journey</span>
                  <h2 className="section-heading">Our History</h2>
                 
                  <p className="mission-text">
                    Explore the key milestones in our organization's journey as we've grown and expanded our impact over the years.
                  </p>
                </motion.div>
              </Col>
            </Row>

            <div className="timeline-container">
              {timelineData.map((item, index) => (
                <motion.div
                  key={index}
                  className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={historyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="timeline-content">
                    <span className="timeline-year">{item.year}</span>
                    <h3 className="timeline-title">{item.title}</h3>
                    <p className="timeline-text">{item.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Core Values Section */}
        <section className="values-section" ref={valuesRef}>
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center mb-5">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <span className="section-subheading">Our Values, Our Foundation</span>
                  <h2 className="section-heading">Our Core Values</h2>
                 
                  <p className="mission-text">
                    At Vishu Welfare Association, our core values reflect our mission to serve with compassion, integrity, and inclusivity. We believe in creating equal opportunities for all, especially for marginalized and underprivileged communities. 
                                      </p>
                </motion.div>
              </Col>
            </Row>

            <div className="values-container">
              <Row style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', marginTop: '20px'
                  }}>
                {valuesData.map((value, index) => (
                  <Col lg={3} md={6} key={index} style={{marginTop: '20px'
                  }}>
                    <motion.div
                      className="value-card"
                      initial={{ opacity: 0, y: 30 }}
                      animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="value-icon">
                        <i className={value.icon}></i>
                      </div>
                      <h3 className="value-title">{value.title}</h3>
                      <p className="value-text">{value.text}</p>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>

 {/* Impact Section */}
        <section className="impact-section" ref={impactRef}>
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={impactInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
               <span className="section-subheading">Transforming Lives Through Focused Action</span>
              <h2 className="impact-heading">Our Focus Areas</h2>
               <p className="mission-text" style={{marginBottom: '20px'}}>
   Vishu Welfare Association focuses on key areas that drive meaningful change—education, healthcare, women and child welfare, rural development, environmental sustainability, youth empowerment, and disaster relief. Each initiative is community-driven and aimed at creating lasting, inclusive impact.
                                      </p>
            </motion.div>

            <Row  style={{marginTop: '20px'}}>
              {impactData.map((item, index) => (
                <Col md={3} sm={6} key={index}>
                  <motion.div
                    className="impact-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={impactInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <div className="impact-number">{item.number}</div>
                    <h3 className="impact-title">{item.title}</h3>
                    <p className="impact-text">{item.text}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        {/* Team Section */}
        <section className="team-section" ref={teamRef}>
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center mb-5">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                  <span className="section-subheading">Meet Our Team</span>
                  <h2 className="section-heading">Leadership Team</h2>
               
                  <p className="mission-text">
                    Our dedicated leadership team brings diverse expertise and a shared commitment to our mission.
                  </p>
                </motion.div>
              </Col>
            </Row>

            <div className="team-grid">
              <Row>
                {teamData.map((member, index) => (
                  <Col lg={3} md={6} key={index}>
                    <motion.div
                      className="team-card"
                      initial={{ opacity: 0, y: 30 }}
                      animate={teamInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="team-image-container">
                        <img src={member.image} alt={member.name} className="team-image" />
                        <div className="team-overlay">
                          <div className="team-social">
                           
                          </div>
                        </div>
                      </div>
                      <div className="team-info">
                        <h3 className="team-name">{member.name}</h3>
                        <span className="team-position">{member.position}</span>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </div>
          </Container>
        </section>    
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;