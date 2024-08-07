import React from 'react'
import LocationModal from '../Modals/LocationModal'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="footer-section section-t-space">
        <div className="container">
          <div className="main-footer">
            <div className="row g-3">
              <div className="col-xl-4 col-lg-12">
                <div className="footer-logo-part">
                  <img
                    className="img-fluid logo"
                    src="assets/images/logo.png" style={{ height: '130px' }}
                    alt="logo"
                  />
                  <p>
                    Welcome to our online order website! Here, you can browse our wide
                    selection of products and place orders from the comfort of your
                    own home.
                  </p>
                  <div className="social-media-part">
                    <ul className="social-icon">
                      <li>
                        <a href="https://www.facebook.com/login/">
                          <i className="ri-facebook-fill icon" />
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/i/flow/login">
                          <i className="ri-twitter-fill icon" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/login/">
                          <i className="ri-linkedin-fill icon" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/accounts/login/">
                          <i className="ri-instagram-fill icon" />
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/">
                          <i className="ri-youtube-fill icon" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-8">
                <div className="row g-3">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                    <h5 className="footer-title">Company</h5>
                    <ul className="content">
                      <li><Link to="/about"><h6>About Us</h6></Link> </li>
                      <li><Link to="/contact"><h6>Contact Us</h6></Link> </li>
                      <li> <Link to="/offer"><h6>Offer</h6> </Link></li>
                      <li><Link to="/faq">  <h6>FAQs</h6></Link></li>
                    </ul>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                    <h5 className="footer-title">Account</h5>
                    <ul className="content">
                      <li>
                        <a href="#">
                          <h6>My orders</h6>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Wishlist</h6>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Shopping Cart</h6>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Saved Address</h6>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                    <h5 className="footer-title">Useful links</h5>
                    <ul className="content">
                      <li>
                        <a href="#">
                          <h6>Blogs</h6>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Login</h6>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Register</h6>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Profile</h6>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Settings</h6>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-12">
                    <h5 className="footer-title">Top Brands</h5>
                    <ul className="content">
                      <li>
                        <a href="#">
                          <h6>PizzaBoy</h6>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Saladish</h6>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>IcePops</h6>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>Maxican Hoy</h6>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <h6>La Foodie</h6>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-footer-part">
            <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
              <p className='text-light' style={{ fontSize: '14px' }} >@ Copyright 2024 Delivo. All rights Reserved.</p>
              <img
                className="img-fluid cards"
                src="assets/images/icons/footer-card.png"
                alt="card"
              />
            </div>
          </div>
        </div>
      </footer>
      <LocationModal />
      <div className="responsive-space"></div>

    </>
  )
}

export default Footer
