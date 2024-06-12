import React from 'react'
import PageHeader from '../Common/PageHeader'

const Contact = () => {
  return (
    <>
      <PageHeader title="Contact Us" />
      <section className="section-b-space">
        <div className="container">
          <div className="title animated-title">
            <div className="loader-line" />
            <div className="d-flex align-items-center justify-content-between flex-wrap w-100">
              <div>
                <h2>Get In Touch</h2>
                <h6>Contact us if you have any queries or merely want to say hi.</h6>
              </div>
            </div>
          </div>
          <div className="contact-detail">
            <div className="row g-4">
              <div className="col-xxl-4 col-md-6">
                <div className="contact-detail-box">
                  <div className="contact-icon">
                    <i className="ri-phone-fill" />
                  </div>
                  <div>
                    <div className="contact-detail-title">
                      <h4>Phone</h4>
                    </div>
                    <div className="contact-detail-contain">
                      <p>(+1) 618 190 496</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-md-6">
                <div className="contact-detail-box">
                  <div className="contact-icon">
                    <i className="ri-mail-open-fill" />
                  </div>
                  <div>
                    <div className="contact-detail-title">
                      <h4>Email</h4>
                    </div>
                    <div className="contact-detail-contain">
                      <p>geweto9420@chokxus.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-md-6">
                <div className="contact-detail-box">
                  <div className="contact-icon">
                    <i className="ri-map-pin-fill" />
                  </div>
                  <div>
                    <div className="contact-detail-title">
                      <h4>London Office</h4>
                    </div>
                    <div className="contact-detail-contain">
                      <p>Cruce Casa de Postas 29</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row g-4">
            <div className="col-xl-7">
              <div className="contact-form">
                <form className="row g-3">
                  <div className="col-md-6">
                    <label htmlFor="inputFirstname" className="form-label mt-0">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputFirstname"
                      placeholder="Enter your fist name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputLastname" className="form-label mt-0">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputLastname"
                      placeholder="Enter your last name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputEmail"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="inputPhone" className="form-label">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="form-control"
                      id="inputPhone"
                      placeholder="Enter your number"
                    />
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="inputtext" className="form-label">
                      How Can We Help You?
                    </label>
                    <textarea
                      className="form-control"
                      id="inputtext"
                      rows={3}
                      placeholder="Hi there, I would like to...."
                      defaultValue={""}
                    />
                  </div>
                </form>
                <div className="buttons d-flex align-items-center justify-content-end gap-3">
                  <a href="contact.html.html" className="btn gray-btn mt-0">
                    CANCEL
                  </a>
                  <a href="index.html" className="btn theme-btn mt-0">
                    SUBMIT
                  </a>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3332.2625191604434!2d-81.27475172358754!3d33.364211773423776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f91bc85b065379%3A0x2d14689bf5c52e3d!2s93%20Songbird%20Cir%2C%20Blackville%2C%20SC%2029817%2C%20USA!5e0!3m2!1sen!2sin!4v1690353019073!5m2!1sen!2sin"
                width={600}
                height={450}
                className="contact-map border-0 w-100 h-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Contact
