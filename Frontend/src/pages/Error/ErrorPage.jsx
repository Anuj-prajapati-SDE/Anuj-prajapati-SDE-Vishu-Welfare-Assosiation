import React from 'react'

const ErrorPage = () => {
  return (
    <>
  {/* ==========Error Section Starts Here========== */}
  <section className="error-section min-height-section">
    <div className="container">
      <div className="error-wrapper">
        <div className="main-thumb">
          <img src="./src/assets/images/error/404.png" alt="error" />
        </div>
        <div className="error-content">
          <h3 className="title">Oops! this page not found</h3>
          <p>We are Really Sorry But the Page you Requested is Missing :(</p>
          <a href="/" className="custom-button">
            <span>go back to home</span>
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* ==========Error Section Ends Here========== */}
</>

  )
}

export default ErrorPage