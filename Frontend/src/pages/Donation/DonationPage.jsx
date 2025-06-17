import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './DonationStyles.css';
import banner from "../../assets/images/banners/Donor.jpg"
import HeroSection from '../../components/HeroSection/HeroSection';

const DonationPage = () => {  const [donationAmount, setDonationAmount] = useState('1000');  // Set default to 1000
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [donorInfo, setDonorInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'India', 
    anonymous: false,
    message: ''
  });
  const [campaignType, setCampaignType] = useState('education');

  const handleDonorInfoChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonorInfo({
      ...donorInfo,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    setCustomAmount(e.target.value);
    setDonationAmount('custom');
  };

  const handleCampaignChange = (campaign) => {
    setCampaignType(campaign);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Process donation
    const finalAmount = donationAmount === 'custom' ? customAmount : donationAmount;
    console.log('Donation submitted:', {
      amount: finalAmount,
      paymentMethod,
      donorInfo,
      campaignType
    });
    // Here you would typically integrate with a payment gateway
    alert('Thank you for your generous donation! We will redirect you to payment processing.');
  };
  
  // Accordion functionality for FAQ section
  useEffect(() => {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        this.classList.toggle('active');
        const faqItem = this.parentElement;
        faqItem.classList.toggle('active');
      });
    });
    
    return () => {
      faqQuestions.forEach(question => {
        question.removeEventListener('click', function() {
          this.classList.toggle('active');
          const faqItem = this.parentElement;
          faqItem.classList.toggle('active');
        });
      });
    };
  }, []);

  return ( 
    <>
      <Navbar />
      <HeroSection Tittle={"Donation"} Heading={"Donate for an Empowered Future"} Banner={banner}/>
      
      {/* ==========Banner Section Starts Here========== */}
      {/* <section
        className="page-header bg_img"
        data-background="assets/images/banner/page-header.jpg"
      >
        <div className="container">
          <div className="page-header-content">
            <h1 className="title">Donate and Make a Difference</h1>
            <ul className="breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li>Donate</li>
            </ul>
          </div>
        </div>
      </section> */}
      {/* ==========Banner Section Ends Here========== */}

      {/* ==========Donation Section Starts Here========== */}
      <section className="donation-section padding-top padding-bottom">
        <div className="container">
          <div className="section-header">
            <span className="cate">YOUR SUPPORT MATTERS</span>
            <h3 className="title">Be the Reason Someone Smiles Today</h3>
            <p>Your generous contribution helps us continue our mission to empower communities through education, healthcare, environmental initiatives, and food programs.</p>
          </div>

          <div className="row">
            <div className="col-lg-8">
              <div className="donation-form-wrapper">
                <form className="donation-form" onSubmit={handleSubmit}>
                  <div className="form-group campaign-selection">
                    <h4>Select a Campaign</h4>                    <div className="campaign-options">
                      <div className={`campaign-option ${campaignType === 'education' ? 'selected' : ''}`} onClick={() => handleCampaignChange('education')}>
                        <div className="campaign-icon">
                          <i className="fas fa-book"></i>
                        </div>
                        <div className="campaign-details">
                          <h5>Education & Livelihood</h5>
                          <p>Support education and skill development</p>
                        </div>
                      </div>
                      
                      <div className={`campaign-option ${campaignType === 'health' ? 'active' : ''}`} onClick={() => handleCampaignChange('health')}>
                        <div className="campaign-icon">
                          <i className="fas fa-heartbeat"></i>
                        </div>
                        <div className="campaign-details">
                          <h5>Health Awareness</h5>
                          <p>Provide healthcare support and awareness</p>
                        </div>
                      </div>
                      
                      <div className={`campaign-option ${campaignType === 'plantation' ? 'active' : ''}`} onClick={() => handleCampaignChange('plantation')}>
                        <div className="campaign-icon">
                          <i className="fas fa-seedling"></i>
                        </div>
                        <div className="campaign-details">
                          <h5>Plantation</h5>
                          <p>Support tree plantation and environmental initiatives</p>
                        </div>
                      </div>
                      
                      <div className={`campaign-option ${campaignType === 'food' ? 'active' : ''}`} onClick={() => handleCampaignChange('food')}>
                        <div className="campaign-icon">
                          <i className="fas fa-utensils"></i>
                        </div>
                        <div className="campaign-details">
                          <h5>Food for All</h5>
                          <p>Provide meals to those in need</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group amount-selection">
                    <h4>Select Your Donation Amount</h4>
                    <div className="amount-options">
                      <div 
                        className={`amount-option ${donationAmount === '500' ? 'active' : ''}`}
                        onClick={() => handleAmountSelect('500')}
                      >
                        ₹500
                      </div>
                      <div 
                        className={`amount-option ${donationAmount === '1000' ? 'active' : ''}`}
                        onClick={() => handleAmountSelect('1000')}
                      >
                        ₹1,000
                      </div>
                      <div 
                        className={`amount-option ${donationAmount === '2500' ? 'active' : ''}`}
                        onClick={() => handleAmountSelect('2500')}
                      >
                        ₹2,500
                      </div>
                      <div 
                        className={`amount-option ${donationAmount === '5000' ? 'active' : ''}`}
                        onClick={() => handleAmountSelect('5000')}
                      >
                        ₹5,000
                      </div>
                      <div 
                        className={`amount-option ${donationAmount === '10000' ? 'active' : ''}`}
                        onClick={() => handleAmountSelect('10000')}
                      >
                        ₹10,000
                      </div>
                      <div 
                        className={`amount-option custom ${donationAmount === 'custom' ? 'active' : ''}`}
                        onClick={() => setDonationAmount('custom')}
                      >
                        <input 
                          type="number" 
                          placeholder="Custom Amount" 
                          value={customAmount}
                          onChange={handleCustomAmountChange}
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group payment-selection">
                    <h4>Select Payment Method</h4>
                    <div className="payment-options">
                      <div 
                        className={`payment-option ${paymentMethod === 'card' ? 'active' : ''}`}
                        onClick={() => setPaymentMethod('card')}
                      >
                        <i className="fas fa-credit-card"></i>
                        <span>Credit/Debit Card</span>
                      </div>
                      <div 
                        className={`payment-option ${paymentMethod === 'upi' ? 'active' : ''}`}
                        onClick={() => setPaymentMethod('upi')}
                      >
                        <i className="fas fa-mobile-alt"></i>
                        <span>UPI</span>
                      </div>
                      <div 
                        className={`payment-option ${paymentMethod === 'netbanking' ? 'active' : ''}`}
                        onClick={() => setPaymentMethod('netbanking')}
                      >
                        <i className="fas fa-university"></i>
                        <span>Net Banking</span>
                      </div>
                    </div>
                  </div>

                  <div className="form-group donor-info">
                    <h4>Your Information</h4>
                    <div className="donor-form-group">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-input">
                            <label htmlFor="firstName">First Name*</label>
                            <input 
                              type="text" 
                              id="firstName" 
                              name="firstName" 
                              value={donorInfo.firstName}
                              onChange={handleDonorInfoChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-input">
                            <label htmlFor="lastName">Last Name*</label>
                            <input 
                              type="text" 
                              id="lastName" 
                              name="lastName" 
                              value={donorInfo.lastName}
                              onChange={handleDonorInfoChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-input">
                            <label htmlFor="email">Email*</label>
                            <input 
                              type="email" 
                              id="email" 
                              name="email" 
                              value={donorInfo.email}
                              onChange={handleDonorInfoChange}
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-input">
                            <label htmlFor="phone">Phone*</label>
                            <input 
                              type="tel" 
                              id="phone" 
                              name="phone" 
                              value={donorInfo.phone}
                              onChange={handleDonorInfoChange}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="form-input">
                        <label htmlFor="address">Address</label>
                        <input 
                          type="text" 
                          id="address" 
                          name="address" 
                          value={donorInfo.address}
                          onChange={handleDonorInfoChange}
                        />
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-input">
                            <label htmlFor="city">City</label>
                            <input 
                              type="text" 
                              id="city" 
                              name="city" 
                              value={donorInfo.city}
                              onChange={handleDonorInfoChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-input">
                            <label htmlFor="state">State</label>
                            <input 
                              type="text" 
                              id="state" 
                              name="state" 
                              value={donorInfo.state}
                              onChange={handleDonorInfoChange}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-input">
                            <label htmlFor="zipCode">Zip Code</label>
                            <input 
                              type="text" 
                              id="zipCode" 
                              name="zipCode" 
                              value={donorInfo.zipCode}
                              onChange={handleDonorInfoChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-input">
                            <label htmlFor="country">Country</label>
                            <select 
                              id="country" 
                              name="country" 
                              value={donorInfo.country}
                              onChange={handleDonorInfoChange}
                            >
                              <option value="India">India</option>
                              <option value="USA">USA</option>
                              <option value="UK">UK</option>
                              <option value="Canada">Canada</option>
                              <option value="Australia">Australia</option>
                              <option value="Other">Other</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      
                      <div className="form-input">
                        <label htmlFor="message">Message (Optional)</label>
                        <textarea 
                          id="message" 
                          name="message" 
                          value={donorInfo.message}
                          onChange={handleDonorInfoChange}
                          rows="3"
                        ></textarea>
                      </div>
                      
                      <div className="form-input checkbox-input">
                        <input 
                          type="checkbox" 
                          id="anonymous" 
                          name="anonymous" 
                          checked={donorInfo.anonymous}
                          onChange={handleDonorInfoChange}
                        />
                        <label htmlFor="anonymous">Make this donation anonymous</label>
                      </div>
                      
                      <div className="form-input checkbox-input" style={{border:"none"}}>
                        <input type="checkbox" id="taxReceipt" name="taxReceipt" />
                        <label htmlFor="taxReceipt">Email me a tax receipt</label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="form-group submit-group">
                    <p className="secure-note"><i className="fas fa-lock"></i> All transactions are secure and encrypted</p>
                    <button type="submit" className="custom-button donate-button">
                      <span>Complete Donation <i className="fas fa-heart ml-2"></i></span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="col-lg-4">
              <div className="donation-sidebar">
                <div className="donation-summary">
                  <h4>Donation Summary</h4>
                  <div className="summary-item">
                    <span>Campaign:</span>
                    <span className="value">
                      {campaignType === 'education' && 'Education & Livelihood'}
                      {campaignType === 'health' && 'Health Awareness'}
                      {campaignType === 'plantation' && 'Plantation'}
                      {campaignType === 'food' && 'Food for All'}
                    </span>
                  </div>
                  <div className="summary-item">
                    <span>Amount:</span>
                    <span className="value">{donationAmount === 'custom' ? `₹${customAmount || '0'}` : donationAmount ? `₹${donationAmount}` : '₹0'}</span>
                  </div>
                </div>
                
                <div className="tax-info">
                  <h4>Tax Benefits</h4>
                  <p>Your donation is eligible for tax benefits under Section 80G of the Income Tax Act. You will receive a tax receipt upon completion of your donation.</p>
                </div>
                
                <div className="why-donate">
                  <h4>Why Your Support Matters</h4>
                  <ul>
                    <li><i className="fas fa-check-circle"></i> Empower underprivileged children through education</li>
                    <li><i className="fas fa-check-circle"></i> Provide healthcare services to those in need</li>
                    <li><i className="fas fa-check-circle"></i> Support environmental sustainability</li>
                    <li><i className="fas fa-check-circle"></i> Help end hunger in vulnerable communities</li>
                  </ul>
                </div>
                
                <div className="donation-contact">
                  <h4>Need Help?</h4>
                  <p>If you have any questions or need assistance with your donation, please contact us:</p>
                  <div className="contact-info">
                    <div><i className="fas fa-phone"></i> +91 123 456 7890</div>
                    <div><i className="fas fa-envelope"></i> donate@vishuwelfare.org</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Donation Section Ends Here========== */}

      {/* ==========Impact Section Starts Here========== */}
      <section className="impact-section padding-bottom">
        <div className="container">
          <div className="section-header">
            <span className="cate">YOUR IMPACT</span>
            <h3 className="title">See How Your Donation Makes a Difference</h3>
          </div>
          
          <div className="row impact-boxes">
            <div className="col-md-3 col-6">
              <div className="impact-box">
                <div className="impact-icon">
                  <i className="fas fa-book"></i>
                </div>
                <h4>1,500+</h4>
                <p>Children Educated</p>
              </div>
            </div>
            
            <div className="col-md-3 col-6">
              <div className="impact-box">
                <div className="impact-icon">
                  <i className="fas fa-seedling"></i>
                </div>
                <h4>10,000+</h4>
                <p>Trees Planted</p>
              </div>
            </div>
            
            <div className="col-md-3 col-6">
              <div className="impact-box">
                <div className="impact-icon">
                  <i className="fas fa-heartbeat"></i>
                </div>
                <h4>5,000+</h4>
                <p>Medical Checkups</p>
              </div>
            </div>
            
            <div className="col-md-3 col-6">
              <div className="impact-box">
                <div className="impact-icon">
                  <i className="fas fa-utensils"></i>
                </div>
                <h4>20,000+</h4>
                <p>Meals Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Impact Section Ends Here========== */}
      
      {/* ==========Testimonial Section Starts Here========== */}
      <section className="testimonial-section padding-bottom bg_img" data-background="assets/images/testimonial/testimonial-bg.jpg">
        <div className="container">
          <div className="section-header">
            <span className="cate">TESTIMONIALS</span>
            <h3 className="title">What Our Donors Say</h3>
          </div>
          
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="testimonial-wrapper">
                <div className="testimonial-item">
                  <div className="testimonial-content">
                    <p>"Contributing to Vishu Welfare Association has been an incredibly fulfilling experience. I've seen firsthand how my donations have helped transform lives in the community. The transparency and dedication they show in their work is truly inspiring."</p>
                    <div className="testimonial-author">
                      <div className="author-thumb">
                        <img src="assets/images/testimonial/01.jpg" alt="testimonial" />
                      </div>
                      <div className="author-info">
                        <h5>Rajesh Kumar</h5>
                        <span>Regular Donor</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========Testimonial Section Ends Here========== */}
        {/* ==========FAQs Section Starts Here========== */}
      <section className="faq-section padding-bottom">
        <div className="container">
          <div className="section-header">
            <span className="cate">FAQs</span>
            <h3 className="title">Frequently Asked Questions</h3>
            <p>Get answers to common questions about donating to our organization.</p>
          </div>
          
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="faq-container">
                <div className="faq-item">
                  <div className="faq-question">Is my donation tax-deductible?</div>
                  <div className="faq-answer">
                    <div className="faq-answer-content">
                      Yes, all donations to Vishu Welfare Association are eligible for tax benefits under Section 80G of the Income Tax Act. You will receive a tax receipt via email after your donation is processed.
                    </div>
                  </div>
                </div>
                
                <div className="faq-item">
                  <div className="faq-question">How are my donations used?</div>
                  <div className="faq-answer">
                    <div className="faq-answer-content">
                      Your donations directly support our programs in education, healthcare, environmental initiatives, and food distribution. We ensure that at least 85% of all donations go directly to program costs, with only 15% used for administrative expenses and fundraising.
                    </div>
                  </div>
                </div>
                
                <div className="faq-item">
                  <div className="faq-question">Can I make a recurring donation?</div>
                  <div className="faq-answer">
                    <div className="faq-answer-content">
                      Yes, we offer monthly, quarterly, and annual recurring donation options. You can set up a recurring donation during the donation process by checking the "Make this a monthly recurring donation" option.
                    </div>
                  </div>
                </div>
                
                <div className="faq-item">
                  <div className="faq-question">How do I cancel or modify a recurring donation?</div>
                  <div className="faq-answer">
                    <div className="faq-answer-content">
                      You can cancel or modify your recurring donation at any time by contacting our donor services team at donate@vishuwelfare.org or by calling our helpline at 9891915598. We'll process your request within 2 business days.
                    </div>
                  </div>
                </div>
                
                <div className="faq-item">
                  <div className="faq-question">Can I donate in memory or honor of someone?</div>
                  <div className="faq-answer">
                    <div className="faq-answer-content">
                      Absolutely! You can dedicate your donation to someone special. Simply include their name and any message in the "Message" section of the donation form, and we'll acknowledge your tribute in our communications.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ==========FAQs Section Ends Here========== */}
      
      <Footer />
    </>
  );
};

export default DonationPage;
