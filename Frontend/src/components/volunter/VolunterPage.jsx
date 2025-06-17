import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import HeroSection from '../HeroSection/HeroSection'
import sonali from "../../assets/images/volunteer/sonali.jpg"
import tamana from "../../assets/images/volunteer/tamana.jpg"
import nitesh from "../../assets/images/volunteer/nitesh.jpg"
import babita from "../../assets/images/volunteer/babita.jpg"
import ankush from "../../assets/images/volunteer/ankush.jpg";
import shakshi from "../../assets/images/volunteer/Shakshi .jpg"
import dhruv from "../../assets/images/volunteer/dhruv.jpg"
import anuj from "../../assets/images/volunteer/anuj.jpg"
import deepak from "../../assets/images/volunteer/Deepak Kumar.jpg"
import nilesh from "../../assets/images/volunteer/Nilesh Dhavan.jpg"
import banner from "../../assets/images/banners/become-volunter2.jpg"


const VolunterPage = () => {
  const imgStyle = {
  height: '400px',
  width: '100%',
  objectFit: 'cover'
};
const imgStyle2 = {
  height: '200px',
  width: '100%',
  objectFit: 'cover'
};
  return (
    
    <>
    <Navbar></Navbar>
    <HeroSection Tittle={'Become a Volunteer'} Heading={'Join Vishu Welfare Association as a volunteer and be a part of meaningful change. Whether you’re a student, professional, or retiree, your time and skills can bring hope to those in need. From teaching and organizing health camps to supporting environmental drives and community outreach, every effort counts.'} Banner={banner}/>
    {/* ==========Banner Section Ends Here========== */}
    {/* ==========Volunter Section Starts Here========== */}
    <>
  {/* ==========volunteer Section Starts Here========== */}
  <section
    className="volunteer-section padding-top padding-bottom bg_img"
    data-background="assets/images/bg/volunteer-bg.jpg"
  >
    <div className="container">
      <div className="row justify-content-center mb-30-none">
        <div className="col-xl-4 col-sm-6">
          <div className="volunteer-item-2">
            <div className="volunteer-thumb">
              <div className="thumb">
                <a href="volunteer-single.html">
                  <img src={sonali} alt="volunteer" style={imgStyle} />
                </a>
              </div>
              <div className="content pos-rel">
                <h5 className="title">
                  <a href="volunteer-single.html">Sonali</a>
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
        <div className="col-xl-4 col-sm-6">
          <div className="volunteer-item-2">
            <div className="volunteer-thumb">
              <div className="thumb">
                <a href="volunteer-single.html">
                  <img src={tamana} alt="volunteer" style={imgStyle}/>
                </a>
              </div>
              <div className="content pos-rel">
                <h5 className="title">
                  <a href="volunteer-single.html">Tamana</a>
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
        <div className="col-xl-4 col-sm-6">
          <div className="volunteer-item-2">
            <div className="volunteer-thumb">
              <div className="thumb">
                <a href="volunteer-single.html">
                  <img src={nitesh} alt="volunteer" style={imgStyle}/>
                </a>
              </div>
              <div className="content pos-rel">
                <h5 className="title">
                  <a href="volunteer-single.html">Nitesh</a>
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
  </section>
  {/* ==========volunteer Section Ends Here========== */}
  {/* ==========volunteer Section Starts Here========== */}
  <section className="volunteer-section padding-bottom padding-top">
    <div className="container">
      <div className="row mb-30-none justify-content-center">
        <div className="col-lg-6">
          <div className="volunteer-item">
            <div className="volunteer-inner">
              <div className="volunteer-thumb">
                <div className="thumb-inner">
                  <a href="volunteer-single.html">
                    <img src={babita} alt="volunteer"  style={imgStyle2}/>
                  </a>
                </div>
              </div>
              <div className="volunteer-content">
                <h6 className="title">
                  <a href="volunteer-single.html">Babita Maurya</a>
                </h6>
                <span className="info">Volunteer</span>
                <p>
                  Babita Maurya served as a passionate volunteer, working alongside an inspiring team to support impactful initiatives and make a positive difference in the community.
                </p>
                <ul className="volunteer-social">
                  <li>
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="vimeo">
                      <i className="fab fa-vimeo-v" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="behance">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="volunteer-item">
            <div className="volunteer-inner">
              <div className="volunteer-thumb">
                <div className="thumb-inner">
                  <a href="volunteer-single.html">
                    <img src={ankush} alt="volunteer" style={imgStyle2}/>
                  </a>
                </div>
              </div>
              <div className="volunteer-content">
                <h6 className="title">
                  <a href="volunteer-single.html">Ankush</a>
                </h6>
                <span className="info">Volunteer</span>
                <p>
                  Ankush served as a dedicated volunteer, contributing his time and efforts to support community-driven initiatives and team activities with enthusiasm and commitment.
                </p>
                <ul className="volunteer-social">
                  <li>
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="vimeo">
                      <i className="fab fa-vimeo-v" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="behance">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="volunteer-item">
            <div className="volunteer-inner">
              <div className="volunteer-thumb">
                <div className="thumb-inner">
                  <a href="volunteer-single.html">
                    <img src={shakshi} alt="volunteer" style={imgStyle2}/>
                  </a>
                </div>
              </div>
              <div className="volunteer-content">
                <h6 className="title">
                  <a href="volunteer-single.html">Shakshi</a>
                </h6>
                <span className="info">Volunteer</span>
                <p>
                  Shakshi volunteered with dedication and a strong sense of purpose, supporting key activities and working as a valuable part of the team.
                </p>
                <ul className="volunteer-social">
                  <li>
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="vimeo">
                      <i className="fab fa-vimeo-v" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="behance">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="volunteer-item">
            <div className="volunteer-inner">
              <div className="volunteer-thumb">
                <div className="thumb-inner">
                  <a href="volunteer-single.html">
                    <img src={anuj} alt="volunteer"  style={imgStyle2}/>
                  </a>
                </div>
              </div>
              <div className="volunteer-content">
                <h6 className="title">
                  <a href="volunteer-single.html">Anuj Prajapati</a>
                </h6>
                <span className="info">Volunteer</span>
                <p>
                  Anuj was a reliable and dedicated volunteer, always ready to help with a calm and focused attitude. His steady support made a meaningful difference in every activity he joined.
                </p>
                <ul className="volunteer-social">
                  <li>
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="vimeo">
                      <i className="fab fa-vimeo-v" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="behance">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="volunteer-item">
            <div className="volunteer-inner">
              <div className="volunteer-thumb">
                <div className="thumb-inner">
                  <a href="volunteer-single.html">
                    <img src={deepak} alt="volunteer" style={imgStyle2} />
                  </a>
                </div>
              </div>
              <div className="volunteer-content">
                <h6 className="title">
                  <a href="volunteer-single.html">Deepak Kumar</a>
                </h6>
                <span className="info">Volunteer</span>
                <p>
                  Deepak Kumar brought energy and dedication to every task. His proactive attitude and team spirit made him a key part of every successful initiative he supported.
                </p>
                <ul className="volunteer-social">
                  <li>
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="vimeo">
                      <i className="fab fa-vimeo-v" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="behance">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="volunteer-item">
            <div className="volunteer-inner">
              <div className="volunteer-thumb">
                <div className="thumb-inner">
                  <a href="volunteer-single.html">
                    <img src={nilesh} alt="volunteer" style={imgStyle2}  />
                  </a>
                </div>
              </div>
              <div className="volunteer-content">
                <h6 className="title">
                  <a href="volunteer-single.html">Nilesh Dhavan</a>
                </h6>
                <span className="info">Volunteer</span>
                <p>
                  Nilesh Dhavan was a thoughtful and dependable volunteer, always ready to contribute with sincerity and care. His quiet commitment and team-first mindset made a lasting impact.
                </p>
                <ul className="volunteer-social">
                  <li>
                    <a href="#" className="facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="pinterest">
                      <i className="fab fa-pinterest-p" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="vimeo">
                      <i className="fab fa-vimeo-v" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="behance">
                      <i className="fab fa-behance" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ==========volunteer Section Ends Here========== */}
</>

    <Footer></Footer>

    </>
  )
}

export default VolunterPage