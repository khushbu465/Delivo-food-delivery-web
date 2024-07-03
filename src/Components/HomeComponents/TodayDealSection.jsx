import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const TodayDealSection = () => {
    return (
        <>
            <section className="section-b-space">
                <div className="container">
                    <div className="title">
                        <h2>Today’s Deal</h2>
                        <div className="loader-line" />
                        <div className="sub-title">
                            <p>Take a benefit from our latest offers.</p>
                        </div>
                    </div>
                    <div className="position-relative">
                        <Swiper loop={true} slidesPerView={1} grabCursor={true} spaceBetween={10}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Navigation]} className="mySwiper p-4"
                            breakpoints={{
                                768: {
                                    slidesPerView: 3,
                                },

                                992: {
                                    slidesPerView: 5,
                                },

                                1200: {
                                    slidesPerView: 5,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="banner-part">
                                        <a href="#">
                                            <img
                                                className="img-fluid banner-img"
                                                src="assets/images/offer/of1.png"
                                                alt="banner"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="banner-part">
                                        <a href="#">
                                            <img
                                                className="img-fluid banner-img"
                                                src="assets/images/offer/of2.png"
                                                alt="banner"
                                            />
                                        </a>
                                    </div>
                                </div>

                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="banner-part">
                                        <a href="#">
                                            <img
                                                className="img-fluid banner-img"
                                                src="assets/images/offer/of3.png"
                                                alt="banner"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="banner-part">
                                        <a href="#">
                                            <img
                                                className="img-fluid banner-img"
                                                src="assets/images/offer/of4.png"
                                                alt="banner"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="banner-part">
                                        <a href="#">
                                            <img
                                                className="img-fluid banner-img"
                                                src="assets/images/offer/of5.png"
                                                alt="banner"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="banner-part">
                                        <a href="#">
                                            <img
                                                className="img-fluid banner-img"
                                                src="assets/images/offer/of6.png"
                                                alt="banner"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="swiper-slide">
                                    <div className="banner-part">
                                        <a href="#">
                                            <img
                                                className="img-fluid banner-img"
                                                src="assets/images/offer/of7.png"
                                                alt="banner"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TodayDealSection
