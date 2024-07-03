import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Brand = () => {
    return (
        <>
            <section className="brand-section">
                <img
                    className="img-fluid item-4"
                    src="assets/images/svg/item4.svg"
                    alt="item-4"
                />
                <div className="container">
                    <div className="title">
                        <h2>Brand For You</h2>
                        <div className="loader-line" />
                        <div className="sub-title">
                            <p>Browse out top brands here to discover different food cuision.</p>
                        </div>
                    </div>
                    <div className="theme-arrow">
                        <div className="swiper brands-logo">
                            <Swiper
                                loop={true}
                                slidesPerView={1}
                                grabCursor={true}
                                spaceBetween={10}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                navigation={{
                                    nextEl: '.brand-next',
                                    prevEl: '.brand-prev',
                                }}
                                modules={[Autoplay, Navigation]}
                                className="mySwiper p-4"
                                breakpoints={{
                                    768: {
                                        slidesPerView: 3,
                                    },

                                    992: {
                                        slidesPerView: 8,
                                    },

                                    1200: {
                                        slidesPerView: 8,
                                    },
                                }}
                            >
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="brand-box">
                                            <a href="#" className="food-brands">
                                                <img
                                                    className="img-fluid brand-img"
                                                    src="assets/images/icons/brand1.png"
                                                    alt="brand1"
                                                />
                                            </a>
                                            <a href="#">
                                                <h4>La Pino’z</h4>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="brand-box">
                                            <a href="#" className="food-brands">
                                                <img
                                                    className="img-fluid brand-img"
                                                    src="assets/images/icons/brand2.png"
                                                    alt="brand2"
                                                />
                                            </a>
                                            <a href="#">
                                                <h4>Mc'd</h4>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="brand-box">
                                            <a href="#" className="food-brands">
                                                <img
                                                    className="img-fluid brand-img"
                                                    src="assets/images/icons/brand3.png"
                                                    alt="brand3"
                                                />
                                            </a>
                                            <a href="#">
                                                <h4>Starbucks</h4>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="brand-box">
                                            <a href="#" className="food-brands">
                                                <img
                                                    className="img-fluid brand-img"
                                                    src="assets/images/icons/brand4.png"
                                                    alt="brand2"
                                                />
                                            </a>
                                            <a href="#">
                                                <h4>Pizza Hut</h4>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="brand-box">
                                            <a href="#" className="food-brands">
                                                <img
                                                    className="img-fluid brand-img"
                                                    src="assets/images/icons/brand5.png"
                                                    alt="brand2"
                                                />
                                            </a>
                                            <a href="#">
                                                <h4>Wendy's</h4>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="brand-box">
                                            <a href="#" className="food-brands">
                                                <img
                                                    className="img-fluid brand-img"
                                                    src="assets/images/icons/brand6.png"
                                                    alt="brand6"
                                                />
                                            </a>
                                            <a href="#">
                                                <h4>Burger King</h4>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="brand-box">
                                            <a href="#" className="food-brands">
                                                <img
                                                    className="img-fluid brand-img"
                                                    src="assets/images/icons/brand7.png"
                                                    alt="brand7"
                                                />
                                            </a>
                                            <a href="#">
                                                <h4>Subway</h4>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="brand-box">
                                            <a href="#" className="food-brands">
                                                <img
                                                    className="img-fluid brand-img"
                                                    src="assets/images/icons/brand8.png"
                                                    alt="brand8"
                                                />
                                            </a>
                                            <a href="#">
                                                <h4>Domino's</h4>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="brand-box">
                                            <a href="#" className="food-brands">
                                                <img
                                                    className="img-fluid brand-img"
                                                    src="assets/images/icons/brand9.png"
                                                    alt="brand9"
                                                />
                                            </a>
                                            <a href="#">
                                                <h4>Taco Bell</h4>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="brand-box">
                                            <a href="#" className="food-brands">
                                                <img
                                                    className="img-fluid brand-img"
                                                    src="assets/images/icons/brand10.png"
                                                    alt="brand5"
                                                />
                                            </a>
                                            <a href="#">
                                                <h4>Chipotle</h4>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="brand-box">
                                            <a href="#" className="food-brands">
                                                <img
                                                    className="img-fluid brand-img"
                                                    src="assets/images/icons/brand11.png"
                                                    alt="brand11"
                                                />
                                            </a>
                                            <a href="#">
                                                <h4>KFC</h4>
                                            </a>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="swiper-button-next brand-next" />
                        <div className="swiper-button-prev brand-prev" />
                    </div>
                </div>
            </section>

        </>
    )
}

export default Brand
