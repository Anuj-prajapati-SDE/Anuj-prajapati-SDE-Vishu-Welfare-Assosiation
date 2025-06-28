import React, { useState, useEffect } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./DonationStyles.css";
import banner from "../../assets/images/banners/Donor.jpg";
import HeroSection from "../../components/HeroSection/HeroSection";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ClipLoader } from "react-spinners";

const DonationPage = () => {
  const [donationAmount, setDonationAmount] = useState("1000");
  const [customAmount, setCustomAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [showReceiptBtn, setShowReceiptBtn] = useState(false);
  const [donorInfo, setDonorInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "India",
    anonymous: false,
    message: "",
    taxReceipt: true,
  });
  const [campaignType, setCampaignType] = useState("education");

  useEffect(() => {
    const { firstName, lastName, email, phone } = donorInfo;
    const requiredFieldsFilled = firstName && lastName && email && phone;
    const validAmount =
      donationAmount === "custom" ? parseFloat(customAmount) > 0 : true;
    setIsFormValid(requiredFieldsFilled && validAmount);
  }, [donorInfo, donationAmount, customAmount]);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  const handleDonorInfoChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDonorInfo({
      ...donorInfo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAmountSelect = (amount) => {
    setDonationAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setCustomAmount(value);
      setDonationAmount("custom");
    }
  };

  const handleCampaignChange = (campaign) => {
    setCampaignType(campaign);
  };

  const displayRazorpay = async () => {
    const finalAmount =
      donationAmount === "custom" ? customAmount : donationAmount;
    try {
      const res = await fetch("http://localhost:5000/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: finalAmount }),
      });
      const order = await res.json();
      const options = {
        key: "rzp_test_jt7u2Nr5kJjYWZ",
        amount: order.amount,
        currency: order.currency,
        name: "Vishu Welfare Association",
        description: `Donation for ${campaignType}`,
        order_id: order.id,
        handler: async function (response) {
          const paymentData = {
            donorInfo,
            amount: finalAmount,
            campaignType,
            paymentId: response.razorpay_payment_id,
            orderId: response.razorpay_order_id,
            signature: response.razorpay_signature,
            paymentDate: new Date().toISOString(),
          };

          await fetch("http://localhost:5000/api/save-donation", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(paymentData),
          });

          toast.success("Your donation was successful! Thank you!", {
            position: "top-center",
            autoClose: 5000,
          });
          setPaymentDetails(paymentData);
          setShowReceiptBtn(true);
        },
        prefill: {
          name: `${donorInfo.firstName} ${donorInfo.lastName}`,
          email: donorInfo.email,
          contact: donorInfo.phone,
        },
        notes: {
          address: donorInfo.address,
          campaign: campaignType,
        },
        theme: { color: "#F46036" },
        modal: {
          ondismiss: function () {
            setIsProcessing(false);
            toast.info("Payment canceled.", { position: "top-center" });
          },
        },
      };
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      setIsProcessing(false);
      console.error("Razorpay Error:", error);
      toast.error("Error initiating payment. Try again later.", {
        position: "top-center",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      toast.error("Please fill all required fields.", {
        position: "top-center",
      });
      return;
    }
    setIsProcessing(true);
    await displayRazorpay();
  };

  const generatePDF = async () => {
    const receipt = document.getElementById("receipt-section");
    const canvas = await html2canvas(receipt);
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF();
    pdf.addImage(imgData, "PNG", 10, 10, 190, 0);
    pdf.save(`Donation_Receipt_${paymentDetails?.paymentId || "receipt"}.pdf`);
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <HeroSection
        Tittle={"Your Help Can Light a Life."}
        Heading={
          "Your kindness has the power to change lives. With just a small act of giving, you can bring hope, food, education, and care to those who need it most. We’re not asking for much—just a hand to help us lift others up."
        }
        Banner={banner}
      />

      {/* ==========Donation Section Starts Here========== */}
      <section className="donation-section padding-top padding-bottom">
        <div className="container">
          <div className="section-header text-center">
            <span className="cate">YOUR SUPPORT MATTERS</span>
            <h3 className="title">Be the Reason Someone Smiles Today</h3>
            <p>
              Your generous contribution helps us continue our mission to
              empower communities through education, healthcare, environmental
              initiatives, and food programs.
            </p>
          </div>
 
          <div className="row">
            <div className="col-lg-8">
              <div className="donation-form-wrapper">
                {isProcessing ? (
                  // You can move the comment outside or use it as a regular JS comment
                  showReceiptBtn &&
                  paymentDetails && (
                    <div className="container my-4">
                      <div
                        id="receipt-section"
                        className="receipt-preview p-3"
                        style={{ background: "#fff", border: "1px solid #ccc" }}
                      >
                        <h3>Donation Receipt</h3>
                        <p>
                          <strong>Name:</strong>{" "}
                          {paymentDetails.donorInfo.firstName}{" "}
                          {paymentDetails.donorInfo.lastName}
                        </p>
                        <p>
                          <strong>Email:</strong>{" "}
                          {paymentDetails.donorInfo.email}
                        </p>
                        <p>
                          <strong>Campaign:</strong>{" "}
                          {paymentDetails.campaignType}
                        </p>
                        <p>
                          <strong>Amount:</strong> ₹{paymentDetails.amount}
                        </p>
                        <p>
                          <strong>Payment ID:</strong>{" "}
                          {paymentDetails.paymentId}
                        </p>
                        <p>
                          <strong>Date:</strong>{" "}
                          {new Date(
                            paymentDetails.paymentDate
                          ).toLocaleString()}
                        </p>
                      </div>
                      <button
                        className="custom-button mt-3"
                        onClick={generatePDF}
                      >
                        Download Receipt
                      </button>
                    </div>
                  )
                ) : (
                  <form className="donation-form" onSubmit={handleSubmit}>
                    <div className="form-group campaign-selection">
                      <h4>Select a Campaign</h4>
                      <div className="campaign-options">
                        <div
                          className={`campaign-option ${
                            campaignType === "education" ? "selected" : ""
                          }`}
                          onClick={() => handleCampaignChange("education")}
                        >
                          <div className="campaign-icon">
                            <i className="fas fa-book"></i>
                          </div>
                          <div className="campaign-details">
                            <h5>Education & Livelihood</h5>
                            <p>Support education and skill development</p>
                          </div>
                        </div>

                        <div
                          className={`campaign-option ${
                            campaignType === "health" ? "selected" : ""
                          }`}
                          onClick={() => handleCampaignChange("health")}
                        >
                          <div className="campaign-icon">
                            <i className="fas fa-heartbeat"></i>
                          </div>
                          <div className="campaign-details">
                            <h5>Health Awareness</h5>
                            <p>Provide healthcare support and awareness</p>
                          </div>
                        </div>

                        <div
                          className={`campaign-option ${
                            campaignType === "plantation" ? "selected" : ""
                          }`}
                          onClick={() => handleCampaignChange("plantation")}
                        >
                          <div className="campaign-icon">
                            <i className="fas fa-seedling"></i>
                          </div>
                          <div className="campaign-details">
                            <h5>Plantation</h5>
                            <p>
                              Support tree plantation and environmental
                              initiatives
                            </p>
                          </div>
                        </div>

                        <div
                          className={`campaign-option ${
                            campaignType === "food" ? "selected" : ""
                          }`}
                          onClick={() => handleCampaignChange("food")}
                        >
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
                          className={`amount-option ${
                            donationAmount === "500" ? "selected" : ""
                          }`}
                          onClick={() => handleAmountSelect("500")}
                        >
                          ₹500
                        </div>
                        <div
                          className={`amount-option ${
                            donationAmount === "1000" ? "selected" : ""
                          }`}
                          onClick={() => handleAmountSelect("1000")}
                        >
                          ₹1,000
                        </div>
                        <div
                          className={`amount-option ${
                            donationAmount === "2500" ? "selected" : ""
                          }`}
                          onClick={() => handleAmountSelect("2500")}
                        >
                          ₹2,500
                        </div>
                        <div
                          className={`amount-option ${
                            donationAmount === "5000" ? "selected" : ""
                          }`}
                          onClick={() => handleAmountSelect("5000")}
                        >
                          ₹5,000
                        </div>
                        <div
                          className={`amount-option ${
                            donationAmount === "10000" ? "selected" : ""
                          }`}
                          onClick={() => handleAmountSelect("10000")}
                        >
                          ₹10,000
                        </div>
                        <div
                          className={`amount-option custom ${
                            donationAmount === "custom" ? "selected" : ""
                          }`}
                          onClick={() => setDonationAmount("custom")}
                        >
                          <input
                            type="text"
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
                          className={`payment-option ${
                            paymentMethod === "card" ? "selected" : ""
                          }`}
                          onClick={() => setPaymentMethod("card")}
                        >
                          <i className="fas fa-credit-card"></i>
                          <span>Credit/Debit Card</span>
                        </div>
                        <div
                          className={`payment-option ${
                            paymentMethod === "upi" ? "selected" : ""
                          }`}
                          onClick={() => setPaymentMethod("upi")}
                        >
                          <i className="fas fa-mobile-alt"></i>
                          <span>UPI</span>
                        </div>
                        <div
                          className={`payment-option ${
                            paymentMethod === "netbanking" ? "selected" : ""
                          }`}
                          onClick={() => setPaymentMethod("netbanking")}
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

                        <div className=" checkbox-input">
                          <label htmlFor="anonymous">
                            Make this donation anonymous
                          </label>
                          <input
                            type="checkbox"
                            id="anonymous"
                            name="anonymous"
                            className="toggle-check-input"
                            checked={donorInfo.anonymous}
                            onChange={handleDonorInfoChange}
                          />
                        </div>

                        <div className=" checkbox-input">
                          <label htmlFor="taxReceipt">
                            Email me a tax receipt
                          </label>
                          <input
                            type="checkbox"
                            id="taxReceipt"
                            className="toggle-check-input"
                            name="taxReceipt"
                            checked={donorInfo.taxReceipt}
                            onChange={handleDonorInfoChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-group submit-group">
                      <p className="secure-note">
                        <i className="fas fa-lock"></i> All transactions are
                        secure and encrypted with Razorpay
                      </p>
                      <button
                        type="submit"
                        className="custom-button donate-button"
                        disabled={!isFormValid}
                      >
                        <span>
                          Proceed to Payment{" "}
                          <i className="fas fa-heart ml-2"></i>
                        </span>
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="donation-sidebar">
                <div className="donation-summary">
                  <h4>Donation Summary</h4>
                  <div className="summary-item">
                    <span>Campaign:</span>
                    <span className="value">
                      {campaignType === "education" && "Education & Livelihood"}
                      {campaignType === "health" && "Health Awareness"}
                      {campaignType === "plantation" && "Plantation"}
                      {campaignType === "food" && "Food for All"}
                    </span>
                  </div>
                  <div className="summary-item amount">
                    <span>Amount:</span>
                    <span className="value">
                      {donationAmount === "custom"
                        ? `₹${customAmount || "0"}`
                        : donationAmount
                        ? `₹${parseInt(donationAmount).toLocaleString("en-IN")}`
                        : "₹0"}
                    </span>
                  </div>
                </div>

                <div className="razorpay-badge">
                  <div className="badge-content">
                    <img
                      src="https://razorpay.com/assets/razorpay-logo.svg"
                      alt="Razorpay"
                    />
                    <p>Secure Payments by Razorpay</p>
                  </div>
                </div>

                <div className="tax-info">
                  <h4>Tax Benefits</h4>
                  <p>
                    Your donation is eligible for tax benefits under Section 80G
                    of the Income Tax Act. You will receive a tax receipt upon
                    completion of your donation.
                  </p>
                </div>

                <div className="why-donate">
                  <h4>Why Your Support Matters</h4>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle"></i> Empower
                      underprivileged children through education
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Provide healthcare
                      services to those in need
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Support
                      environmental sustainability
                    </li>
                    <li>
                      <i className="fas fa-check-circle"></i> Help end hunger in
                      vulnerable communities
                    </li>
                  </ul>
                </div>

                <div className="donation-contact">
                  <h4>Need Help?</h4>
                  <p>
                    If you have any questions or need assistance with your
                    donation, please contact us:
                  </p>
                  <div className="contact-info">
                    <div>
                      <i className="fas fa-phone"></i> +91 9891915598
                    </div>
                    <div>
                      <i className="fas fa-envelope"></i> connect@vishu.org.in
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Rest of the sections remain unchanged */}

      <Footer />
    </>
  );
};

export default DonationPage;
