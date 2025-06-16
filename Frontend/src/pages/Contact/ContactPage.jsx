import React, { useRef, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import emailjs from 'emailjs-com' 
import HeroSection from '../../components/HeroSection/HeroSection'
import { ContactImage1Src,ContactImage2Src, ContactImage3Src, ContactImage4Src  } from '../../assets/images'

const ContactPage = () => {
  const form = useRef(null)
  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState(null)

  const sendEmail = (e) => { 
    e.preventDefault()
    setSending(true) 
    setSuccess(null)

    // Replace these values with your actual EmailJS service, template, and user IDs
    const SERVICE_ID = 'service_etm53gm'
    const TEMPLATE_ID = 'template_7bot9ob'
    const USER_ID = 'iGSMj9WgWrnMn2H18' // Or use public key

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
      .then(
        (result) => {
          setSuccess(true)
          setSending(false)
          form.current.reset()
        },
        (error) => {
          setSuccess(false)
          setSending(false)
        }
      )
  }

  return (
<>
  <Navbar/>
  <>
  <HeroSection Tittle={'Our Contact'} Heading={'Home - Contact'}/>
  {/* ==========Banner Section Ends Here========== */}
  {/* ==========Contact Section Starts Here========== */}
  <section className="contact-section padding-top padding-bottom">
    <div className="container">
      <div className="contact-form-area">
        <div className="row flex-row-reverse">
          <div className="col-lg-8 mb-5 mb-lg-0">
            <h4 className="title">Leave A Message</h4>
            {/* Success/Error message */}
            {success === true && (
              <div style={{ color: 'green', marginBottom: '15px' }}>
                Message sent successfully!
              </div>
            )}
            {success === false && (
              <div style={{ color: 'red', marginBottom: '15px' }}>
                Failed to send message. Please try again.
              </div>
            )}
            <form
              className="contact-form"
              id="contact_form_submit"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Name"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Your Email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Phone"
                  id="phone"
                  name="phone"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Subject"
                  id="subject"
                  name="subject"
                />
              </div>
              <div className="form-group w-100">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  defaultValue={""}
                  required
                />
              </div>
              <div className="form-group w-100 text-center">
                <button className="custom-button" disabled={sending}>
                  <span>{sending ? 'Sending...' : 'Send Message'}</span>
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="contact-wrapper">
              <div className="contact-item">
                <div className="contact-thumb">
                  <img src={ContactImage1Src} alt="contact" />
                </div>
                <div className="contact-content">
                  <h6 className="title">Office Address</h6>
                  <p>1201 park street, Fifth Avenue</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-thumb">
                  <img src={ContactImage2Src} alt="contact" />
                </div>
                <div className="contact-content">
                  <h6 className="title">Phone number</h6>
                  <p>+22698 745 632,02 982 745</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-thumb">
                  <img src={ContactImage3Src} alt="contact" />
                </div>
                <div className="contact-content">
                  <h6 className="title">Send email </h6>
                  <a href="mailto:info@gmail.com">yourmail@gmil.com</a>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-thumb">
                  <img src={ContactImage4Src} alt="contact" />
                </div>
                <div className="contact-content">
                  <h6 className="title">Our website</h6>
                  <a href="#">www.yoursitename@gmil.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ==========Contact Section Ends Here========== */}
  {/* ==========Map Section Starts Here========== */}
  <div className="map-section pos-rel">
    <div className="maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.7618735328406!2d77.36283868302387!3d28.606919712968107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce557e6cc86cb%3A0x508ab9aee5024096!2sSmartBrains%20Engineers%20and%20Technologist%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1749924715305!5m2!1sen!2sin"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex={0}
      />
    </div>
    
  </div>
</>

  <Footer/>
</>
  )
}

export default ContactPage