import React from 'react'

const FeaturedProduct = () => {
    return (
        <>
            <div className="col-xl-3 col-lg-4 col-sm-6">
                <div className="vertical-product-box">
                    <div className="seller-badge">
                        <img
                            className="img-fluid badge"
                            src="assets/images/svg/medal-fill.svg"
                            alt="medal"
                        />
                        {/* <h6>Exclusive</h6> */}
                    </div>
                    <div className="vertical-product-box-img">
                        <a href="#">
                            <img
                                className="vertical-product-img-top w-100 bg-img"
                                src="assets/images/product/vp-10.png"
                                alt="vp-2"
                            />
                        </a>
                        <div className="offers">
                            <h6>upto $2</h6>
                            <div className="d-flex align-items-center justify-content-between">
                                <h4>50% OFF</h4>
                            </div>
                        </div>
                    </div>
                    <div className="vertical-product-body">
                        <div className="d-flex align-items-center justify-content-between mt-sm-3 mt-2">
                            <a href="#">
                                <h4 className="vertical-product-title">Ribeye Junction</h4>
                            </a>
                            <h6 className="rating-star">
                                <span className="star">
                                    <i className="ri-star-s-fill" />
                                </span>
                                3.2
                            </h6>
                        </div>
                        <h5 className="product-items">
                            Chicken quesadilla, avocado....    &emsp; <b>500 ₹</b>
                        </h5>
                        <div className="location-distance d-flex align-items-center justify-content-between pt-sm-3 pt-2">
                            <h5 className="place">California</h5>
                            <ul className="distance">
                                <li>
                                    <i className="ri-map-pin-fill icon" /> 1 km
                                </li>
                                <li>
                                    <i className="ri-time-fill icon" /> 10 min
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeaturedProduct
