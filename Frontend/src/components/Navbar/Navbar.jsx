import React from 'react'

import {MainLogoImg, PhoneIconImage, EmailIconImage, AddressIconImage} from '../../assets/images/index'

const Navbar = () => {
  return (
  <>
  {/* ==========Preloader Overlay Starts Here========== */}
  {/* <div className="overlayer">
    <div className="loader">
      <div className="loader-inner" />
    </div>
  </div> */}
  <div className="scrollToTop">
    <i className="fas fa-angle-up" />
  </div>
  <div className="overlay" />
  <div className="overlayTwo" />
  {/* ==========Preloader Overlay Ends Here========== */}
  {/* ==========Header Section Starts Here========== */}
  <header className="header-1">
    <div className="header-top">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-3 col-12"> 
            <div className="logo py-2">
              <a href="/">
                <img src={MainLogoImg} alt="logo" />
              </a>
            </div>
          </div>
          <div className="col-lg-9 col-12">
            <div className="ht-left">
              <ul className="lab-ul d-flex flex-wrap justify-content-end">
                <li className="d-flex flex-wrap align-items-center">
                  <div className="ht-add-thumb mr-3">
                    <img src={PhoneIconImage} alt="address" />
                  </div>
                  <div className="ht-add-content">
                    <span>Number :</span>
                    <span className="d-block text-bold">9891915598</span>
                  </div>
                </li>
                <li className="d-flex flex-wrap align-items-center">
                  <div className="ht-add-thumb mr-3">
                    <img src={EmailIconImage} alt="email" />
                  </div>
                  <div className="ht-add-content">
                    <span>Email : </span>
                    <span className="d-block text-bold">
                      connect@vishu.org.in
                    </span>
                  </div>
                </li>
                <li className="d-flex flex-wrap align-items-center">
                  <div className="ht-add-thumb mr-3">
                    <img src={AddressIconImage} alt="call" />
                  </div>
                  <div className="ht-add-content">
                    <span>Address : </span>
                    <span className="d-block text-bold">
                     A -25 sector-59 Noida, Uttar Pradesh, India
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> 
      </div>
    </div>
    <div className="header-bottom">
      <div className="container">
        <div className="header-wrapper">
          <div className="menu-area justify-content-between w-100">
            <ul className="menu">
              <li>
                <a href="/" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="/about">About</a>
                <ul className="submenu">
                  <li>
                    {" "}
                    <a href="/about">About US</a>
                  </li>
                  <li>
                     {" "}
                    <a href="/what-sets-us-apart">What set us apart</a>
                  </li>
                  <li>
                    <a href="/mission-vesion">Mission &amp; Vission</a>
                  </li>
                  <li>
                    <a href="/our-leadership">Our Leadership</a>
                  </li>
                </ul>
              </li>
              <li>
                <a  className="active">
                  Get Involve
                </a>
                  <ul className="submenu">                  <li>
                    {" "}
                    <a href="/partner-with-us">Partner with us </a>
                  </li>
                  <li>
                    {" "}
                    <a href="/volunters">Volunter</a>
                  </li>
                  <li>
                    <a href="/careers">Careers </a>
                  </li>
                  <li>
                    <a href="/donate">Donor</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/contact" className="active">
                  Contact
                </a>
              </li>
              <li>
                <a href="/gallery" className="active">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/our-work-area" className="active">
                  Our Work Area
                </a>
              </li>
            </ul>
            <div className="header-bar d-lg-none">
              <span />
              <span />
              <span />
            </div>
            {/* <div class="d-none d-sm-block">
                      <div class="search-cart d-flex align-items-center flex-wrap">
                          <div class="search-button">
                              <form action="/">
                                  <input type="text" name="search" id="search" placeholder="Enter your search">
                                  <button type="submit"><i class="fas fa-search"></i></button>
                              </form>
                          </div>
                          <div class="cart-button">
                              <a href="#">
                                  <span class="cart-amount">05</span>
                                  <i class="fas fa-shopping-basket"></i>
                              </a>
                          </div>
                      </div>
                  </div> */}
            <div className="ellepsis-bar d-lg-none">
              <i className="fas fa-ellipsis-h" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* ==========Header Section Ends Here========== */}
</>

  )
}

export default Navbar