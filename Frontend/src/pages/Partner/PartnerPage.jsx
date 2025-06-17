import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useInView } from 'react-intersection-observer';
import './PartnerPage.css';
import HeroSection from '../../components/HeroSection/HeroSection';
import banner from "../../assets/images/banners/become-partner.jpg"

const PartnerPage = () => {
  // Animation for elements when they come into view
  const [heroRef, heroInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [whyRef, whyInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [typesRef, typesInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [storiesRef, storiesInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [formRef, formInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [faqRef, faqInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const [ctaRef, ctaInView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    partnershipType: '',
    message: '',
    acceptTerms: false
  });

  // State for FAQ dropdowns
  const [activeFaq, setActiveFaq] = useState(null);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log(formData);
    alert('Thank you for your interest in partnering with us! We will contact you soon.');
  };

  // Toggle FAQ answers
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Benefits of partnership data
  const benefits = [
    {
      icon: 'fas fa-hands-helping',
      title: 'Expand Your Impact',
      text: 'Leverage our established network and expertise to amplify your social impact initiatives and reach vulnerable communities more effectively.'
    },
    {
      icon: 'fas fa-bullhorn',
      title: 'Enhanced Visibility',
      text: 'Gain recognition through our communications channels, events, and reports, showcasing your commitment to positive social change.'
    },
    {
      icon: 'fas fa-lightbulb',
      title: 'Innovative Solutions',
      text: 'Collaborate on developing creative approaches to complex social challenges by combining our respective strengths and perspectives.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Measurable Outcomes',
      text: 'Benefit from our robust monitoring and evaluation systems to demonstrate the tangible impact of your social responsibility investments.'
    },
    {
      icon: 'fas fa-users',
      title: 'Network Access',
      text: 'Connect with our diverse network of stakeholders, including government agencies, corporate partners, and community organizations.'
    },
    {
      icon: 'fas fa-handshake',
      title: 'Customized Engagement',
      text: 'We tailor partnerships to align with your specific goals, resources, and capacity, ensuring mutual benefit and sustainable collaboration.'
    }
  ];

  // Partnership types data
  const partnershipTypes = [
    {
      title: 'Corporate Partnerships',
      subtitle: 'Strategic CSR & Impact Initiatives',
      features: [
        'Employee engagement opportunities',
        'Cause-related marketing campaigns',
        'Skill-based volunteering programs',
        'Impact reporting and stakeholder communications',
        'CSR strategy development and implementation'
      ]
    },
    {
      title: 'Institutional Partnerships',
      subtitle: 'Research, Policy & Systems Change',
      features: [
        'Joint research projects and policy advocacy',
        'Knowledge exchange and capacity building',
        'Resource sharing and technical assistance',
        'Collaborative program design and implementation',
        'Cross-sectoral convening and network building'
      ]
    },
    {
      title: 'Community Partnerships',
      subtitle: 'Grassroots Collaboration & Mobilization',
      features: [
        'Community-based program implementation',
        'Local leadership development',
        'Resource mobilization for community initiatives',
        'Participatory planning and decision-making',
        'Sustainable community-owned solutions'
      ]
    }
  ];

  // Success stories data
  const successStories = [
    {
      title: 'Education Access Initiative',
      partner: 'In partnership with TechCorp India',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      text: 'Through this corporate partnership, we established 5 digital learning centers reaching 2,500+ students in rural areas.',
      quote: 'Partnering with Vishu Welfare Association helped us translate our CSR vision into tangible educational impact.',
      author: {
        name: 'Ravi Mehta',
        position: 'CSR Head, TechCorp India',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
      }
    },
    {
      title: 'Women Empowerment Program',
      partner: 'In partnership with State Government',
      image: 'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      text: 'Our institutional partnership led to a statewide skills development program that has trained 3,000 women and helped establish 750+ micro-enterprises.',
      quote: 'The collaborative approach of Vishu Welfare Association has been instrumental in scaling our women empowerment initiatives.',
      author: {
        name: 'Sunita Patel',
        position: 'Director, Women Development Dept.',
        image: 'https://images.unsplash.com/photo-1629747387925-6905ff5a558a?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
      }
    },
    {
      title: 'Clean Water Initiative',
      partner: 'In partnership with Local Communities',
      image: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      text: 'Working directly with 15 village councils, we implemented community-managed clean water systems serving 20,000+ residents.',
      quote: 'The participatory approach ensured that our community took ownership of the project, making it truly sustainable.',
      author: {
        name: 'Harish Singh',
        position: 'Village Council Leader',
        image: 'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
      }
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: 'What types of organizations can partner with Vishu Welfare Association?',
      answer: 'We welcome partnerships with a wide range of entities including corporations, foundations, government agencies, academic institutions, NGOs, and community-based organizations. Our flexible partnership framework can accommodate organizations of various sizes and sectors.'
    },
    {
      question: 'How long do partnerships typically last?',
      answer: 'Partnership durations vary based on objectives and project scope. We engage in short-term collaborations for specific initiatives (3-6 months), medium-term projects (1-2 years), and long-term strategic partnerships (3+ years). We work with each partner to determine the appropriate timeframe.'
    },
    {
      question: 'What resources are required to become a partner?',
      answer: 'Partnerships can involve various resources including financial support, in-kind donations, volunteer time, technical expertise, or shared infrastructure. We tailor partnership requirements to match organizational capacity and mutual goals, ensuring they are sustainable for all parties involved.'
    },
    {
      question: 'How do you measure partnership success?',
      answer: 'We establish clear metrics and evaluation frameworks at the outset of each partnership. These typically include quantitative measures (people served, services delivered, resources mobilized) and qualitative assessments (testimonials, case studies, social return on investment). We provide regular impact reports to partners.'
    },
    {
      question: 'Can we customize a partnership based on our specific interests?',
      answer: 'Absolutely! We pride ourselves on developing customized partnership models that align with your organizational priorities, values, and impact goals. Our team will work closely with you to design a collaboration that addresses your specific areas of interest and leverages your unique strengths.'
    }
  ];

  return (
    <>
      <Navbar />
      <div className="partner-page">
        {/* Hero Banner Section */}
         <HeroSection Tittle={"Partner With Us"} Heading={" Join hands with Vishu Welfare Association to create meaningful, sustainable impact through strategic partnerships that leverage our collective strengths and resources."} Banner={banner}></HeroSection>
  

        {/* Why Partner Section */}
        <section className="why-partner-section" ref={whyRef}>
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center mb-5">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={whyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                   <span className="section-subheading">The Impact of Partnering With Vishu Welfare Association</span>
                  <h2 className="section-heading">Why Partner With Us?</h2>
             
                  <p className="section-text">
                    Collaborating with Vishu Welfare Association offers unique opportunities to amplify your social impact, engage stakeholders, and contribute to lasting positive change in communities across India.
                  </p>
                </motion.div>
              </Col>
            </Row>

            <Row>
              {benefits.map((benefit, index) => (
                <Col lg={4} md={6} key={index} style={{ marginBottom: '20px' }}>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={whyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                    className="benefit-card"

                  >
                    <div className="benefit-icon">
                      <i className={benefit.icon}></i>
                    </div>
                    <h3 className="benefit-title">{benefit.title}</h3>
                    <p className="benefit-text">{benefit.text}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

    

        {/* Success Stories Section */}
        <section className="success-stories-section" ref={storiesRef}>
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center mb-5">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={storiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                   <span className="section-subheading">Success Through Collaboration</span>
                  <h2 className="section-heading">Partner Success Stories</h2>
                 
                  <p className="section-text">
                    Discover how our collaborative partnerships have created measurable impact and transformative change in communities across India.
                  </p>
                </motion.div>
              </Col>
            </Row>

            <Row>
              {successStories.map((story, index) => (
                <Col lg={4} md={6} key={index}>
                  <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    animate={storiesInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
                    className="success-story-card"
                  >
                    <div className="success-story-image">
                      <img src={story.image} alt={story.title} />
                    </div>
                    <div className="success-story-content">
                      <h3 className="success-story-title">{story.title}</h3>
                      <span className="success-story-subtitle">{story.partner}</span>
                      <p className="success-story-text">{story.text}</p>
                      <div className="success-story-quote">{story.quote}</div>
                      <div className="success-story-author">
                        <div className="success-story-author-image">
                          <img src={story.author.image} alt={story.author.name} />
                        </div>
                        <div className="success-story-author-info">
                          <h4 className="success-story-author-name">{story.author.name}</h4>
                          <p className="success-story-author-position">{story.author.position}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="faq-section" ref={faqRef}>
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center mb-5">
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                >
                   <span className="section-subheading">Quick Answers to Common Questions</span>
                  <h2 className="section-heading">Frequently Asked Questions</h2>
               
                  <p className="section-text">
                    Find answers to common questions about partnering with Vishu Welfare Association.
                  </p>
                </motion.div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg={8}>
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8 }}
                  className="faq-wrapper"
                >
                  {faqs.map((faq, index) => (
                    <div className="faq-item" key={index}>
                      <div 
                        className={`faq-question ${activeFaq === index ? 'active' : ''}`}
                        onClick={() => toggleFaq(index)}
                      >
                        {faq.question}
                        {/* <i className={`fas fa-chevron-down ${activeFaq === index ? 'active' : ''}`}></i> */}
                      </div>
                      <div className={`faq-answer ${activeFaq === index ? 'active' : ''}`}>
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Call to Action Section */}
        <section className="partner-cta-section" ref={ctaRef}>
          <Container>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="partner-cta-content"
            >
              <h2 className="partner-cta-heading">Ready to Make a Difference Together?</h2>
              <p className="partner-cta-text">
                Join us in creating sustainable, transformative change that improves lives and builds stronger communities across India.
              </p>
              <div className="partner-cta-buttons">
                <a href="/contact" className="cta-btn secondary-btn">Contact Our Team</a>
              </div>
            </motion.div>
          </Container>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PartnerPage;
