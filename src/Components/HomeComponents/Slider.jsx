import React from 'react'

const Slider = () => {
  return (
    <>
      <section id="home" className="home-wrapper home2 section-b-space overflow-hidden" >
        <div className="container text-center">
          <div className="row">
            <div className="col-lg-7 col-12">
              <h2>Discover restaurants that food deliver near you</h2>
              <div className="search-section">
                <form className="auth-form search-head" target="_blank">
                  <div className="form-group">
                    <div className="form-input mb-0">
                      <input
                        type="search"
                        className="form-control search"
                        id="inputusername"
                        placeholder="Search for Restaurant"
                      />
                      <i className="ri-search-line search-icon" />
                    </div>
                  </div>
                </form>
                <a className="btn theme-btn mt-0" href="#" role="button">
                  Search
                </a>
              </div>
            </div>
            <div className="col-lg-5 position-relative">
              <img
                src="assets/images/home-vector.png"
                className="img-fluid right-vector"
                alt="right-vector"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Slider
