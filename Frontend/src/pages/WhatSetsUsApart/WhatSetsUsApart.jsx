import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import HeroSection from '../../components/HeroSection/HeroSection';
import Banner from "../../assets/images/banners/banner_3.jpg"
import './WhatSetsUsApart.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const WhatSetsUsApart = () => {
  // Animation variant for sections
  const fadeIn = { 
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Counter animation for impact numbers
  useEffect(() => {
    const counters = document.querySelectorAll('.impact-counter .value');
    const speed = 200;

    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      
      const updateCount = () => {
        const increment = target / speed;
        
        if (count < target) {
          count += increment;
          counter.innerText = Math.ceil(count).toLocaleString();
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };
      
      updateCount();
    });
  }, []);

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <HeroSection Tittle={'What Sets Us Apart'} Heading={'Vishu Welfare Association stands out for its grassroots-driven, multi-sector approach—empowering communities through education, healthcare, sustainability, and rapid response. With a transparent, no-profit model and a powerful volunteer network, we create lasting change from the ground up.'}  Banner={`${Banner}`}/>
       
      {/* What Sets Us Apart Section */}
      <section className="what-sets-us-apart-section">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="cate">OUR UNIQUENESS</span>
            <h2>What Sets Us Apart</h2>
            <p>At Vishu Welfare Association, we are more than just a non-profit—we are a movement rooted in empathy, action, and long-term transformation. Here's what makes us stand out</p>
          </motion.div>
          
          <div className="key-differences">
            <div className="row">
              <motion.div 
                className="col-md-6 col-lg-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
              >
                <div className="difference-card">
                  <div className="icon">
                    <i className="fas fa-hands-helping"></i>
                  </div>
                  <h3>Holistic, Multi-Sectoral Approach</h3>
                  <p>Unlike many organizations focused on a single issue, we work across multiple development areas—education, healthcare, gender empowerment, environment, and rural development—creating interconnected solutions for long-lasting impact. Our projects are designed to address root causes, not just symptoms.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="col-md-6 col-lg-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                <div className="difference-card">
                  <div className="icon">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3>Grassroots-Driven and Community-Led</h3>
                  <p>We don’t impose—we co-create. Every initiative is shaped through direct community engagement, ensuring cultural relevance, ownership, and sustainability. We empower local leaders and volunteers to be agents of change within their own communities.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="col-md-6 col-lg-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.4 }}
              >
                <div className="difference-card">
                  <div className="icon">
                    <i className="fas fa-users"></i>
                  </div>
                  <h3>Transparent, No-Profit, No-Loss Model</h3>
                  <p>Vishu Welfare Association operates on a strictly no-profit, no-loss basis. Every rupee received is reinvested in the mission. We maintain transparent accounting, undergo regular audits, and share project updates with donors and stakeholders.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="col-md-6 col-lg-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.2 }}
              >
                <div className="difference-card">
                  <div className="icon">
                    <i className="fas fa-handshake"></i>
                  </div>
                  <h3>Nationwide Reach, Local Presence</h3>
                  <p>Though based in Delhi, our area of operation spans across India, including remote rural belts, tribal areas, and urban slums. Our on-ground teams and partnerships ensure we adapt our models to local needs.</p>
               
                </div>
              </motion.div>
              
              <motion.div 
                className="col-md-6 col-lg-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.4 }}
              >
                <div className="difference-card">
                  <div className="icon">
                    <i className="fas fa-lightbulb"></i>
                  </div>
                  <h3>Volunteer-Led Culture</h3>
                  <p>Our strength lies in our people-powered mission. We mobilize students, professionals, doctors, teachers, and social workers as volunteers, building a passionate, ethical, and service-minded force of changemakers.</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="col-md-6 col-lg-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ delay: 0.6 }}
              >
                <div className="difference-card">
                  <div className="icon">
                    <i className="fas fa-seedling"></i>
                  </div>
                  <h3>Focus on Sustainability & Self-Reliance</h3>
                  <p>We believe in teaching to fish, not giving the fish. Our training programs, livelihood projects, and eco-initiatives are designed to help beneficiaries become independent, confident, and sustainable in the long run.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values Section */}
      <section className="our-values">
        <div className="container" >
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
           
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="cate">OUR GUIDING PRINCIPLES</span>
            <h2>Core Values That Drive Us</h2>
            <p>These foundational principles guide every decision we make and every action we take in our mission to create positive change.</p>
          </motion.div>
          
          <div className="row">
            <motion.div 
              className="col-md-4"
              initial="hidden"
              whileInView="visible"
                style={{ marginTop: '20px' }}
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="value-card">
                <div className="icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h4>Compassion</h4>
                <p>We approach our work with genuine care and empathy for those we serve, recognizing the dignity and worth of every individual.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-md-4"
              initial="hidden"
                style={{ marginTop: '20px' }}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="value-card">
                <div className="icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <h4>Integrity</h4>
                <p>We hold ourselves to the highest standards of honesty, transparency, and ethical conduct in all our operations and relationships.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-md-4"
              initial="hidden"
                style={{ marginTop: '20px' }}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              <div className="value-card">
                <div className="icon">
                  <i className="fas fa-globe"></i>
                </div>
                <h4>Inclusivity</h4>
                <p>We celebrate diversity and ensure that our programs and services are accessible and beneficial to all, regardless of background or circumstances.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-md-4"
              initial="hidden"
                style={{ marginTop: '20px' }}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="value-card">
                <div className="icon">
                  <i className="fas fa-medal"></i>
                </div>
                <h4>Excellence</h4>
                <p>We pursue excellence in everything we do, continuously learning, improving, and striving to exceed expectations in our service delivery.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-md-4"
              initial="hidden"
                style={{ marginTop: '20px' }}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              <div className="value-card">
                <div className="icon">
                  <i className="fas fa-hands"></i>
                </div>
                <h4>Collaboration</h4>
                <p>We believe in the power of partnership and teamwork, working together with communities, supporters, and stakeholders to achieve shared goals.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-md-4"
              initial="hidden"
                style={{ marginTop: '20px' }}
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.6 }}
            >
              <div className="value-card">
                <div className="icon">
                  <i className="fas fa-sync-alt"></i>
                </div>
                <h4>Adaptability</h4>
                <p>We are flexible and responsive to changing needs and circumstances, continuously evolving our approaches to meet new challenges effectively.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Approach Section */}
      <section className="our-approach">
        <div className="container">
          <div className="row align-items-center">
            <motion.div 
              className="col-lg-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="approach-image">
                <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Our Approach" />
              </div>
            </motion.div>
            
            <motion.div 
              className="col-lg-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="approach-content">
                <h3>Our Transformative Approach</h3>
                <p>At Vishu Welfare Association, we believe in sustainable development that empowers communities from within. Our holistic approach addresses root causes rather than symptoms, creating lasting change.</p>
                
                <ul className="approach-list">
                  <li>Community-led needs assessment and program design</li>
                  <li>Skill development and capacity building</li>
                  <li>Local resource mobilization and management</li>
                  <li>Cross-sector partnerships for comprehensive solutions</li>
                  <li>Rigorous monitoring and evaluation systems</li>
                  <li>Knowledge sharing and continuous improvement</li>
                </ul>
                
                <p>This approach has proven effective across our various initiatives, creating self-reliant communities that continue to thrive long after our programs conclude.</p>
                
                <Link to="/mission-vesion" className="approach-btn">Learn More About Our Mission</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Impact Section */}
      {/* <section className="our-impact">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="cate">OUR ACHIEVEMENTS</span>
            <h2>The Impact We've Created</h2>
            <p>Numbers tell only part of the story. Behind each statistic are real lives transformed and communities revitalized.</p>
          </motion.div>
          
          <div className="row">
            <motion.div 
              className="col-6 col-md-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="impact-counter">
                <div className="value" data-target="10000">0</div>
                <div className="label">Lives Impacted</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-6 col-md-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="impact-counter">
                <div className="value" data-target="500">0</div>
                <div className="label">Children Educated</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-6 col-md-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              <div className="impact-counter">
                <div className="value" data-target="150">0</div>
                <div className="label">Projects Completed</div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-6 col-md-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.6 }}
            >
              <div className="impact-counter">
                <div className="value" data-target="50">0</div>
                <div className="label">Communities Served</div>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="impact-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ delay: 0.4 }}
          >
            <p>Our work has brought about meaningful and measurable change in the lives of thousands of people across multiple communities. We've helped improve access to education, healthcare, clean water, and sustainable livelihoods while empowering individuals to lead the change they want to see.</p>
            <Link to="/donate" className="cta-btn">Support Our Cause</Link>
          </motion.div>
        </div>
      </section> */}
      
      {/* Testimonials Section */}
      {/* <section className="testimonials">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="cate">WHAT OTHERS SAY</span>
            <h2>Testimonials from Our Partners</h2>
            <p>Hear from our partners and stakeholders about their experiences working with us.</p>
          </motion.div>
          
          <div className="row">
            <motion.div 
              className="col-md-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="testimonial-item">
                <div className="testimonial-content">
                  "Working with Vishu Welfare Association has been an incredible experience. Their dedication to sustainable development and their innovative approach to community empowerment has created lasting change in areas where traditional methods have failed. Their team's passion and professionalism make them a standout organization in the social sector."
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-author-img">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Testimonial Author" />
                  </div>
                  <div className="testimonial-author-info">
                    <h5>Rajiv Sharma</h5>
                    <span>Director, Community Development Agency</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-md-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="testimonial-item">
                <div className="testimonial-content">
                  "The Vishu Welfare Association team brings a level of commitment and expertise that truly sets them apart. Their focus on measurable outcomes and sustainable impact ensures that resources are used effectively and efficiently. We've seen first-hand how their programs transform not just individuals but entire communities."
                </div>
                <div className="testimonial-author">
                  <div className="testimonial-author-img">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Testimonial Author" />
                  </div>
                  <div className="testimonial-author-info">
                    <h5>Meenakshi Patel</h5>
                    <span>Corporate Social Responsibility Lead</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
      
      {/* Awards & Recognitions Section */}
      {/* <section className="awards">
        <div className="container">
          <motion.div 
            className="section-title"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <span className="cate">AWARDS & RECOGNITION</span>
            <h2>Our Achievements</h2>
            <p>We're honored to be recognized for our work and commitment to social welfare.</p>
          </motion.div>
          
          <div className="row">
            <motion.div 
              className="col-6 col-md-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="award-item">
                <div className="award-logo">
                  <i className="fas fa-award fa-4x" style={{ color: '#92278f' }}></i>
                </div>
                <div className="award-info">
                  <h4>Excellence in Social Impact</h4>
                  <p>National NGO Awards 2022</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-6 col-md-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <div className="award-item">
                <div className="award-logo">
                  <i className="fas fa-certificate fa-4x" style={{ color: '#92278f' }}></i>
                </div>
                <div className="award-info">
                  <h4>Community Service Award</h4>
                  <p>State Government, 2023</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-6 col-md-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.4 }}
            >
              <div className="award-item">
                <div className="award-logo">
                  <i className="fas fa-trophy fa-4x" style={{ color: '#92278f' }}></i>
                </div>
                <div className="award-info">
                  <h4>Innovation in Education</h4>
                  <p>Education Forum 2021</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="col-6 col-md-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ delay: 0.6 }}
            >
              <div className="award-item">
                <div className="award-logo">
                  <i className="fas fa-medal fa-4x" style={{ color: '#92278f' }}></i>
                </div>
                <div className="award-info">
                  <h4>Sustainable Development</h4>
                  <p>Environmental Council 2024</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}
      
      
      
      <Footer />
    </>
  );
};

export default WhatSetsUsApart;
