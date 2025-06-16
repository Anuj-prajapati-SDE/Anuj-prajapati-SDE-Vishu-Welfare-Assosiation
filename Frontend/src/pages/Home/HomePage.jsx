import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { motion } from "framer-motion";
import {
  BannerImageSrc,
  FeatureBgImage1Src,
  FeatureIcon1Src,
  FeatureIcon2Src,
  FeatureIcon3Src,
  FeatureIcon4Src,
  Help1Icon_1,
  Help1Icon_2,
  Help1Icon_3,
  CausesImage1Src,
  CausesImage2Src,
  CausesImage3Src,
  TestimonialBGImageSrc,
  TestimonialImage1Src,
  TestimonialImage2Src,
  TestimonialIconSrc,
  ProjectImage1Src,
  ProjectImage2Src,
  ProjectImage3Src,
  ProjectImage4Src,
  FaqsImage1Src,
  FaqsImage2Src,
  CounterImage1Src,
  CounterImage2Src,
  CounterImage3Src,
  CounterImage4Src,
  CounterImage5Src,
  TeamImage1Src,
  TeamImage2Src,
  TeamImage3Src,
  SponsorImage1Src,
  SponsorImage2Src,
  ClientImage1Src,
  ClientImage2Src,
  ClientImage3Src,
  ClientImage4Src,


} from "../../assets/images/index";
const HomePage = () => {
   const [isTextVisible, setIsTextVisible] = useState(false);

  const handleClick = () => {
    setIsTextVisible(!isTextVisible);
  };
  return (
    <>
      <Navbar></Navbar>

   {/* <!-- ==========Banner Section Starts Here========== --> */}
<section className="banner-section oh bg_img">
  <div className="container">
    <div className="d-flex justify-content-between flex-row-reverse">
      <div className="banner-thumb">
        <motion.img
          src={BannerImageSrc}
          alt="banner"
          className="bs-item"
          data-value={-2}
          style={{ height: 600, width: 790 }}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        />
      </div>
      <motion.div
        className="banner-content style-2"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="cate">Donate [&amp;] Helps</h3>
        <h1 className="title">
          Give <span className="theme-two">Helping</span> Hand For{" "}
          <span className="theme-two">Livelihood</span>
        </h1>
        <p>
          We provide the best latest technology of equipment and our staff are
          available in 24/7 at clients call.
        </p>
        <motion.a
          href="/donate"
          className="custom-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span>
            Donate Now
            <i className="fas fa-heart ml-2" />
          </span>
        </motion.a>
      </motion.div>
    </div>
  </div>
</section>
{/*  ==========Banner Section Ends Here========== */}

     {/* ==========Feature Section Start Here========== */}
<div className="feature-section style-2 padding-bottom padding-top pos-rel">
  <div className="bg-shape d-none d-lg-block">
    <motion.img
      src={FeatureBgImage1Src}
      alt="bg-shape"
      style={{ filter: "sepia(1) saturate(4) hue-rotate(365deg)" }}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    />
  </div>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-4">
        <motion.div
          className="section-header style-2 text-left"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="sh-top">
            <h6 className="cate">WHAT WE DO</h6>
            <h3 className="title text-uppercase">
              Empowerment, Sustainability, Wellbeing, Growth
            </h3>
          </div>
          <div className="sh-bottom">
            <p>
              At Vishu Foundation, we are dedicated to creating meaningful
              change at the grassroots level. Our mission is to uplift
              communities by focusing on four key areas: Education &amp;
              Livelihood, Plantation &amp; Environment, Healthcare, and Public
              Hygiene &amp; Sanitation.
            </p>
            <motion.a
              href="/donate"
              className="custom-button mt-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <span>
                Donate Now
                <i className="fas fa-heart ml-2" />
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="col-lg-8 pl-xl-70">
        <div className="row justify-content-center mb-30-none -mx-10">
          {[
            {
              icon: FeatureIcon1Src,
              category: "Education",
              title: "Education & Livelihood",
              description:
                "Empowering individuals through education and skills for self-reliance.",
              color: "#ffc600",
            },
            {
              icon: FeatureIcon2Src,
              category: "Health Care",
              title: "Health Awareness",
              description: "Making healthcare and hygiene accessible.",
              color: "#ff6f61",
            },
            {
              icon: FeatureIcon3Src,
              category: "Environment",
              title: "Plantation",
              description: "Promoting sustainability and eco-awareness.",
              color: "#4caf50",
            },
            {
              icon: FeatureIcon4Src,
              category: "Food",
              title: "Food for All",
              description:
                "We provide nutritious meals to those in need, ensuring no one goes hungry.",
              color: "#2196f3",
            },
          ].map((feature, index) => (
            <motion.div
              className="col-sm-6 col-12"
              key={index}
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="feature-item style-2">
                <div className="feature-inner">
                  <div className="feature-content">
                    <div className="feture-icon mb-4">
                      <img src={feature.icon} alt="" />
                    </div>
                    <span className="cate" style={{ color: feature.color }}>
                      {feature.category}
                    </span>
                    <h4 className="title">{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
{/* ==========Feature Section Ends Here========== */}

{/* ==========Helps Section Starts Here========== */}
<div className="helps-section">
  <div className="container-fluid p-lg-0">
    <div className="row no-gutters">
      <div className="col-xl-6 col-12">
        <div className="helps-left-part">
          <div className="row justify-content-xl-end justify-content-center no-gutters">
            <motion.div
              className="col-lg-6 col-sm-6 col-12"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="helps-item" style={{ height: 500 }}>
                <div className="helps-inner">
                  <div className="helps-content">
                    <div className="helps-icon mb-4">
                      <img src={Help1Icon_1} alt="" />
                    </div>
                    <h3>
                      100,000 <sup>+</sup>
                    </h3>
                    <h4 className="title">Our Total Students</h4>
                    <p>
                      Under the aegis of SmartBrains we have trained over
                      100,000 students.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-6 col-sm-6 col-12"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="helps-item" style={{ height: 500 }}>
                <div className="helps-inner">
                  <div className="helps-content">
                    <div className="helps-icon mb-4">
                      <img
                        src={Help1Icon_2}
                        alt="employment provided img"
                        style={{ height: 110, width: 110 }}
                      />
                    </div>
                    <h3>
                      67,000 <sup>+</sup>
                    </h3>
                    <h4 className="title">Employment Provided</h4>
                    <p>
                      We have successfully placed over 67,000 students in
                      various industries, helping them secure their future.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="col-xl-6 col-12"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div
          className="helps-right-part wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".1s"
          style={{ height: 500, width: "100%" }}
        >
          <div className="video-area">
            <img src={Help1Icon_3} alt="helps" />
            <motion.a
              href="https://www.youtube.com/embed/pRaWQjfO7pM"
              className="video-button popup"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <i className="flaticon-play" />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</div>
{/* ==========Helps Section Ends Here========== */}

      {/* ==========Causes Section Starts Here========== */}
<div className="causes-section style-2 padding-top padding-bottom">
  <div className="container">
    <div className="row justify-content-center">
      <motion.div
        className="col-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header text-left">
          <span className="cate">WE HELP AROUND THE WORLD</span>
          <h3 className="title text-uppercase">Introduce Our Campaigns</h3>
          <span className="causes-nav causes-prev">
            <i className="fas fa-arrow-left" />
          </span>
          <span className="causes-nav causes-next active">
            <i className="fas fa-arrow-right" />
          </span>
        </div>
      </motion.div>
    </div>
    <div className="causes-slider">
      {[
        {
          imageSrc: CausesImage1Src,
          category: "Plantation",
          title: "Plant for Tomorrow",
          description:
            "Join us in our mission to plant 10,000 trees by the end of this year. Your support can help combat climate change and create a greener future.",
          link: "/donate",
          current: "1500",
          target: "10000",
          percent: 15,
          colorSlice: "#FF9935",
        },
        {
          imageSrc: CausesImage2Src,
          category: "Education & Livelihood",
          title: "Educate to Elevate",
          description:
            "Help us provide quality education and vocational training to underprivileged children. Your contribution can change lives and build a brighter future.",
          link: "/donate",
          current: "67,000",
          target: "100,000",
          percent: 67,
          colorSlice: "#FF9935",
        },
        {
          imageSrc: CausesImage3Src,
          category: "Health Awareness",
          title: "A Healthier Us",
          description:
            "Join our campaign to provide healthcare services and awareness programs in underserved communities. Your support can help us reach more people and improve their health.",
          link: "/donate",
          current: "67,000",
          target: "100,000",
          percent: 67,
          colorSlice: "#6abcbe",
        },
      ].map((cause, index) => (
        <motion.div
          className="causes-item"
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          
        >
          <div className="causes-inner">
            <div className="causes-thumb">
              <img
                src={cause.imageSrc}
                alt="causes"
                style={{ height: 300, width: "100%" }}
              />
              <div className="causes-progress">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <div className="causes-pro-left text-center">
                    <h6>Currently</h6>
                    <h6>
                      <span>{cause.current}</span>
                    </h6>
                  </div>
                  <div className="causes-pro-mid">
                    <div className="text-center skill-item">
                      <div
                        className="pie"
                        data-pie={`{ "index": ${index + 1}, "round": true, "percent": ${cause.percent}, "colorSlice": "${cause.colorSlice}", "size": 60, "fontWeight": 700 }`}
                      ></div>
                    </div>
                  </div>
                  <div className="causes-pro-right text-center">
                    <h6>Target</h6>
                    <h6>
                      <span>{cause.target}</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="causes-content bg-white">
              <a
                href="/"
                className="causes-catagiry mb-2 text-uppercase"
                style={{ color: cause.colorSlice }}
              >
                {cause.category}
              </a>
              <h4 className="title mb-3">
                <a href="/">{cause.title}</a>
              </h4>
              <p>{cause.description}</p>
              <motion.a
                href={cause.link}
                className="custom-button mt-2"
                style={{ backgroundColor: cause.colorSlice }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span>
                  Donate Now
                  <i className="fas fa-heart ml-2" />
                </span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</div>
{/* ==========Causes Section Ends Here========== */}

      {/* ==========Clients Section Start Here========== */}
      <div
        className="clients-section style-2 padding-bottom padding-top bg_img mt-0"
        data-background={TestimonialBGImageSrc}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="section-header style-2 text-left">
                <div className="sh-top">
                  <span className="cate">our TESTIMONIALS</span>
                  <h3 className="title text-uppercase">
                    What People Say About Our Company
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="mb-30-none -mx-10">
                <div className="clients-slider2">
                  <div className="clients-item style-2">
                    <div className="clients-inner">
                      <div className="clients-review">
                        <div className="cr-top">
                          <div className="crt-head">
                            <div className="crth-left">
                              <img
                                src={TestimonialImage1Src}
                                alt="client icon"
                              />
                            </div>
                          </div>
                          <div className="crt-body">
                            <h4 className="title">
                              Holisticly plagiarize enterprisei deliverab
                              through team driven niche markets seamlessly
                              pursuese nteroperable is plagiarize enterprise
                              deliverab through team
                            </h4>
                          </div>
                        </div>
                        <div className="cr-bottom">
                          <div className="client-thumb">
                            <img
                              src={TestimonialImage1Src}
                              alt="clients"
                            />
                          </div>
                          <div className="client-info">
                            <h4 className="title">Bini Kabir</h4>
                            <span>UX Designer</span>
                            <span className="rating">
                              (
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clients-item style-2">
                    <div className="clients-inner">
                      <div className="clients-review">
                        <div className="cr-top">
                          <div className="crt-head">
                            <div className="crth-left">
                              <img
                                src={TestimonialIconSrc}
                                alt="client icon"
                              />
                            </div>
                          </div>
                          <div className="crt-body">
                            <h4 className="title">
                              Holisticly plagiarize enterprisei deliverab
                              through team driven niche markets seamlessly
                              pursuese nteroperable is plagiarize enterprise
                              deliverab through team
                            </h4>
                          </div>
                        </div>
                        <div className="cr-bottom">
                          <div className="client-thumb">
                            <img
                              src={TestimonialImage2Src}
                              alt="clients"
                            />
                          </div>
                          <div className="client-info">
                            <h4 className="title">John Harvard</h4>
                            <span>UX Designer</span>
                            <span className="rating">
                              (
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clients-item style-2">
                    <div className="clients-inner">
                      <div className="clients-review">
                        <div className="cr-top">
                          <div className="crt-head">
                            <div className="crth-left">
                              <img
                                src={TestimonialIconSrc}
                                alt="client icon"
                              />
                            </div>
                          </div>
                          <div className="crt-body">
                            <h4 className="title">
                              Holisticly plagiarize enterprisei deliverab
                              through team driven niche markets seamlessly
                              pursuese nteroperable is plagiarize enterprise
                              deliverab through team
                            </h4>
                          </div>
                        </div>
                        <div className="cr-bottom">
                          <div className="client-thumb">
                            <img
                              src={TestimonialImage1Src}
                              alt="clients"
                            />
                          </div>
                          <div className="client-info">
                            <h4 className="title">Bini Kabir</h4>
                            <span>UX Designer</span>
                            <span className="rating">
                              (
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="clients-item style-2">
                    <div className="clients-inner">
                      <div className="clients-review">
                        <div className="cr-top">
                          <div className="crt-head">
                            <div className="crth-left">
                              <img
                                src={TestimonialIconSrc}
                                alt="client icon"
                              />
                            </div>
                          </div>
                          <div className="crt-body">
                            <h4 className="title">
                              Holisticly plagiarize enterprisei deliverab
                              through team driven niche markets seamlessly
                              pursuese nteroperable is plagiarize enterprise
                              deliverab through team
                            </h4>
                          </div>
                        </div>
                        <div className="cr-bottom">
                          <div className="client-thumb">
                            <img
                              src={TestimonialImage2Src}
                              alt="clients"
                            />
                          </div>
                          <div className="client-info">
                            <h4 className="title">John Harvard</h4>
                            <span>UX Designer</span>
                            <span className="rating">
                              (
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />)
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==========Clients Section Ends Here========== */}
      {/* <!-- ==========Project Section Starts Here========== --> */}
      <div className="project-section style-2">
        <div className="container">
          <div className="row justify-content-center no-gutters">
            <div className="col-xl-3 col-sm-6 col-12"> 
              <div className="project-item style-2">
                <div className="project-inner mb-0">
                  <div className="project-thumb"> 
                    <img src={ProjectImage1Src} alt="project" />
                  </div>
                  <div className="project-content">
                    <a href="/education-livelihood">
                      <h4 className="title">Education & Livelihood</h4>
                    </a>
                    <a href="/education-livelihood " className="text-btn">
                      read more +
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="project-item style-2">
                <div className="project-inner mb-0">
                  <div className="project-thumb">
                    <img src={ProjectImage2Src} alt="project" />
                  </div>
                  <div className="project-content">
                    <a href="/health-awareness">
                      <h4 className="title">Health Awareness</h4>
                    </a>
                    <a href="/health-awareness" className="text-btn">
                      read more +
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="project-item style-2">
                <div className="project-inner mb-0">
                  <div className="project-thumb">
                    <img src={ProjectImage3Src} alt="project" />
                  </div>
                  <div className="project-content">
                    <a href="/plantation">
                      <h4 className="title">Plantation</h4>
                    </a>
                    <a href="/plantation" className="text-btn">
                      read more +
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="project-item style-2">
                <div className="project-inner mb-0">
                  <div className="project-thumb">
                    <img src={ProjectImage4Src} alt="project" />
                  </div>
                  <div className="project-content">
                    <a href="/food-for-poor-children">
                      <h4 className="title">Food For Poor Children</h4>
                    </a>
                    <a href="/food-for-poor-children" className="text-btn">
                      read more +
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- ==========Project Section Ends Here========== --> */}

      {/* ==========Faqs Section Starts Here========== */}
<section className="faqs-single-section pos-rel">
  <div className="abs-clients-thumb">
    <motion.img
      src={FaqsImage1Src}
      alt="abs-clients-thumb"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    />
  </div>
  <div className="container">
    <div className="row align-items-center flex-row-reverse">
      <motion.div
        className="col-xl-6"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="section-header text-left" style={{ paddingTop: 40 }}>
          <span className="cate">BECOME A VOLUNTEER</span>
          <h3 className="title text-uppercase">Why We Need You</h3>
        </div>
        <div className="faq-wrapper">
          {[
            {
              title: "Be the Bridge",
              content:
                "Reach the forgotten corners of India—where education, healthcare, and hope are still out of reach. Your presence can change that.",
              isActive: false,
            },
            {
              title: "Multiply the Mission",
              content:
                "Your time and talent aren't just helpful—they're transformative. One volunteer can spark a ripple effect across entire communities.",
              isActive: true,
            },
            {
              title: "Your Voice Matters",
              content:
                "You know your community better than anyone. Your insights help us tailor solutions that truly work on the ground.",
              isActive: false,
            },
            {
              title: "Lead the Change",
              content:
                "When you step up, others follow. Be the reason someone believes in a better tomorrow. Be the example that drives a movement.",
              isActive: false,
            },
          ].map((faq, index) => (
            <motion.div
              className={`faq-item ${faq.isActive ? "active" : ""}`}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="faq-title">
                <span className="right-icon"  onClick={handleClick} />
                <h5 className="title">{faq.title}</h5>
              </div>
              <div className="faq-content">
                <p>{faq.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="col-xl-6"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div
          className="faq-thumb wow fadeInUp"
          data-wow-duration="1s"
          data-wow-delay=".1s"
        >
          <div className="faq-abs-thumb">
            <motion.img
              src={FaqsImage2Src}
              alt="faq-abs-thumb"
              style={{ height: 557, width: "100%", marginTop: 10 }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>
{/* ==========Faqs Section Ends Here========== */}

      {/* =========Team Section Starts Here========== */}

      <div className="clients-section volunteer padding-top padding-bottom mt-0 pos-rel">
        <div className="abs-clients-thumb">
          <img src={TeamImage1Src} alt="abs-clients-thumb" />
        </div>
        <div className="container">
          <div className="section-wrapper">
            <div className="clents-left">
              <div className="cl-content-area">
                <div className="cl-content">
                  <h6 className="cate">Meet The Specialist Team</h6>
                  <h3 className="title">meet our volunter</h3>
                  <p>
                    Holisticly plagiarize enterprise deliverab through team
                    driven niche markets seamlessly pursuese nteroperable
                    "outside.
                  </p>
                  <a href="blog-grid.html" className="custom-button mt-2">
                    <span>
                      BECOME A VOLUNTEER <i className="fas fa-heart ml-2" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="clents-right">
              <div className="cr-head">
                <span className="clients-prev active">
                  <i className="fas fa-arrow-left" />
                </span>
                <span className="clients-next">
                  <i className="fas fa-arrow-right" />
                </span>
              </div>
              <div className="cr-body mb-15-none">
                <div className="clients-slider">
                  <div className="volunteer-item-2 m-3">
                    <div className="volunteer-thumb">
                      <div className="thumb">
                        <a href="volunteer-single.html">
                          <img
                            src={TeamImage2Src}
                            alt="volunteer"
                          />
                        </a>
                      </div>
                      <div className="content pos-rel">
                        <h5 className="title">
                          <a href="volunteer-single.html">Mr. Hemant</a>
                        </h5>
                        <span>Volunteer</span>
                      </div>
                    </div>
                    <div className="volunteer-content d-flex flex-wrap align-items-center justify-content-between px-4">
                      <ul className="volunteer-social justify-content-center">
                        <li>
                          <a href="#0" className="so-share">
                            <i className="fas fa-share-alt" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="google">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dribble">
                            <i className="fab fa-dribbble" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="vimeo">
                            <i className="fab fa-vimeo-v" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="pinterest">
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </li>
                      </ul>
                      <a href="#" className="vol-pro theme-three">
                        See Profile +
                      </a>
                    </div>
                  </div>
                  <div className="volunteer-item-2 m-3">
                    <div className="volunteer-thumb">
                      <div className="thumb">
                        <a href="volunteer-single.html">
                          <img
                            src={TeamImage3Src}
                            alt="volunteer"
                          />
                        </a>
                      </div>
                      <div className="content pos-rel">
                        <h5 className="title">
                          <a href="volunteer-single.html">Ms. Babita</a>
                        </h5>
                        <span>Volunteer</span>
                      </div>
                    </div>
                    <div className="volunteer-content d-flex flex-wrap align-items-center justify-content-between px-4">
                      <ul className="volunteer-social justify-content-center">
                        <li>
                          <a href="#0" className="so-share">
                            <i className="fas fa-share-alt" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="google">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dribble">
                            <i className="fab fa-dribbble" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="vimeo">
                            <i className="fab fa-vimeo-v" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="pinterest">
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </li>
                      </ul>
                      <a href="#" className="vol-pro">
                        See Profile +
                      </a>
                    </div>
                  </div>
                  <div className="volunteer-item-2 m-3">
                    <div className="volunteer-thumb">
                      <div className="thumb">
                        <a href="volunteer-single.html">
                          <img
                            src={TeamImage2Src}
                            alt="volunteer"
                          />
                        </a>
                      </div>
                      <div className="content pos-rel">
                        <h5 className="title">
                          <a href="volunteer-single.html">Mr. Ashish</a>
                        </h5>
                        <span>Volunteer</span>
                      </div>
                    </div>
                    <div className="volunteer-content d-flex flex-wrap align-items-center justify-content-between px-4">
                      <ul className="volunteer-social justify-content-center">
                        <li>
                          <a href="#0" className="so-share">
                            <i className="fas fa-share-alt" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="google">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dribble">
                            <i className="fab fa-dribbble" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="vimeo">
                            <i className="fab fa-vimeo-v" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="pinterest">
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </li>
                      </ul>
                      <a href="#" className="vol-pro theme-three">
                        See Profile +
                      </a>
                    </div>
                  </div>
                  <div className="volunteer-item-2 m-3">
                    <div className="volunteer-thumb">
                      <div className="thumb">
                        <a href="volunteer-single.html">
                          <img
                            src={TeamImage3Src}
                            alt="volunteer"
                          />
                        </a>
                      </div>
                      <div className="content pos-rel">
                        <h5 className="title">
                          <a href="volunteer-single.html">Ms. Deepanshi</a>
                        </h5>
                        <span>Volunteer</span>
                      </div>
                    </div>
                    <div className="volunteer-content d-flex flex-wrap align-items-center justify-content-between px-4">
                      <ul className="volunteer-social justify-content-center">
                        <li>
                          <a href="#0" className="so-share">
                            <i className="fas fa-share-alt" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="google">
                            <i className="fab fa-google-plus-g" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="dribble">
                            <i className="fab fa-dribbble" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="vimeo">
                            <i className="fab fa-vimeo-v" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="pinterest">
                            <i className="fab fa-pinterest-p" />
                          </a>
                        </li>
                      </ul>
                      <a href="#" className="vol-pro">
                        See Profile +
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==========Clients Section Ends Here========== */}

      {/* ==========Sponsor Section Ends Here========== */}
      <div
        className="sponsor-section padding-top padding-bottom bg_img"
        data-background=""
        style={{ backgroundColor: "#F6FDEF" }}
      >
        <div className="container">
          <div className="section-wrapper">
            <div className="sponsor-slider">
              <div className="sponsor-thumb">
                <img
                  src={SponsorImage1Src}
                  alt="sponsor"
                  style={{ width: 150, height: 50 }}
                />
              </div>
              <div className="sponsor-thumb">
                <img
                  src={SponsorImage2Src}
                  alt="sponsor"
                  style={{ width: 150, height: 50 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==========Sponsor Section Ends Here========== */}

      {/* ==========Clients Section Ends Here========== */}
      <div className="clients-section blog padding-bottom">
        <div className="container">
          <div className="section-wrapper">
            <div className="clents-left pos-rel">
              <div className="abs-clients-thumb">
                <img
                  src={ClientImage1Src}
                  alt="client thumb"
                />
              </div>
              <div className="cl-content-area">
                <div className="cl-content">
                  <h6 className="cate">WHAT`S NEW</h6>
                  <h3 className="title text-uppercase mb-xl-5">
                    Read Our Latest News And Blog Post
                  </h3>
                  
                </div>
              </div>
            </div>
            <div className="clents-right">
              <div className="cr-head">
                <p>
                  We offer security solutions and cost effective service for our
                  client are safe and secure in any situation.
                </p>
                <span className="clients-prev active">
                  <i className="fas fa-arrow-left" />
                </span>
                <span className="clients-next">
                  <i className="fas fa-arrow-right" />
                </span>
              </div>
              <div className="cr-body">
                <div className="clients-slider">
                  <div className="post-item p-3">
                    <div className="post-thumb">
                      <a href="blog-single.html">
                        <img src={ClientImage2Src} alt="blog" />
                      </a>
                    </div>
                    <div className="post-content">
                      <div className="post-top">
                        <span className="post-by d-inline-block mb-3">
                          By Admin March 24, 2021
                        </span>
                        <h4 className="title mb-0">
                          <a href="blog-single.html">
                            Empoer Extenve Chanels Extensve Globa Creat Method
                          </a>
                        </h4>
                      </div>
                      <div className="post-bottom">
                        <a href="blog-single.html" className="read">
                          Read More
                        </a>
                        <a href="#" className="comments">
                          <i className="far fa-comments" />{" "}
                          <span className="comment-number">25 Comments</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="post-item p-3">
                    <div className="post-thumb">
                      <a href="blog-single.html">
                        <img src={ClientImage3Src} alt="blog" />
                      </a>
                    </div>
                    <div className="post-content">
                      <div className="post-top">
                        <span className="post-by d-inline-block mb-3 theme-four">
                          By Admin March 24, 2021
                        </span>
                        <h4 className="title mb-0">
                          <a href="blog-single.html">
                            Quickly Respond on Your Device For Inspection
                          </a>
                        </h4>
                      </div>
                      <div className="post-bottom">
                        <a href="blog-single.html" className="read">
                          Read More
                        </a>
                        <a href="#" className="comments">
                          <i className="far fa-comments" />{" "}
                          <span className="comment-number">25 Comments</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="post-item p-3">
                    <div className="post-thumb">
                      <a href="blog-single.html">
                        <img src={ClientImage4Src} alt="blog" />
                      </a>
                    </div>
                    <div className="post-content">
                      <div className="post-top">
                        <span className="post-by d-inline-block mb-3 theme-color">
                          By Admin March 24, 2021
                        </span>
                        <h4 className="title mb-0">
                          <a href="blog-single.html">
                            Empoer Extenve Chanels Extensve Globa Creat Method
                          </a>
                        </h4>
                      </div> 
                      <div className="post-bottom">
                        <a href="blog-single.html" className="read">
                          Read More
                        </a>
                        <a href="#" className="comments">
                          <i className="far fa-comments" />{" "}
                          <span className="comment-number">25 Comments</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==========Clients Section Ends Here========== */}
      <Footer></Footer>
    </>
  );
};

export default HomePage;
