import React, { useEffect } from 'react'
import PageHeader from '../Common/PageHeader'

const About = () => {
    useEffect(() => {
        document.title = 'About Us'
    }, [])
    return (
        <>
            <PageHeader title="About Us" />

            <section className="section-b-space">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-xl-7">
                            <div className="title animated-title">
                                <div className="loader-line" />
                                <h2 className="mb-sm-3 mb-2">What is ZOMO?</h2>
                                <p className="content-color">
                                    Welcome to our online order website! Here, you can browse our wide
                                    selection of products and place orders from the comfort of your own
                                    home. Whether you're looking for groceries, electronics, or gifts,
                                    we have you covered. With easy navigation, secure payment options,
                                    and fast delivery.
                                </p>
                                <p className="pt-2 content-color">
                                    we strive to make your online shopping experience as seamless as
                                    possible. Explore our website today and discover the convenience of
                                    ordering online!
                                </p>
                                <p className="pt-2 content-color">
                                    So why wait? Start shopping on our online order website today and
                                    experience the ultimate convenience of online shopping!"
                                </p>
                            </div>
                            <div className="about-image-part">
                                <div className="row g-sm-3 g-2">
                                    <div className="col-xl-3 col-lg-3 col-sm-6 col-6">
                                        <div className="about-images ratio_square">
                                            <img
                                                className="bg-size img"
                                                src="assets/images/service/1.jpg"
                                                alt={1}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-sm-6 col-6">
                                        <div className="about-images ratio_square">
                                            <img
                                                className="bg-size img"
                                                src="assets/images/service/2.jpg"
                                                alt={2}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-sm-6 col-6">
                                        <div className="about-images ratio_square">
                                            <img
                                                className="bg-size img"
                                                src="assets/images/service/3.jpg"
                                                alt={3}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-xl-3 col-lg-3 col-sm-6 col-6">
                                        <div className="about-images ratio_square">
                                            <img
                                                className="bg-size img"
                                                src="assets/images/service/4.jpg"
                                                alt={4}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 d-xl-inline-block d-none">
                            <div className="about-images h-100">
                                <img
                                    className="img-fluid img h-100"
                                    src="assets/images/service/5.jpg"
                                    alt={2}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="service-box-section section-b-space">
                <div className="container">
                    <div className="row g-3">
                        <div className="col-xl-3 col-lg-6 col-sm-6 col-12">
                            <div className="service-box">
                                <div className="service-img">
                                    <img
                                        className="img-fluid icon"
                                        src="assets/images/svg/routing.svg"
                                        alt="routing"
                                    />
                                </div>
                                <h5 className="service-name">Easiest Way To Order</h5>
                                <p className="service-details">
                                    we have designed our refund policies to be easy and hassle-free.
                                </p>
                                <div className="dot" />
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-6 col-12">
                            <div className="service-box">
                                <div className="service-img">
                                    <img
                                        className="img-fluid icon"
                                        src="assets/images/svg/3d-rotate.svg"
                                        alt="3d-rotate"
                                    />
                                </div>
                                <h5 className="service-name">Easy Refund Policies</h5>
                                <p className="service-details">
                                    With our commitment to speedy delivery and no additional cost to
                                    you.
                                </p>
                                <div className="dot" />
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-6 col-12">
                            <div className="service-box">
                                <div className="service-img">
                                    <img
                                        className="img-fluid icon"
                                        src="assets/images/svg/truck.svg"
                                        alt="truck"
                                    />
                                </div>
                                <h5 className="service-name">Free Fast Deliveries</h5>
                                <p className="service-details">
                                    Enjoy priority access, special discounts, and more. Elevate your
                                    experience today!
                                </p>
                                <div className="dot" />
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-6 col-sm-6 col-12">
                            <div className="service-box">
                                <div className="service-img">
                                    <img
                                        className="img-fluid icon"
                                        src="assets/images/svg/medal.svg"
                                        alt="medal"
                                    />
                                </div>
                                <h5 className="service-name">Premium Options</h5>
                                <p className="service-details">
                                    You only need to follow a few steps &amp; the tasty food is next to
                                    your home.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-b-space">
                <div className="container">
                    <div className="title animated-title">
                        <div className="loader-line" />
                        <h2>Our Team</h2>
                        <div className="sub-title">
                            <p>
                                Our team is committed to delivering innovative solutions that meet the
                                needs of our clients and users.
                            </p>
                        </div>
                    </div>
                    <div className="row g-3">
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                            <div className="team-box">
                                <div className="member-image">
                                    <img
                                        className="img-fluid img"
                                        src="assets/images/service/person1.png"
                                        alt="person1"
                                    />
                                </div>
                                <div className="member-details">
                                    <h5 className="member-name fw-semibold dark-text">
                                        Harriet Watson
                                    </h5>
                                    <h6 className="fw-normal content-color">Co - Founder</h6>
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
                                            <a href="https://www.instagram.com/accounts/login/">
                                                <i className="ri-instagram-fill icon" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                            <div className="team-box">
                                <div className="member-image">
                                    <img
                                        className="img-fluid img"
                                        src="assets/images/service/person2.png"
                                        alt="person2"
                                    />
                                </div>
                                <div className="member-details">
                                    <h5 className="member-name fw-semibold dark-text">
                                        Jenifer Peters
                                    </h5>
                                    <h6 className="fw-normal content-color">Founder</h6>
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
                                            <a href="https://www.instagram.com/accounts/login/">
                                                <i className="ri-instagram-fill icon" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                            <div className="team-box">
                                <div className="member-image">
                                    <img
                                        className="img-fluid img"
                                        src="assets/images/service/person3.png"
                                        alt="person3"
                                    />
                                </div>
                                <div className="member-details">
                                    <h5 className="member-name fw-semibold dark-text">Rock Smith</h5>
                                    <h6 className="fw-normal content-color">Manager</h6>
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
                                            <a href="https://www.instagram.com/accounts/login/">
                                                <i className="ri-instagram-fill icon" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6 col-12">
                            <div className="team-box">
                                <div className="member-image">
                                    <img
                                        className="img-fluid img"
                                        src="assets/images/service/person4.png"
                                        alt="person4"
                                    />
                                </div>
                                <div className="member-details">
                                    <h5 className="member-name fw-semibold dark-text">
                                        Johnson Clarke
                                    </h5>
                                    <h6 className="fw-normal content-color mt-1">Marketing Manager</h6>
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
                                            <a href="https://www.instagram.com/accounts/login/">
                                                <i className="ri-instagram-fill icon" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About
