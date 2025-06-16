import React, { useEffect } from 'react';
import '../../assets/css/maintenance-page.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const UnderMaintenancePage = () => {
  // Animation effect for progress bar
  useEffect(() => {
    const progressBar = document.querySelector('.progress-bar');
    if (progressBar) {
      setTimeout(() => {
        progressBar.style.width = '75%';
      }, 300);
    }
    
    // Countdown effect
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 1); // 24 hours from now
    
    const countdownTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      const hoursElement = document.getElementById('hours');
      const minutesElement = document.getElementById('minutes');
      const secondsElement = document.getElementById('seconds');
      
      if (hoursElement && minutesElement && secondsElement) {
        hoursElement.innerHTML = hours.toString().padStart(2, '0');
        minutesElement.innerHTML = minutes.toString().padStart(2, '0');
        secondsElement.innerHTML = seconds.toString().padStart(2, '0');
      }
      
      if (distance < 0) {
        clearInterval(countdownTimer);
      }
    }, 1000);
    
    return () => clearInterval(countdownTimer);
  }, []);

  return (
    <>
      <Navbar />
      {/* ==========Under Maintenance Section Starts Here========== */}
      <section className="maintenance-section min-height-section">
        <div className="container">
          <div className="maintenance-wrapper">
            <div className="main-thumb">
              <img src="assets/images/under-maintenance.svg" alt="Under Maintenance" />
            </div>
            <div className="maintenance-content">
              <h3 className="title">Site Under Maintenance</h3>
              <p>We are currently enhancing our website to serve you better. Thank you for your patience as we work to improve your experience with Vishu Welfare Association.</p>
              
              <div className="maintenance-countdown">
                <div className="countdown-wrapper">
                  <h4>Coming Back In:</h4>
                  <div className="countdown">
                    <div className="count-item">
                      <div className="count-value" id="hours">24</div>
                      <div className="count-label">Hours</div>
                    </div>
                    <div className="count-item">
                      <div className="count-value" id="minutes">00</div>
                      <div className="count-label">Minutes</div>
                    </div>
                    <div className="count-item">
                      <div className="count-value" id="seconds">00</div>
                      <div className="count-label">Seconds</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="maintenance-progress">
                <div className="progress">
                  <div className="progress-bar theme-two-bg" role="progressbar" style={{width: '0%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p className="progress-text"><span className="theme-two">75%</span> Complete</p>
              </div>
              
              <div className="maintenance-info">
                <div className="info-item">
                  <i className="fas fa-clock theme-two"></i>
                  <p>Expected completion: <span className="theme-two">24 hours</span></p>
                </div>
                <div className="info-item">
                  <i className="fas fa-envelope theme-two"></i>
                  <p>Contact us: <span className="theme-two">support@vishuwelfare.org</span></p>
                </div>
              </div>
              
              <div className="maintenance-social">
                <p>Stay connected with us:</p>
                <ul className="social-icons">
                  <li><a href="#" className="facebook"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#" className="twitter"><i className="fab fa-twitter"></i></a></li>
                  <li><a href="#" className="instagram"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#" className="linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
              
              <a href="/" className="custom-button">
                <span>Back to Home</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Under Maintenance Section Ends Here========== */}
      <Footer />
    </>
  );
};

export default UnderMaintenancePage;
