import React from 'react'

const Footer = () => {
  return (
   <footer> 
  <div className="footer-top">
    <div className="ft-top">  
      <div className="container">
        <div className="row no-gutters justify-content-center">
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="ftt-item">
              <div className="ftt-inner">
                <div className="ftt-thumb">
                  <img
                    src="./src/assets/images/footer/icon/01.png"
                    alt="footer-icon"
                  />
                </div>
                <div className="ftt-content">
                  <p className="mb-0">Phone Number : 9891915598</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="ftt-item">
              <div className="ftt-inner">
                <div className="ftt-thumb">
                  <img
                    src="./src/assets/images/footer/icon/02.png"
                    alt="footer-icon"
                  />
                </div>
                <div className="ftt-content">
                  <p className="mb-0">Email :connect@vishu.org.in</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <div className="ftt-item">
              <div className="ftt-inner">
                <div className="ftt-thumb">
                  <img
                    src="./src/assets/images/footer/icon/03.png"
                    alt="footer-icon"
                  />
                </div>
                <div className="ftt-content">
                  <p className="mb-0">Address :   A -25 sector-59 Noida, Uttar Pradesh, India </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="ft-bottom">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget widget-about">
                  <h5 className="title text-uppercase">Vishu-Welfare-Association</h5>
                  <p>
                     Vishu Welfare Association is igniting change—empowering lives with education, healing, and hope, one act of compassion at a time.
                  </p> 
                  <div className="ftb-map">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7618735328406!2d77.36283868302387!3d28.606919712968107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce557e6cc86cb%3A0x508ab9aee5024096!2sSmartBrains%20Engineers%20and%20Technologist%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1749924715305!5m2!1sen!2sin"
                      allowFullScreen=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="footer-widget widget-blog">
                  <h5 className="title text-uppercase">our Recent news</h5>
                  <ul className="footer-blog">
                    <li>
                      <div className="thumb">
                        <a href="blog-single.html">
                          <img
                            src="./src/assets/images/footer/blog1.png"
                            alt="footer"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <a href="blog-single.html">
                          Enable Seamin Matera Forin And Our Orthonal Create
                          Vortals.
                        </a>
                        <span>July 23, 2021</span>
                      </div>
                    </li>
                    <li>
                      <div className="thumb">
                        <a href="blog-single.html">
                          <img
                            src="./src/assets/images/footer/blog2.png"
                            alt="footer"
                          />
                        </a>
                      </div>
                      <div className="content">
                        <a href="blog-single.html">
                          Dynamca Network Otuitive Catays For Plagiarize
                          Mindshare After
                        </a>
                        <span>July 23, 2021</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 pl-xl-4">
                <div className="footer-widget widgt-form">
                  <h5 className="title text-uppercase">Programs & Services</h5>
                  <p>
                   Empowering lives through focused programs in education, health, and sustainable development.
                  </p>
                  <form className="footer-form">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      name="email"
                    />
                    <button type="submit">
                      <span>
                        send massage
                        <i className="far fa-paper-plane ml-2" />
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="container">
      <div className="text-center ">

        <p className="mb-0">
          © 2021 <a href="/">Vishu-Welfare-Association</a> - Best For Charity 
        </p>
       
      </div>
      
      
    </div>
  </div>
</footer>

  )
}

export default Footer