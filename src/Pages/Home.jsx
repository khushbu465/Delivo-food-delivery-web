import React from 'react'
import Slider from '../Components/HomeComponents/Slider'
import Categories from '../Components/HomeComponents/Categories'
import TodayDealSection from '../Components/HomeComponents/TodayDealSection'
import FeaturedRestaurants from '../Components/HomeComponents/FeaturedRestaurants'
import Brand from '../Components/HomeComponents/Brand'
import PopularRestaurants from '../Components/HomeComponents/PopularRestaurants'
// import AppSection from '../Components/HomeComponents/AppSection'

const Home = () => {
    return (
        <>
            <Slider />
            <Categories />
            <TodayDealSection />
            <Brand />
            <FeaturedRestaurants />
            <PopularRestaurants />
            {/* <AppSection/> */}
        </>
    )
}

export default Home
