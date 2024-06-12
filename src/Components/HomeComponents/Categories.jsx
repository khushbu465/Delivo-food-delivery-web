import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import CatCard from './CatCard';

const Categories = () => {
    return (
        <>
            <div className="categories-section">
                <img src="assets/images/popcorn.png" className="img-fluid popcorn-img" alt="" />
                <div className="container">
                    <div className="position-relative category-top">
                        <div className="swiper categories-no-arrow categories-style">
                            <Swiper
                                loop={true} slidesPerView={1} grabCursor={true} spaceBetween={10}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }} 
                                // navigation={true}
                                modules={[Autoplay, Navigation]} className="mySwiper p-4"
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
                                    <CatCard img="thali.png" title="Thali" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-1.png" title="Pizza" />
                                </SwiperSlide>
                                <SwiperSlide><CatCard img="p-2.png" title="Chicken" /></SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-3.png" title="Burger" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-5.png" title="Fries" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-6.png" title="Boritto" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-7.png" title="Taco" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-8.png" title="Muffin" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-10.png" title="Panner" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-11.png" title="Hotdog" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-12.png" title="Donuts" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-13.png" title="Coffee" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-14.png" title="Sandwich" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="cake.png" title="Cake" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-15.png" title="Noddle" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-16.png" title="Pasta" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-17.png" title="Meggi" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-18.png" title="Momos" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-19.png" title="Salad" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <CatCard img="p-20.png" title="Biryani" />
                                </SwiperSlide>
                              
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories
