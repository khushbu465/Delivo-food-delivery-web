import React from 'react'
import { Link } from 'react-router-dom'
import MobileMenu from './MobileMenu'
const Header = () => {
  return (
    <>
      <div className="skeleton-loader">
        <header className='pt-3'>
          <div className="container">
            <nav className="navbar navbar-expand-lg p-0">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#offcanvasNavbar"
              >
                <span className="navbar-toggler-icon">
                  <i className="ri-menu-line" />
                </span>
              </button>
              <Link tp="/">
                <img
                  className="img-fluid logo"
                  src="/assets/images/logo.png" style={{ height: '80px' }}
                  alt="logo"
                />
              </Link>
              <a
                target="_blank"
                href="#!"
                data-bs-toggle="modal"
                data-bs-target="#location"
                className="btn btn-sm theme-btn location-btn mt-0 ms-3 d-flex align-content-center gap-1"
              >
                <i className="ri-map-pin-line" /> Location
              </a>
              <div className="nav-option order-md-2">
                <div className="dropdown-button">
                  <div className="cart-button">
                    <span>5</span>
                    <i className="ri-shopping-cart-line text-white cart-bag" />
                  </div>
                </div>
                <div className="profile-part dropdown-button order-md-2">
                  <img
                    className="img-fluid profile-pic"
                    src="assets/images/icons/p5.png"
                    alt="profile"
                  />
                  <div>
                    <h6 className="fw-normal">Hi, Mark</h6>
                    <h5 className="fw-medium">My Account</h5>
                  </div>
                </div>
              </div>
              <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasSkeleton"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasSkeletonLabel">
                    Menu
                  </h5>
                  <button
                    className="navbar-toggler btn-close"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#offcanvasSkeleton"
                    data-bs-dismiss="offcanvas"
                  />
                </div>
                <div className="offcanvas-body">
                  <ul className="navbar-nav justify-content-center flex-grow-1">
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link "
                        href="#!"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#!"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Order
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#!"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#!"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Pages
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="contact.html">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <section className="home-wrapper">
          <div className="container text-center">
            <div className="loader-gif">
              <img
                src="assets/images/gif/food.gif"
                alt="food-gif"
                className="img-fluid"
              />
            </div>
            <h2>Searching the most delicious dish&nbsp;in your area...</h2>
          </div>
        </section>
        <div className="categories-section">
          <div className="container">
            <div className="position-relative category-top">
              <div className="swiper categories-no-arrow categories-style">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                  <div className="swiper-slide">
                    <a href="restaurant-listing.html" className="food-categories">
                      <span className="categories-img" />
                      <h4 className="placeholder col-10" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="section-b-space">
          <div className="container">
            <div className="title placeholder-glow">
              <span className="placeholder col-md-2 col-5" />
              <p className="placeholder col-5 w-50" />
            </div>
            <div className="position-relative">
              <div className="swiper banner1-slider">
                <div className="swiper-wrapper">
                  <div className="swiper-slide placeholder-glow">
                    <div className="banner-part">
                      <a href="offer.html" className="placeholder" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="banner-part">
                      <a href="offer.html" className="placeholder" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="banner-part">
                      <a href="offer.html" className="placeholder" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="banner-part">
                      <a href="offer.html" className="placeholder" />
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="banner-part">
                      <a href="offer.html" className="placeholder" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <header className='pt-3'>
        <div className="container">
          <nav className="navbar navbar-expand-lg p-0">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#offcanvasNavbar"
            >
              <span className="navbar-toggler-icon">
                <i className="ri-menu-line" />
              </span>
            </button>
            <Link to="/">
              <img
                className="img-fluid logo"
                src="assets/images/logo.png" style={{ height: '80px' }}
                alt="logo"
              />
            </Link>
            <a
              target="_blank"
              href="#!"
              data-bs-toggle="modal"
              data-bs-target="#location"
              className="btn btn-sm theme-btn location-btn mt-0 ms-3 d-flex align-content-center gap-1"
            >
              <i className="ri-map-pin-line" /> Location
            </a>
            <div className="nav-option order-md-2">
              <div className="dropdown-button">
                <div className="cart-button">
                  <span>5</span>
                  <i className="ri-shopping-cart-line text-white cart-bag" />
                </div>
                <div className="onhover-box">
                  <ul className="cart-list">
                    <li className="product-box-contain">
                      <div className="drop-cart">
                        <a href="#!" className="drop-image">
                          <img
                            src="assets/images/product/vp-3.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="drop-contain">
                          <a href="#!">
                            <h5>Egg Sandwich</h5>
                          </a>
                          <h6>
                            <span>1 x </span> $80.58
                          </h6>
                          <button className="close-button close_button">
                            <i className="fa-solid fa-xmark" />
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="product-box-contain">
                      <div className="drop-cart">
                        <a href="#!" className="drop-image">
                          <img
                            src="assets/images/product/vp-2.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="drop-contain">
                          <a href="#!">
                            <h5>Grilled Chicken Quesadilla</h5>
                          </a>
                          <h6>
                            <span>1 x </span> $25.64
                          </h6>
                          <button className="close-button close_button">
                            <i className="fa-solid fa-xmark" />
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="product-box-contain">
                      <div className="drop-cart">
                        <a href="#!" className="drop-image">
                          <img
                            src="assets/images/product/vp-4.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="drop-contain">
                          <a href="#!">
                            <h5>Spicy Ahi Roll</h5>
                          </a>
                          <h6>
                            <span>1 x </span> $12.00
                          </h6>
                          <button className="close-button close_button">
                            <i className="fa-solid fa-xmark" />
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="product-box-contain">
                      <div className="drop-cart">
                        <a href="#!" className="drop-image">
                          <img
                            src="assets/images/product/vp-5.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="drop-contain">
                          <a href="#!">
                            <h5>Spicy Dumplings</h5>
                          </a>
                          <h6>
                            <span>1 x </span> $16.28
                          </h6>
                          <button className="close-button close_button">
                            <i className="fa-solid fa-xmark" />
                          </button>
                        </div>
                      </div>
                    </li>
                    <li className="product-box-contain">
                      <div className="drop-cart">
                        <a href="#!" className="drop-image">
                          <img
                            src="assets/images/product/vp-6.png"
                            className="blur-up lazyloaded"
                            alt=""
                          />
                        </a>
                        <div className="drop-contain">
                          <a href="#!">
                            <h5>Chicken Nugget</h5>
                          </a>
                          <h6>
                            <span>1 x </span> $20.50
                          </h6>
                          <button className="close-button close_button">
                            <i className="fa-solid fa-xmark" />
                          </button>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="price-box">
                    <h5>Total :</h5>
                    <h4 className="theme-color fw-semibold">$155.00</h4>
                  </div>
                  <div className="button-group">
                    <a
                      href="checkout.html"
                      className="btn btn-sm theme-btn w-100 d-block rounded-2"
                    >
                      View Cart
                    </a>
                  </div>
                </div>
              </div>
              <div className="profile-part dropdown-button order-md-2">
                <img
                  className="img-fluid profile-pic"
                  src="assets/images/icons/p5.png"
                  alt="profile"
                />
                <div>
                  <h6 className="fw-normal">Hi, Mark Jecno</h6>
                  <h5 className="fw-medium">My Account</h5>
                </div>
                <div className="onhover-box onhover-sm">
                  <ul className="menu-list">
                    <li>
                      <a className="dropdown-item" href="profile.html">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="my-order.html">
                        My orders
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="saved-address.html">
                        Saved Address
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="saved-card.html">
                        Saved cards
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="setting.html">
                        Settings
                      </a>
                    </li>
                  </ul>
                  <div className="bottom-btn">
                    <a href="signin.html" className="theme-color fw-medium d-flex">
                      <i className="ri-login-box-line me-2" />
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="offcanvas offcanvas-end"
              tabIndex={-1}
              id="offcanvasNavbar"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                  Menu
                </h5>
                <button className="navbar-toggler btn-close" id="offcanvas-close" />
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-center flex-grow-1">
                  <li className="nav-item">
                    <a className="nav-link " href="#!"    >  Home</a>   </li>
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="#!" id="orderMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                      Order
                    </a>
                    <ul
                      className="dropdown-menu mt-0 border-0"
                      aria-labelledby="orderMenu"
                    >
                      <li>
                        <a className="dropdown-item" href="menu-listing.html">
                          Menu listing
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="menu-grid.html">
                          Menu grid
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="address.html">
                          Address
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="checkout.html">
                          Checkout
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="confirm-order.html">
                          Confirm order
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="offer.html">
                          Offer
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="order-tracking.html">
                          Order tracking
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="payment.html">
                          Payment
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="restaurant-listing.html">
                          Restaurant listing
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link dropdown-toggle" href="#!" id="blogMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
                      Blog
                    </a>
                    <ul className="dropdown-menu mt-0 border-0" aria-labelledby="blogMenu"  >
                      <li>  <a className="dropdown-item" href="blog-grid-left-sidebar.html" >  Grid Left Sidebar </a></li>
                      <li> <a className="dropdown-item" href="blog-grid-right-sidebar.html"  >    Grid Right Sidebar  </a></li>
                      <li> <a className="dropdown-item" href="blog-list.html">   Blog Listing </a></li>
                      <li> <a className="dropdown-item" href="blog-details.html">   Blog Details </a></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#!" id="pagesMenu" role="button" data-bs-toggle="dropdown" aria-expanded="false"  >
                      Pages   </a>
                    <ul className="dropdown-menu mt-0 border-0" aria-labelledby="pagesMenu" >
                      <li>  <a className="dropdown-item" href="404.html">    404  </a>  </li>
                      <li> <a className="dropdown-item" href="coming-soon.html">   Coming soon </a> </li>
                      <li> <a className="dropdown-item" href="contact.html">   Contact </a>  </li>
                      <li> <a className="dropdown-item" href="empty-cart.html">   Empty Cart </a> </li>
                      <li> <a className="dropdown-item" href="faq.html">   FAQs </a> </li>
                      <li> <a className="dropdown-item" href="otp.html">   OTP </a> </li>
                      <li>  <a className="dropdown-item" href="signin.html">    Sign in  </a> </li>
                      <li>  <a className="dropdown-item" href="signup.html">    Sign up  </a>  </li>
                      <li> <a className="dropdown-item" href="testimonial.html">   Testimonial </a></li>
                      <li> <a className="dropdown-item" href="wishlist.html">   Wishlist </a> </li>
                    </ul>
                  </li>
                  <li className="nav-item">  <a className="nav-link" href="contact.html">    Contact  </a> </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <MobileMenu />
    </>
  )
}

export default Header
